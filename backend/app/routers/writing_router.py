from fastapi import APIRouter
from pydantic import BaseModel
from models.writing_model import Writing
from services.writing_service import get_writing, get_evaluation

class WritingItem(BaseModel):
    question: str
    user_input: str


router = APIRouter()

@router.get('/writing', response_model=Writing)
async def writing():
    return get_writing()

@router.post('/writing')
async def evaluation(item: WritingItem):
    return get_evaluation(item.question, item.user_input)