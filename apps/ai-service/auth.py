"""HMAC-SHA256 verification of inbound requests from the Vercel-hosted Next.js app."""
from __future__ import annotations

import hashlib
import hmac
import os
import time

TOKEN = os.environ.get("AI_SERVICE_TOKEN", "")
MAX_SKEW_S = 300  # 5 minutes


def verify_signature(*, ts: str, sig: str, body: bytes) -> bool:
    if not TOKEN or not ts or not sig:
        return False
    try:
        ts_int = int(ts)
    except ValueError:
        return False
    if abs(time.time() * 1000 - ts_int) > MAX_SKEW_S * 1000:
        return False

    payload = body.decode("utf-8", errors="replace") if body else "transcribe"
    expected = hmac.new(
        TOKEN.encode("utf-8"),
        f"{ts}.{payload}".encode("utf-8"),
        hashlib.sha256,
    ).hexdigest()
    return hmac.compare_digest(expected, sig)
