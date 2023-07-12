from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd
import json 
book_list = []
def data_from_daraz(name):
    bs = len(name)
    url = f'https://www.daraz.com.bd/catalog/?q={name}'
    op = webdriver.ChromeOptions()
    op.add_argument('--headless')
    driver = webdriver.Chrome(options=op)
    driver.get(url)


    elements = driver.find_elements(By.CLASS_NAME, 'info--ifj7U')
    for element in elements:
        book_name_a = element.find_element(By.TAG_NAME, 'a')
        book_name = book_name_a.text
        link = book_name_a.get_attribute('href')

        price = element.find_element(By.CSS_SELECTOR, 'span.currency--GVKjl')
        price_text = price.text

        new_book_name = book_name[:bs]
        if new_book_name.lower() == name.lower():
            result = {
                'book_name': book_name,
                'price': price_text[2:],
                'href': link
            }

            book_list.append(result)
    driver.quit()

def save_json(book_name):
    data_from_daraz(book_name)
    sorted_book_list = sorted(
        book_list, key=lambda x: int(x['price'].replace(',', '')))

    book_list.clear()
    final_res = json.dumps(sorted_book_list)
    return final_res
