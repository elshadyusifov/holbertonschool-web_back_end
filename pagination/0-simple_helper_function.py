#!/usr/bin/env python3
"""
Module 0-simple_helper_function
This module provides a helper function for calculating start
and end indexes for pagination.
"""


from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end index for pagination.

    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: A tuple containing:
            - start index (inclusive)
            - end index (exclusive)
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index
