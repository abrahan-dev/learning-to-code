from time import time
from print_functions_for_lab_checks import *
from get_input_args import get_input_args
from get_pet_labels import get_pet_labels
from classify_images import classify_images
from adjust_results_label_is_dog import adjust_results_label_is_dog
from calculates_results_stats import calculates_results_stats
from print_results import print_results

def main():
    start_time = time()
    in_arg = get_input_args()
    check_command_line_arguments(in_arg)
    results = get_pet_labels(in_arg.dir)
    check_creating_pet_image_labels(results)
    classify_images(in_arg.dir, results, in_arg.arch)
    check_classifying_images(results)    
    # Adjusts the results dictionary to determine if classifier correctly 
    # classified images as 'a dog' or 'not a dog'. This demonstrates if 
    # model can correctly classify dog images as dogs (regardless of breed)
    adjust_results_label_is_dog(results, in_arg.dogfile)
    check_classifying_labels_as_dogs(results)

    results_stats = calculates_results_stats(results)
    check_calculating_results(results, results_stats)
    print_results(results, results_stats, in_arg.arch, True, True)

    end_time = time()    
    tot_time = end_time - start_time
    print("\n** Total Elapsed Runtime:",
          str(int((tot_time/3600)))+":"+str(int((tot_time%3600)/60))+":"
          +str(int((tot_time%3600)%60)) )
    
if __name__ == "__main__":
    main()
