#!/usr/bin/env python3
"""
2-measure_runtime.py

Measures runtime of four async_comprehension coroutines concurrently.
"""

import asyncio
from time import perf_counter

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Run async_comprehension four times in parallel using asyncio.gather,
    measure the total runtime, and return it.
    """
    start = perf_counter()
    coros = [
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    ]
    await asyncio.gather(*coros)
    end = perf_counter()
    return end - start
