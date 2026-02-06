
interface Env {
    GOOGLE_API_KEY: string;
}

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
            return new Response(JSON.stringify({ error: "Configuration Error: Missing API Key" }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        if (!text) {
            return new Response(JSON.stringify({ error: "Missing text input" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Use provided voice or default to US Female
        const voiceName = name || "en-US-Neural2-F";
        const voiceLanguage = languageCode || "en-US";

        const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize`, {
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
                    speakingRate: speakingRate || 1.0
                },
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return new Response(JSON.stringify(data), {
                status: response.status,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify(data), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: "Server Error", details: String(err) }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
