import sqlite3

connection = sqlite3.connect('db.sqlite3')
cursor = connection.cursor()

# english = ['a', 'b', 'ch', 'd', 'e', 'ee', 'f', 'g', 'h', 'i', 'j', 'k',
#            'l', 'm', 'n', 'o', 'p', 'qu', 'r', 's', 't', 'u', 'uu', 'v'
#            'w', 'y', 'z', 'and', 'modh', 'ou', 'nd', 'th', 'oo', 'ng', 'space',
#            'punct', 'silente']

# dwarvish = ['\u16A2', '\u16B1', '\u16B3', '\u16A8', '\u16BA', '\u16BB',
#             '\u16E9', '\u16A0', '\u16E6', '\u16C1', '\u16AD', '\u16B4', 
#             '\u16C5', '\u16D2', '\u16C9', '\u16A3', '\u16B9', '\u16A9', 
#             '\u16CF', '\u16B2', '\u16DA', '\u16DF', '\u16DD', '\u16D5',
#             '\u16C4', '\u16CB', '\u16E3', '\u16C7', '\u16E7', '\u16DE',
#             '\u16EF', '\u16D0', '\u16A4', '\u16B7', '\u16EB', '\u16EC',
#             '\u16BF']

char_dict = {
    'a': '\u16A2',
    'b': '\u16B1',
    'ch': '\u16B3',
    'd': '\u16A8',
    'e': '\u16BA',
    'ee': '\u16BB',
    'f': '\u16E9',
    'g': '\u16A0',
    'h': '\u16E6',
    'i': '\u16C1',
    'j': '\u16AD',
    'k': '\u16B4',
    'l': '\u16C5',
    'm': '\u16D2',
    'n': '\u16C9',
    'o': '\u16A3',
    'p': '\u16B9',
    'qu': '\u16A9',
    'r': '\u16CF',
    's': '\u16B2',
    't': '\u16DA',
    'u': '\u16DF',
    'uu': '\u16DD',
    'v': '\u16D5',
    'w': '\u16C4',
    'y': '\u16CB',
    'z': '\u16E3',
    'and':'\u16C7',
    'modh':'\u16E7',
    'ou':'\u16DE',
    'nd':'\u16EF',
    'th':'\u16D0',
    'oo': '\u16A4',
    'ng': '\u16B7',
    'space': '\u16EB',
    'punct': '\u16EC',
    'silente': '\u16BF'
}


def fetchall_from_table():
    cursor.execute("SELECT * FROM dwarvish_app_char")
    rows = cursor.fetchall()
    for row in rows:
        print(row)

def add_to_db():
    for key in char_dict:
        cursor.execute("INSERT INTO dwarvish_app_char VALUES (NULL, ?, ?)", (char_dict[key], key))
        connection.commit()

# add_to_db()
# fetchall_from_table()
connection.close()