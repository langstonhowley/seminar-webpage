import csv
import os

countries = {}
regions = {}
species = {}
real_path = os.path.realpath(__file__)
dir_path = os.path.dirname(real_path)
os.chdir(dir_path)
os.chdir('../')
res_dir = os.getcwd()


def main():

    with open(res_dir + '/data/living-planet-index-by-region.csv') as file:
        reader = csv.DictReader(file)
        for row in reader:
            regions[row['Region']] = float(row['Percent'])

    with open(res_dir + '/data/Table 3  Species by kingdom and class - show all.csv') as file:
        reader = csv.DictReader(file)
        for row in reader:
            name = row['Name']
            species[name] = {}
            species[name]['Extinct'] = row['EX']
            species[name]['Extinct in the Wild'] = row['EW']
            species[name]['Critically Endangered'] = row['CR']
            species[name]['Endangered'] = row['EN']
            species[name]['Vulnerable'] = row['VU']

    print(species)

if __name__ == "__main__" :
    main()