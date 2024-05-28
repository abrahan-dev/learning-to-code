def calculates_results_stats(results_dic):
    """
    Calculates statistics of the results of the program run using classifier's model 
    architecture to classifying pet images. Then puts the results statistics in a 
    dictionary (results_stats_dic) so that it's returned for printing as to help
    the user to determine the 'best' model for classifying images. 

    Parameters:
    results_dic - A dictionary with key as image filename and value as a list.

    Returns:
    results_stats_dic - Dictionary that contains the results statistics (either a percentage or a count) where
    the key is the statistic's name and the value is the statistic's value. See comments in the code to see the
    specific key-value pairs in the dictionary.
    """
    results_stats_dic = dict()
    n_images = len(results_dic)
    n_dogs_img = 0
    n_notdogs_img = 0
    n_match = 0
    n_correct_dogs = 0
    n_correct_notdogs = 0
    n_correct_breed = 0
    
    for key in results_dic:
        if results_dic[key][2] == 1:
            n_match += 1
        # Pet image label is a dog
        if results_dic[key][3] == 1:
            n_dogs_img += 1
            # Classifier classifies image as a dog
            if results_dic[key][4] == 1:
                n_correct_dogs += 1
                # Labels match exactly
                if results_dic[key][2] == 1:
                    n_correct_breed += 1
        # Pet image label is not a dog
        else:
            n_notdogs_img += 1
            # Classifier classifies image as not a dog
            if results_dic[key][4] == 0:
                n_correct_notdogs += 1
    
    # Calculates the percentages
    pct_match = (n_match / n_images) * 100
    pct_correct_dogs = (n_correct_dogs / n_dogs_img) * 100
    pct_correct_breed = (n_correct_breed / n_dogs_img) * 100
    pct_correct_notdogs = (n_correct_notdogs / n_notdogs_img) * 100
    
    # Adds the statistics to the dictionary
    results_stats_dic['n_images'] = n_images
    results_stats_dic['n_dogs_img'] = n_dogs_img
    results_stats_dic['n_notdogs_img'] = n_notdogs_img
    results_stats_dic['n_match'] = n_match
    results_stats_dic['n_correct_dogs'] = n_correct_dogs
    results_stats_dic['n_correct_notdogs'] = n_correct_notdogs
    results_stats_dic['n_correct_breed'] = n_correct_breed
    results_stats_dic['pct_match'] = pct_match
    results_stats_dic['pct_correct_dogs'] = pct_correct_dogs
    results_stats_dic['pct_correct_breed'] = pct_correct_breed
    results_stats_dic['pct_correct_notdogs'] = pct_correct_notdogs

    return results_stats_dic
