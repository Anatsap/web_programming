from math import sin, pi
import numpy as np
import os
path = '/home/atsap/web_programming/rezult.dat'
if os.path.exists(path):
    os.remove(path)
R1 = 10
R2 = 20
R3 = 50
R4 = 100
C1 = 0.0001
C2 = 0.0002
C3 = 0.0003
a = 0.006
T = 4 * a
h = T/400
N = int(5 * T / h)
U1 = 0
U10 = 0
b = [0.0, 0.0, 0.0]

x_old = [0.0, 0.0, 0.0] 
x_new = x_old.copy() 
t = 0 
def system(x, U1):
    x0, x1, x2 = x
    dx0 = (1 / (C1 * R1)) * (U1 - x0 - x1)
    dx1 = (1 / C3) * (U1/R1 - x0/R1 + x2/R2 - x1 * (1/R1 + 1/R2 + 1/R3))
    dx2 = (1 / C2) * (x1/R2 - x2 * (1/R2 + 1/R4))
    return [dx0, dx1, dx2]

def f(x_new, x_old, U1, U10):
    fx = system(x_new, U1)
    fx_o = system(x_old, U10)
    result = []
    for i in range(3):
        result.append(x_new[i] - x_old[i] - h/2 * (fx[i]  + fx_o[i]))
    return result

def jacobian():
    J = [[1 + (h/( 2 * C1 * R1)), h/(2 * C1 * R1), 0],
        [h/(2 * C3 * R1), 1 + (h/(2 * C3 * (1/R1 + 1/R2 + 1/R3))), - (h)/(2 * C3 * R2)],
        [0,  - h/(2 * C2 * R2), 1 + h/(2 * C2) * (1/R2 + 1/R4)]]
    return J

def get_U1(t):
    t_current = t
    t_mod = t_current % T
    if 0 <= t_mod < a:
        U1 = 10
    elif a <= t_mod < 2*a:
        U1 = 10
    elif 2*a <= t_mod < 3*a:
        U1 = -10
    elif 3*a <= t_mod < 4*a:
        U1 = -10
    else:
        U1 = 0
    return U1

def sol():
    t = 0
    rezults = []
    for step in range(0, N - 1):
        U10 = get_U1(t)
        U1 = get_U1(t + h)
        # b0, b1, b2 = b
        # b0 = x_old[0] + (h/2) * ((U10 - x_old[0] - x_old[1])/(R1 * C1) + U1/(C1 * R1))
        # b1 = x_old[0] + (h/(2 * C3)) * ((U10/R1 - x_old[0]/R1 + x_old[2]/R2 - (1/R1 + 1/R2 + 1/R3) * x_old[1]) + h/(2 * C3 * R1) * U1)
        # b2 = x_old[2] + (h/(2 * C2)) * (x_old[1]/R2 - ((1/R2 + 1/R4) * x_old[2]))
        fx = f(x_new, x_old, U1, U10)
        J = jacobian()
        solution = []
        for val in fx:               
            solution.append(-val)
        dx = np.linalg.solve(J, solution)
        for i in range(3):
            x_new[i] = x_new[i] + dx[i]
        x_old[0] = x_new[0]
        x_old[1] = x_new[1]
        x_old[2] = x_new[2]
        t = t + h
        if step % 4 == 0:
            rezults.append([t, x_new[0], x_new[1], x_new[2]])
        else:
            continue
        print(f"Step {step+1}: t : {t}, x = {x_new}")
    return rezults

with open("rezult.dat", "w") as file:
    info = sol()
    for line in info:
        file.write(" ".join(map(str, line)) + "\n")