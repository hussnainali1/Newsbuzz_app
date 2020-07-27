

import requests
from bs4 import BeautifulSoup
def m1(fun_main_article_2):
    fun_main_article_3 = fun_main_article_2[2].find_all('p')
    if not fun_main_article_2[2].find_all('p'):
        return
    for aa in fun_main_article_3:
        print(aa.text)
    print("================here ends ===============")
    return

def secendery_handle(fun_soup_des):
    fun_main_article_0 = fun_soup_des.find(lambda tag: tag.name == 'body')
    if not fun_soup_des.find(lambda tag: tag.name == 'body'):
        return

    fun_main_article_1 = fun_main_article_0.find(lambda tag: tag.name == 'article' and tag.get('class') == ['story'])
    if not fun_main_article_0.find(lambda tag: tag.name == 'article' and tag.get('class') == ['story']):
        return

    fun_main_article_2 = fun_main_article_1.find_all('div', {'class': 'grid no-gutters'})
    if not fun_main_article_1.find_all('div', {'class': 'grid no-gutters'}):
        return

    fun_main_article_3 = fun_main_article_2[3].find_all('p')
    if not fun_main_article_2[3].find_all('p'):
        m1(fun_main_article_2)
        return
    print("================this is 2ndery page ===============")
    for aa in fun_main_article_3:
        print(aa.text)
    print("================here ends ===============")
    return

class daily_news:
    def main_latest(input_list):
        tag_article_data = input_list.find_all("article")
        counter = 1
        for art_div in tag_article_data:
            fun_div_h2_tag = art_div.find('h2')
            fun_link = fun_div_h2_tag.find('a')

        #     <<--------------printing here-------------------->>
            print("===============================")
            print("this is the pass no ==", counter)
            print(fun_link.text)
            print(fun_link.get("href"))

    #     <<--------------printing here-------------------->>
            fun_link_article = fun_link.get("href")

            fun_response = requests.get(fun_link_article)
            fun_data_des = fun_response.text
            fun_soup_des = BeautifulSoup(fun_data_des, 'html.parser')
            fun_main_article = fun_soup_des.find('article', {'class': 'story'})

            if not fun_soup_des.find('article', {'class': 'story'}):
                secendery_handle(fun_soup_des)
                counter = counter + 1
                # break
                continue

            fun_upper_div = fun_main_article.find('div', {'class': 'template__main'})
            if not fun_main_article.find('div', {'class': 'template__main'}):
                secendery_handle(fun_soup_des)
                counter = counter + 1
                # break
                continue

            # # -----------------------------------
            fun_div_des = fun_upper_div.find('div', {'class': 'story__content pt-1 mt-1'})
            if not fun_upper_div.find('div', {'class': 'story__content pt-1 mt-1'}):
                secendery_handle(fun_soup_des)
                counter = counter + 1
                # break
                continue
            # -----------------------------------
            print("this is the pass no ==", counter)
            # print(fun_link.text)
            # print(fun_link.get("href"))

            fun_p_article = fun_div_des.find_all('p')
            for all_py in fun_p_article:
                print(all_py.text)
            counter += 1
        return


    link = "https://www.dawn.com/latest-news"
    response = requests.get(link)
    data = response.text

    soup = BeautifulSoup(data, 'html.parser')
    body_tag = soup.find('body')
    tags_place1 = body_tag.find('div', {'class': "container-fluid clearfix"})
    middle_div = tags_place1.find("div",  {'class': "content"})
    tags_place2 = middle_div.find('main')
    tags_place3 = tags_place2.find('div', {'class': "tabs my-2"})
    tags_place4 = tags_place3.find_all('div', {'class': "grid"})
    for main_content in tags_place4:
        tags_place5 = main_content.find_all('div', {'class': "grid__item sm-w-11/12 w-full"})
        for inner_news in tags_place5:
            tags_place6 = inner_news.find('div', {'class': "tabs__content px-0"})
            tags_place7 = tags_place6.find_all('div', {'class': "tabs__pane active"})
            for all_articl in tags_place7:
                main_latest(all_articl)
