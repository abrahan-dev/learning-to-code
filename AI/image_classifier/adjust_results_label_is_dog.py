def adjust_results_label_is_dog(results_dic, dogfile):
    """
    Adjusts the results dictionary to determine if the classifier correctly
    identified images of dogs. 

    Parameters:
    results_dic - A dictionary with key as image filename and value as a list
    where index 0 is the pet image label, index 1 is the classifier label, and
    index 2 is the classifier label's probability.

    dogfile - A file that contains names of all dogs from the classifier
    function. This file has one dog name per line.

    Returns:
    None - The function modifies the results dictionary to include new keys and
    values.
    """
    dognames_dic = dict()
    
    with open(dogfile, "r") as infile:
        line = infile.readline()
        
        while line != "":
            dog_name = line.rstrip()
            dognames_dic[dog_name] = 1            
            line = infile.readline()

    for key in results_dic:
        pet_label_image_is_dog = results_dic[key][0] in dognames_dic
        classifier_label_is_dog = results_dic[key][1] in dognames_dic

        if pet_label_image_is_dog:
            results_dic[key].append(1)
        else:
            results_dic[key].append(0)
        
        if classifier_label_is_dog:
            results_dic[key].append(1)
        else:
            results_dic[key].append(0)
    None
