import matplotlib.pyplot as plt

t = []
U1 = []
UC1 = []
UC3 = []
UC2 = []

with open("rezult.dat", "r") as file:
    lines = file.readlines()
    for line in lines:
        row = line.strip().split()
        t.append(float(row[0]))
        U1.append(float(row[1]))
        UC1.append(float(row[2]))
        UC3.append(float(row[3]))
        UC2.append(float(row[4]))

def graf_U1(t, U1):
    plt.plot(t, U1, label="U1(t)")
    plt.xlabel("t")
    plt.ylabel("U1")
    plt.title("U1 from t")
    plt.legend()
    plt.grid(True)

def graf_UC1(t, UC1):
    plt.plot(t, UC1, label="UC1(t)")
    plt.xlabel("t")
    plt.ylabel("UC1")
    plt.title("UC1 from t")
    plt.legend()
    plt.grid(True)

def graf_UC3(t, UC3):
    plt.plot(t, UC3, label="UC3(t)")
    plt.xlabel("t")
    plt.ylabel("UC3")
    plt.title("UC3 from t")
    plt.legend()
    plt.grid(True)

def graf_UC2(t, UC2):
    plt.plot(t, UC2, label="UC2(t)")
    plt.xlabel("t")
    plt.ylabel("UC2")
    plt.title("UC2 from t")
    plt.legend()
    plt.grid(True)

graf_U1(t, U1)
plt.show()

graf_UC1(t, UC1)
plt.show()

graf_UC3(t, UC3)
plt.show()

graf_UC2(t, UC2)
plt.show()



