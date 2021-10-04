import csv
import json
import os
import xlrd


#These are the dicts that hold each data point
countries = {}
regions = {}
species = {}

#This finds the path of the resources file within the user's system for convenience 
real_path = os.path.realpath(__file__)
dir_path = os.path.dirname(real_path)
os.chdir(dir_path)
os.chdir('../')
res_dir = os.getcwd()


def writeToJson(json_dict, file_path):
    if(os.path.exists(file_path)):
        return
    with open(file_path, 'w') as file:
        json.dump(json_dict, file, )

def main():
    '''
        The aggregator script takes all the data we've found online and collects
        them into dicts, then outputs the dicts into JSON files so it can be easily
        interacted with and used later.
    '''

    #This is the data from WWF covering the living planet index 
    #by continental reigon
    filename = res_dir + '/data/living-planet-index-by-region.csv'

    if(not os.path.exists(filename)):
        with open(filename, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                regions[row['Region']] = float(row['Percent'])
            
        writeToJson(regions, res_dir + '/data/regional_living_planet_index.json')

    #This is the list of endangered "red listed species" from the IUCN
    filename = res_dir + '/data/Table 3  Species by kingdom and class - show all.csv'

    if(not os.path.exists(filename)):
        with open(filename, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                name = row['Name']
                species[name] = {}
                species[name]['Extinct'] = row['EX']
                species[name]['Extinct in the Wild'] = row['EW']
                species[name]['Critically Endangered'] = row['CR']
                species[name]['Endangered'] = row['EN']
                species[name]['Vulnerable'] = row['VU']

        writeToJson(species, res_dir + '/data/endagered_extinct_species.json')

    #This is the annual change in forest area from Our World in Data
    filename = res_dir + '/data/annual-change-forest-area.csv'

    if(not os.path.exists(filename)):
        with open(filename, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                country_code = row['Code']
                if(countries.get(country_code) == None):
                    countries[country_code] = {}

                countries[country_code]['Name'] = row['Entity']
                net_conversion = float(row['Net forest conversion'])
                if(net_conversion > 0):
                    countries[country_code][row['Year']] = net_conversion

        writeToJson(countries, res_dir + '/data/countries.json')

if __name__ == "__main__" :
    main()