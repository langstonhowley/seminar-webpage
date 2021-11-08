import json
import os
import pandas as pd
import requests
import csv
import re

#These are the dicts that hold each data point
countries_final_dict = {}
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
        json.dump(json_dict, file)

def main():
    
    global countries_final_dict
    '''
        The aggregator script takes all the data we've found online and collects
        them into dicts, then outputs the dicts into JSON files so it can be easily
        interacted with and used later.
    '''

    #This is the data from WWF covering the living planet index 
    #by continental reigon
    filename = res_dir + '/data/living-planet-index-by-region.csv'

    if(not os.path.exists(res_dir + '/data/regional_living_planet_index.json')):
        with open(filename, 'r') as file:
            reader =  csv.DictReader(file)
            for row in reader:
                regions[row['Region']] = float(row['Percent'])
            
        writeToJson(regions, res_dir + '/data/regional_living_planet_index.json')

    #This is the list of endangered "red listed species" from the IUCN
    filename = res_dir + '/data/Table 3  Species by kingdom and class - show all.csv'

    if(not os.path.exists(res_dir + '/data/endagered_extinct_species.json')):
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

    if(not os.path.exists(res_dir + '/data/countries.json')):
        with open(filename, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                country_code = row['Code']
                if(countries_final_dict.get(country_code) == None):
                    countries_final_dict[country_code] = {}

                countries_final_dict[country_code]['Name'] = row['Entity']
                net_conversion = float(row['Net forest conversion'])
                if(net_conversion > 0):
                    countries_final_dict[country_code][row['Year']] = net_conversion

        writeToJson(countries_final_dict, res_dir + '/data/countries.json')


    if(not os.path.exists(res_dir + '/data/tree_cover_loss_in_specific_countries2021.json')):
        filename = res_dir + '/data/statistic_id1025472_global-tree-cover-loss-2020-by-key-country.xlsx'
        data = pd.read_excel(filename, sheet_name='Data')

        deforestation_data = {}
        for i in range (5, 14):
            deforestation_data[data.at[i, 'Unnamed: ' + str(1)]] = data.at[i, 'Unnamed: ' + str(2)]
            # for j in range (1, 3):
            #     print(data.at[i,'Unnamed: ' + str(j)])

        writeToJson(deforestation_data, res_dir + '/data/tree_cover_loss_in_specific_countries2021.json')

    print()

    if(not os.path.exists(res_dir + '/data/country_names_from_react.json')):
        res = requests.get("https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json").json()
        
        countries_final_dict = {}
        with open(res_dir + '/data/countries.json', 'r') as file:
                countries_file = json.load(file)

                for country_code in countries_file:
                    countries_final_dict[country_code] = {'names': [countries_file[country_code]['Name']], 'years': []}

                    for year, value in countries_file[country_code].items():
                        if(not year == "Name"):
                            countries_final_dict[country_code]['years'].append({year: value})
        
        for country_data in res["objects"]["ne_110m_admin_0_countries"]["geometries"]:
            name = country_data["properties"]["NAME"]
            iso = country_data["properties"]["ISO_A3"]
            
            try:
                if( not(countries_final_dict[iso]['names'][0] == name)):
                    countries_final_dict[iso]['names'].append(name)
            except:
                countries_final_dict[iso] = {'names': [name], 'years': []}
                #print("Don't have " + str(iso) + " - " + str(name))

        
        public_dir_path = os.path.abspath(os.getcwd() + '/../public')

        with open(public_dir_path + '/redlist-chromists-by-country.csv') as csv_file:
            fieldnames = ['Name', 'EX', 'EW', 'Subtotal-(EX+EW)', 'CR(PE)', 'CR(PEW)', 'Subtotal-(EX+EW+CR(PE)+CR(PEW))', 'CR', 'EN', 'VU', 'Subtotal(threatened spp.)', 'LR/cd', 'NT or LR/nt', 'LC or LR/lc', 'DD', 'Total']

            reader = csv.DictReader(csv_file)
            writer = csv.DictWriter(csv_file, fieldnames)

            #writer.writeheader()
            temp = []
            for row in reader:
                row_list = list(row.values())

                try:
                    ex_check = int(row['EX'])
                except:
                    name2 = row_list[1]
                    row_list[0] = name2 + " " + row_list[0]

                    row_list[1] = "0"
                    row_list = row_list[:16]

                a = {}
                for i in range(len(row_list)):
                    a[fieldnames[i]] = row_list[i]

                
                for country in countries_final_dict.values():
                    for name in country['names']:
                        found = re.search("^{}$".format(name),row_list[0])
                        if(found is not None):
                            temp.append(country)
                            print(country)
                
            print(len(temp), len(countries_final_dict))
if __name__ == "__main__" :
    main()