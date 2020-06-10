import requests
from bs4 import BeautifulSoup

class daily_new:
    # # ==========   Functions  1    ===========
    def box1_data(pass_inner_div_1st):

        fun_inner_div_2nd = pass_inner_div_1st.find('div', {'class': 'content'})
        fun_inner_div_3rd = fun_inner_div_2nd.find('div')
        fun_inner_div_4th = fun_inner_div_3rd.find('div', {'class': 'view-content'})
        fun_inner_div_5th = fun_inner_div_4th.find('div', {'class': 'item-list'})
        fun_inner_div_6th = fun_inner_div_5th.find('ul')
        fun_inner_div_7th = fun_inner_div_6th.find_all('li')
        for fun_li in fun_inner_div_7th:
            fun_inner_div_8th = fun_li.find('div', {'class': 'views-field views-field-title'})
            fun_inner_div_9th = fun_inner_div_8th.find('span')
            fun_inner_div_10th = fun_inner_div_9th.find('a')
            print(fun_inner_div_10th.get('href'))
        return
    # ==========Functions 2 ===========
    def box2_data(pass_inner_div_1st):
        fun_inner_div_2nd = pass_inner_div_1st.find('div', {'class': 'content'})
        fun_inner_div_3rd = fun_inner_div_2nd.find('div')
        print(fun_inner_div_3rd.text)
        for div_t in fun_inner_div_3rd:
            fun_inner_div_4th = div_t.find_all('div', {'class': 'view-content'})
            print(len(fun_inner_div_4th))
        fun_inner_div_5th = fun_inner_div_4th.find('div', {'class': 'item-list'})
        fun_inner_div_6th = fun_inner_div_5th.find('ul')
        fun_inner_div_7th = fun_inner_div_6th.find_all('li')
        for fun_li in fun_inner_div_7th:
            fun_inner_div_8th = fun_li.find('div', {'class': 'views-field views-field-title'})
            fun_inner_div_9th = fun_inner_div_8th.find('span')
            fun_inner_div_10th = fun_inner_div_9th.find('a')
            print(fun_inner_div_10th.get('href'))
        return

    # ==========Functions 3 ===========


    link = "http://www.dailynews.lk/category/world"
    response = requests.get(link)
    data = response.text
    soup = BeautifulSoup(data, 'html.parser')
    main_body = soup.find('body')
    inner_div_1st = main_body.find('div', {'id': 'page'})
    inner_div_2nd = inner_div_1st.find('div', {'id': 'main-content'})
    inner_div_3rd = inner_div_2nd.find('div', {'class': 'container'})
    inner_div_4th = inner_div_3rd.find('div', {'class': 'row'})
    inner_div_5th = inner_div_4th.find('section', {'class': 'col-md-8'})
    inner_div_6th = inner_div_5th.find('div', {'id': 'main'})
    # --------this contain 1st 4-box newa
    inner_div_7th = inner_div_6th.find('div', {'class': 'region region-content'})
    pass_inner_div_1st = inner_div_7th.find('div', {'class': 'block block-system clearfix'})
    # print(inner_div_7th.text)
    box1_data(pass_inner_div_1st)
    # # -------
    # here need to create a function

    # from here 2nd part start
    inner_div_8th = inner_div_6th.find('div', {'class': 'clearfix'})
    print(inner_div_8th.text)
    inner_div_9th = inner_div_8th.find('div', {'class': 'content-footer-area'})
    inner_div_10th = inner_div_9th.find('div', {'class': 'row'})
    inner_div_11th = inner_div_10th.find('div', {'class': 'col-md-12'})
    inner_div_12th = inner_div_11th.find('div', {'class': 'region region-content-footer'})
    inner_div_13th = inner_div_12th.find('div', {'class', 'block block-views clearfix'})
    # print(inner_div_13th.text)
    box2_data(inner_div_13th)
    # # print(inner_div_12th)
    temp = inner_div_5th = inner_div_4th.find('aside')
    temp2 = temp.find('section')
    temp3 = temp2.find('div', {'class': 'region region-sidebar-second'})
    temp4 = temp3.find('div', {'id': 'block-block-53'})
    temp5 = temp4.find('div')
    print(temp5)
    temp6 = temp5.find('div', {'class': 'content'})
    temp6 = temp5.find('div')
