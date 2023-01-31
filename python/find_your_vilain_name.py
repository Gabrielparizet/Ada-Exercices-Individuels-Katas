def get_villain_name(birthdate): 
    first = [ "The Evil","The Vile","The Cruel", "The Trashy","The Despicable", "The Embarrassing", "The Disreputable","The Atrocious", "The Twirling",  "The Orange","The Terrifying", "The Awkward"]
    last = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"]
    birthdate = birthdate.split("/")
    month = int(birthdate[0])
    day = int(birthdate[1])
    match month:
        case 1:
            first = first[0]
        case 2:
            first = first[1]
        case 3:
            first = first[2]
        case 4:
            first = first[3]
        case 5:
            first = first[4]
        case 6:
            first = first[5]
        case 7:
            first = first[6]
        case 8:
            first = first[7]
        case 9:
            first = first[8]
        case 10:
            first = first[9]
        case 11:
            first = first[10]
        case 12:
            first = first[11]
    if day > 9 :
        day = list(str(day))
        day = int(day[1])
    match day:
        case 0:
            last = last[0]
        case 1:
            last = last[1]
        case 2:
            last = last[2]
        case 3:
            last = last[3]
        case 4:
            last = last[4]
        case 5:
            last = last[5]
        case 6:
            last = last[6]
        case 7:
            last = last[7]
        case 8:
            last = last[8]
        case 9:
            last = last[9]
    return first + " " + last

            


get_villain_name("12/12/1994")