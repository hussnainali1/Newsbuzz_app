import requests
from bs4 import BeautifulSoup


def main_heading(input_list):
    tag_article_data = input_list.find_all("article")
    # print(len(tag_article))
    for art_div in tag_article_data:
        fun_div_h2_tag = art_div.find('h2')
        fun_link = fun_div_h2_tag.find('a')
        print(fun_link.text)
        print(fun_link.get("href"))
        fun_link_article = fun_link.get("href")
        #     <<--------------this is the inner detail of news-------------------->>
        fun_response = requests.get(fun_link_article)
        fun_data_des = fun_response.text
        fun_soup_des = BeautifulSoup(fun_data_des, 'html.parser')
        fun_main_article = fun_soup_des.find('article', {'class': 'story'})
        fun_upper_div = fun_main_article.find('div', {'class': 'template__main'})
        # print(upper_div.text)
        # print('<<<<<<<===2===>>>>>>')
        # print('<<<<<<<===now divide to a single p tag===>>>>>>')
        fun_div_des = fun_upper_div.find('div', {'class': 'story__content'})
        fun_p_article = fun_div_des.find_all('p')
        for all_py in fun_p_article:
            print(all_py.text)
    return




#                  <<----------main work is here------>>
link = "https://www.dawn.com/world"

response = requests.get(link)
data = response.text

soup = BeautifulSoup(data, 'html.parser')
body_tag_world = soup.find('body')
tags_place1_world = body_tag_world.find('div', {'class': "container-fluid clearfix"})
tags_place2_world = tags_place1_world.find('div', {'class': "content"})
tags_main_world = tags_place2_world.find("main")
tag_div_grid = tags_main_world.find_all('div', {'class': "grid"})#big mews container
#<--------for first element------->
tag_div_grid_1 = tag_div_grid[0].find_all('div', {'class': "grid__item sm-w-1/2 w-full"})#left coloum in container
# print(tag_div_grid_1[0].text)
tag_div_grid_newspart = tag_div_grid_1[0].find_all(lambda tag: tag.name == 'div' and
                               tag.get('class') == ['mb-4'])

main_div_news = tag_div_grid_1[0].find('div', {'class': "mb-4 border-b border-b-grey-default border-b-solid"})
main_heading(main_div_news)

# i=1
# for error in tag_div_grid_newspart:
#     print("<<-----------",i,"---------->>>")
#     print(error.text)
#     i+=1
# print(len(tag_div_grid_newspart))
# print(tag_div_grid_newspart[4].text)#12...14
#     <<--------------this is the top right section-------------------->>
i=0
while(i<5):
    if i==1 or i==3 :
        i+=1
    # print("this is i=", i)
    tag_article = tag_div_grid_newspart[i].find_all("article")
    # print(len(tag_article))
    for art in tag_article:
        h2_tag = art.find('h2')
        link = h2_tag.find('a')#// contain links
        # print(link.text)
        # print(link.get("href"))
        link_article = link.get("href")
        #     <<--------------this is the inner detail of news-------------------->>
        response = requests.get(link_article)
        data_des = response.text
        soup_des = BeautifulSoup(data_des, 'html.parser')
        main_article = soup_des.find('article', {'class': 'story'})
        upper_div = main_article.find('div', {'class': 'template__main'})
        # print(upper_div.text)
        # print('<<<<<<<===2===>>>>>>')
        # print('<<<<<<<===now divide to a single p tag===>>>>>>')
        div_des = upper_div.find('div', {'class': 'story__content'})
        p_article = div_des.find_all('p')
        print("---------------")
        for detail_p_tag in p_article:
            print(detail_p_tag.text) #// contain entire news p tags to be saved


    i+=1

