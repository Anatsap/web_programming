from math import sin, pi
import numpy as np

U_max = 100
f = 50
t = 0.2
U1 = U_max * sin(2 * pi * f * t)
R1 = 5
R2 = 4
R3 = 7
L1 = 0.01
L2 = 0.02
C1 = 300 * (10 ** (-6))
C2 = 150 * (10 ** (-6))
h = 0.00001

x_old = [0.0, 0.0, 0.0] 
x_new = x_old.copy()  
def system(x):
    x0, x1, x2 = x
    uL1 = ((1/R1 + 1/R2) ** (-1) * ((U1 - x0)/R1 - x1 + x2/R2))
    dx0 = (1 / C1) * R1 * (U1 - x0 - uL1)
    dx1 = (1 / L1) * uL1
    dx2 = (1 / C2) * (uL1 / R2 - x2 * (1/R2 + 1/R3))
    return [dx0, dx1, dx2]

def f(x_new, x_old):
    fx = system(x_new)
    result = []
    for i in range(3):
        result.append(x_new[i] - x_old[i] - h * fx[i])
    return result

def jacobian(f, x_new, x_old):
    n = len(x_new)
    J = [[0.0]*n for _ in range(n)]   
    delta = 1e-6
    fx = f(x_new, x_old)
    for i in range(n):
        x_temp = x_new.copy()
        x_temp[i] += delta
        fx_temp = f(x_temp, x_old)
        difference = []
        for k in range(len(fx)):
            diff_value = (fx_temp[k] - fx[k]) / delta
            difference.append(diff_value)
        for k in range(len(difference)):
            J[k][i] = difference[k]
    return J

for step in range(5):
    fx = f(x_new, x_old)
    J = jacobian(f, x_new, x_old)
    solution = []
    for val in fx:               
        solution.append(-val)
    dx = np.linalg.solve(J, solution)
    for i in range(3):
        x_new[i] = x_new[i] + dx[i]
    x_old[0] = x_new[0]
    x_old[1] = x_new[1]
    x_old[2] = x_new[2]
    print(f"Step {step+1}: x = {x_new}")

