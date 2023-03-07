#!/usr/bin/python3
import random
R = random.randint(-10, 10)
if R > 0:
    print("{} is positive".format(R))
elif R == 0:
    print("{} is zero".format(R))
else:
    print("{} is negative".format(R))

