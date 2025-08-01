#!/usr/bin/env python3
"""
This module contains a function that sums a list of integers and floats.
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of all integers and floats in the list."""
    return sum(mxd_lst)
