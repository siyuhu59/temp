# router/news_router.py
from fastapi import APIRouter
from models.news_model import NewsResponse
from typing import List
from services.news_service import get_news_with_id, get_news_id_list, get_news_with_category, get_news_recent, get_news_today
from services.kanji_service import get_kanji_in_news
from datetime import datetime

router = APIRouter()

@router.get('/news/content/{news_id}', response_model=NewsResponse)
async def news_content_with_id(news_id:int):
    news_data = get_news_with_id(news_id)
    kanji_list = get_kanji_in_news(news_id)
    try:
        news_data['upload_date']=news_data['upload_date'].strftime("%Y.%m.%d")
    except Exception as e:
        print('is not DateTime!')
    
    return {'news': news_data, 'kanji_list': kanji_list}

@router.get('/news/list')
async def news_id_list():
    news_list = get_news_id_list()
    return {'news_list': news_list}

@router.get('/news/recent')
async def news_recent():
    news_list = get_news_recent()
    return {'news_list': news_list}

@router.get('/news/today_hot')
async def news_today():
    news_list = get_news_today()
    return {'news_list': news_list}

"""
response = List[News]
"""
@router.get('/news/{category}')
async def news_with_category(category:int):
    news_list = get_news_with_category(category)
    return {'news_items':news_list}