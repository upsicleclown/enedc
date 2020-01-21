import csv


def loadCSV(filename):
    f = open(filename, encoding="utf-8-sig")
    c = csv.reader(f, delimiter=',')
    a = []
    for i in c:
       a.append(i)
    f.close()
    return a

a = loadCSV("anydickv2.csv")

# {"Mazda":{"Mazda 3": 300, "Mazda 4":400, "4Head Bruh Momentum":500}, "BMW":{"300":300, "800":800, "i8":0}};


