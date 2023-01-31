def human_years_cat_years_dog_years(human_years):
    cat_years = 0
    dog_years = 0
    years_counter = 0
    while years_counter <= human_years:
        if years_counter == 1:
            cat_years += 15
            dog_years += 15
        elif years_counter == 2:
            cat_years += 9
            dog_years += 9
        elif years_counter >= 3:
            cat_years += 4
            dog_years += 5
        years_counter += 1
    return [human_years, cat_years, dog_years]

print (human_years_cat_years_dog_years(12))