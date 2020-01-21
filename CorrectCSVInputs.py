import csv
from CSVToArrayEnedc import loadCSV

arr = loadCSV("anydickv2.csv")
fil = open("spaghettibot444.csv", "w", encoding="utf-8-sig")
writer = csv.writer(fil, lineterminator='\n')

# writer.writerow(arr[0])
print(arr[0])
uIn = ''
for i in range(1, len(arr)-1):
    print(arr[i])
    if arr[i][0] == "":

        if arr[i-1][0] == arr[i+1][0] and arr[i-1][0] != '':
            uChoice = input('Enter ' + str(arr[i-1][0]) + '? If not type in the desired make. : ')

            if uChoice != '':
                arr[i][0] = uChoice
            else:
                arr[i][0] = arr[i-1][0]

        elif arr[i-1][0] != '':
            uChoice = input('Enter ' + str(arr[i-1][0]) + '? If not type in the desired make. : ')

            if uChoice != '':
                arr[i][0] = uChoice
            else:
                arr[i][0] = arr[i-1][0]

        elif arr[i+1][0] != '':
            uChoice = input('Enter ' + str(arr[i+1][0]) + '? If not type in the desired make. : ')

            if uChoice != '':
                arr[i][0] = uChoice
            else:
                arr[i][0] = arr[i+1][0]

        else:
            arr[i][0] = input("Please enter the make of this car: "+str(arr[i][1])+": ").strip('\n')
            
    # writer.writerow(arr[i])

print(arr[len(arr)-1])
# writer.writerow(arr[len(arr)-1])
writer.writerows(arr)
fil.close()
    















    