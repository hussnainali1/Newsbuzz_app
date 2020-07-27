import pandas as pd
import requests
from bs4 import BeautifulSoup



link_bs = "https://www.eduvision.edu.pk/admissions.php?discipline_type=&sub_level=7&city=&pageNo=1"
link_ms= "https://www.eduvision.edu.pk/scholarships/hec-local-indigenous.php"
fun_response = requests.get(link_ms)
fun_data_des = fun_response.text
fun_soup_des = BeautifulSoup(fun_data_des, 'html.parser')
fun_main_article = fun_soup_des.find(lambda tag: tag.name == 'body' )
fun_main_article1 = fun_main_article.find('div', {'id': 'page'})
fun_main_article2 = fun_main_article.find('div', {'class': 'right_sidebar'})
fun_main_article3 = fun_main_article.find('div', {'class': 'main_contentLeft page'})
fun_main_article4 = fun_main_article3.find('div', {'class': 'posts-wrap'})
fun_main_article5 = fun_main_article4.find_all('div', {'class': 'row'})
dict1={}
count=1
for all_row in fun_main_article5:
    fun_main_article6 = all_row.find_all('div', {'class': 'col-md-12 col-xs-12'})
    for all_ineer in fun_main_article6:
        fun_main_article7 = all_ineer.find('h2')
        title = fun_main_article7.text #############title
        fun_main_article8=fun_main_article7.find('a')
        link = fun_main_article8.get('href')############link
        link='https://www.eduvision.edu.pk/scholarships/'+ link
        print(link)
        fun_response1 = requests.get(link)
        fun_data_des1 = fun_response1.text
        fun_soup_des1 = BeautifulSoup(fun_data_des1, 'html.parser')
        fun_main_article1b = fun_soup_des1.find('div', {'class':'content-area'})
        fun_main_article2b = fun_main_article1b.find('div', {'class': 'post_content'})
        fun_main_article3b = fun_main_article2b.find('p')
        print()
        description= fun_main_article3b.text.strip()
        new_dic = {
            "tilte": title,
            "link": link,
            "discription": description
        }
        dict1[count] = new_dic
        count = count + 1

        print('-----------------------------------------')

print(dict1)
dataframe = pd.DataFrame.from_dict(dict1)
dataframe.to_json('scholarship_news.json')