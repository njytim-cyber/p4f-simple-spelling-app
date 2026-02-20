
interface Env {
    GOOGLE_API_KEY: string;
}

const ALLOWED_VOICES = new Set([
    'en-US-Neural2-F', 'en-US-Neural2-D', 'en-US-Neural2-J',
    'en-US-Neural2-C', 'en-US-Neural2-H',
    'en-GB-Neural2-F', 'en-GB-Neural2-B', 'en-GB-Neural2-D', 'en-GB-Neural2-N',
]);

const ALLOWED_LANGUAGES = new Set(['en-US', 'en-GB']);

const MAX_TEXT_LENGTH = 5000;
const MIN_RATE = 0.25;
const MAX_RATE = 4.0;

const jsonResponse = (body: object, status = 200) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json" },
    });

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const { request, env } = context;

    try {
        const { text, speakingRate, languageCode, name } = await request.json() as {
            text: string,
            speakingRate?: number,
            languageCode?: string,
            name?: string
        };
        const apiKey = env.GOOGLE_API_KEY;

        if (!apiKey) {
            return jsonResponse({ error: "Configuration Error: Missing API Key" }, 500);
        }

        if (!text || typeof text !== 'string' || text.trim().length === 0) {
            return jsonResponse({ error: "Missing or invalid text input" }, 400);
        }

        if (text.length > MAX_TEXT_LENGTH) {
            return jsonResponse({ error: `Text exceeds maximum length of ${MAX_TEXT_LENGTH} characters` }, 413);
        }

        const rate = typeof speakingRate === 'number' ? speakingRate : 1.0;
        if (rate < MIN_RATE || rate > MAX_RATE) {
            return jsonResponse({ error: `Speaking rate must be between ${MIN_RATE} and ${MAX_RATE}` }, 400);
        }

        const voiceName = name && ALLOWED_VOICES.has(name) ? name : "en-US-Neural2-F";
        const voiceLanguage = languageCode && ALLOWED_LANGUAGES.has(languageCode) ? languageCode : "en-US";

        const response = await fetch("https://texttospeech.googleapis.com/v1/text:synthesize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": apiKey,
            },
            body: JSON.stringify({
                input: { text },
                voice: { languageCode: voiceLanguage, name: voiceName },
                audioConfig: {
                    audioEncoding: "MP3",
                    speakingRate: rate,
                },
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return jsonResponse(data, response.status);
        }

        return jsonResponse(data);

    } catch (err) {
        return jsonResponse({ error: "Server Error", details: String(err) }, 500);
    }
}
