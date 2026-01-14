
interface Env {
    GOOGLE_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const { request, env } = context;

    try {
        const { text, speakingRate } = await request.json() as { text: string, speakingRate?: number };
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

        const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                input: { text },
                // using a specific high quality voice
                voice: { languageCode: "en-US", name: "en-US-Neural2-F" },
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
