class ErrorCode: 
    @staticmethod
    def get_error_message(errorCode):
        return f"[{errorCode.code}] : {errorCode.message}"
    
    NEWS_CANNOT_FOUND = {
        "code" : 10010,
        "message": "뉴스 본문을 찾을 수 없음"
    }