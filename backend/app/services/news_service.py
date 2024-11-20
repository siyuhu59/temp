# services/news_service.py
from typing import List
from models.news_model import News
from db.Database import db

def get_news_with_id(id:int) -> News:
    news = db.select('select * from News where news_id = (%s)', (id))[0]
    return news

def get_news_id_list() -> List[dict]:
    news_id_list = db.select('select news_id from News')
    for i in range(len(news_id_list)):
        news_id_list[i] = news_id_list[i]['news_id']
    return news_id_list

def get_news_with_category(category: int) -> List[News]:
    news_list = db.select('select * from News where category=(%s)', (category))
    return news_list

def get_news_today() -> List[News]:
    news_list = db.select('select * from News order by view desc, upload_date desc limit 10')
    return news_list

def get_news_recent() -> List[News]:
    news_list = db.select('select * from News order by upload_date desc limit 10')
    return news_list