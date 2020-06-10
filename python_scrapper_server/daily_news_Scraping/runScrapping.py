


def main():
    from daily_news_Scraping.daily_news import locala

    # link1 = "https://www.dailynews.com/business/"
    link1 = "https://www.dailynews.com/business/"
    link2 = "https://www.dailynews.com/sports/"
    link3 = "https://www.dailynews.com/things-to-do/"
    link4 = "https://www.dailynews.com/opinion/"
    link5 = "https://www.dailynews.com/local-news/"
    link6 = "https://www.dailynews.com/news/"

    print("Scrappeing has started workign")
    print("DailyBussinesss")
    temp =  locala(link1,"DailyBussinesss") # I want to create the object of class Student and send an attribute??
    temp.mainPro();
    print("DailySports")
    temp = locala(link2, "DailySports")  # I want to create the object of class Student and send an attribute??
    temp.mainPro();
    print("DailylocalNews")
    temp = locala(link5, "DailylocalNews")  # I want to create the object of class Student and send an attribute??
    temp.mainPro();
    print("DailyNews")
    temp = locala(link6, "DailyNews")  # I want to create the object of class Student and send an attribute??
    temp.mainPro();
    # temp = locala(link7, "DailySchoolSports")  # I want to create the object of class Student and send an attribute??
    # temp.mainPro();
if __name__ == '__main__':
    main()