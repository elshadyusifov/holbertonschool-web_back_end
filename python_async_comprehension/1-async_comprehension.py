#!/usr/bin/env python3
from typing import List
async_generator = __import__('0-async_generator').async_generator  


async def async_comprehension() -> List[float]:
    """
    Collect 10 random numbers using async comprehension over async_generator.

    This coroutine asynchronously iterates over the async_generator coroutine,
    which yields 10 random floats, collects them into a list, and returns it.

    Returns:
        List[float]: A list of 10 random floats between 0 and 10.
    """
    return [num async for num in async_generator()]
