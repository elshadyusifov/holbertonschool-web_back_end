#!/usr/bin/env python3
"""
This module contains an asynchronous generator coroutine
that yields 10 random floats between 0 and 10 with a 1-second delay.
"""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Asynchronously yield a random float between 0 and 10, 10 times."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
