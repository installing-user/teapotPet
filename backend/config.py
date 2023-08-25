import os
import sys
from pathlib import Path

from dotenv.main import load_dotenv

if 'pytest' in sys.argv[0]:
    load_dotenv('../.env')


class Config:
    DEBUG = os.getenv('DEBUG') == 'True'

    PROJECT_PATH = Path(__file__).parent

    SERVER_URL = os.getenv('SERVER_URL')
