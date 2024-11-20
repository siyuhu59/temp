from models.writing_model import Writing
from scripts.writing.WritingEvaluator import evaluate_sentence
from db.Database import db

def get_writing() -> Writing:
    writing = db.select('select * from Writing order by rand() limit 1')[0]
    writing['words_kanji'] = writing['words_kanji'].split(';')
    writing['words_kana'] = writing['words_kana'].split(';')
    return writing
    
def get_evaluation(question, user_input):
    return evaluate_sentence(question, user_input)