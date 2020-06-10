
import requests
from bs4 import BeautifulSoup


class Person(object):
    """__init__() functions as the class constructor"""

    def __init__(self, description=None, link=None, website=None):
        self.description = description
        self.link = link
        self.website = website

   #              <<<<<<<-----------dawn news/magzine-------------->>>>>>>>
class mag:
    detailList = []
    # detailList.append(Person())

    link = "https://www.dawn.com/magazines"

    response = requests.get(link)
    data = response.text

    soup = BeautifulSoup(data, 'html.parser')
    body_tag = soup.find('body')
    tags_place1 = body_tag.find('div', {'class': "container-fluid clearfix"})
    #print("here i M ")
    #print(tags_place1)
    tags_place2 = tags_place1.find('main')
    tags_place3 = tags_place2.find('div', {'class': "grid"})
    tags_place4 = tags_place3.find('div', {'class': "grid__item w-full"})
    tags_place5 = tags_place4.find_all('div', {'class': "mb-4 sm-border-b sm-border-b-solid sm-border-b-grey-default"})
    i = 1
    for inner_news in tags_place5:
        tags_place6 = inner_news.find('div', {'class': "grid"})
        tags_place7 = tags_place6.find_all('div', {'class': "grid__item sm-w-1/4 w-full"})
        #print(len(tags_place5))
        for art in tags_place7:

            article_tag = art.find("article")
            h2_tag = article_tag.find("h2")
            link_tag = h2_tag.find("a")
            magzine_link= link_tag.get('href')
            heading_detail = h2_tag.text
            detailList.append(Person(magzine_link, heading_detail, 'www.dawn.com'))
            #<<<=======================>>>>
            print("_______==== new start", i ,"====________")
            print('lenght of list is', len(detailList))
            print(h2_tag.text)
            print(magzine_link)
            i+=1

            print("_______====end here====________")
            print("")




