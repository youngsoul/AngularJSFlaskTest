from flask import Flask
from flask.templating import render_template

app = Flask(__name__, static_folder="./static", static_url_path='')


@app.route('/colorPicker')
def color_picker():
    return app.send_static_file('colorPickerAwesomer.html')

@app.route('/time')
def time():
    return app.send_static_file('time.html')

@app.route('/Guidebook')
def guidebook():
    return app.send_static_file('guidebook.html')

@app.route('/dirtest')
def dirtest():
    return app.send_static_file('dirtest.html')

if __name__ == '__main__':
    app.debug = True
    app.run()
