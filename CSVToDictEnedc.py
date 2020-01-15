import csv


def loadCSV(filename):
    f = open(filename, encoding="utf-8-sig")
    c = csv.reader(f, delimiter=',')    
    a = {}
    for i in c:
        if i[0] not in a.keys():
            a[i[0]] = {i[1]:i[2]}
        else:
            a[i[0]][i[1]] = i[2]  # assumes that there are no repeated identical model names, as they duplicates should have been removed through excel
    a.pop('Mk')  # removes the header from the dict, as it is not needed, code can be commented out if the header is desired
    return a
yummyF = open('anydickv3Dict.txt', 'w', encoding='utf-8-sig')
yummyF.write(str(loadCSV('anydickv3.csv')))
# {"Mazda":{"Mazda 3": 300, "Mazda 4":400, "4Head Bruh Momentum":500}, "BMW":{"300":300, "800":800, "i8":0}};


