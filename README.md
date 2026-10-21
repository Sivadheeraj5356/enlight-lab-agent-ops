# Enlight Lab Agent Ops Launch QA

Static proof-of-work for an AI Engineer Intern application. It frames a production voice-agent release around planner quality, tool integration, speech latency, memory, cost and safe recovery.

## Run

```bash
node test.js
python3 -m http.server 8010
```

Open `http://127.0.0.1:8010`.

## Scope

- Planner and multi-step reasoning checks
- API, CRM and workflow tool execution health
- STT → LLM → TTS latency and interruption handling
- Memory and degraded-service fallback gates
- Launch score from four production readiness domains

All metrics in this demo are representative values in `app.js`, not claimed production results.
