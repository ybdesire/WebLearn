# Django project I18n demo
* environment: py3.4.3 + django1.8.2 + Windows
* project setting
    ```bash
    >django-admin startproject I18nDjango
    >cd I18nDjango
    >manage.py startapp i18n
    ```

## 1. Install tool gettext for windows at [here](http://gnuwin32.sourceforge.net/packages/gettext.htm)

## 2. Specify translation strings at source code
### (1) views.py by ugettext() function
```python
from django.utils.translation import ugettext

def index(request):
	return HttpResponse(ugettext('hello world!'))
```
### (2) template by tag {% trans %}
```html
{% load i18n %}
<h1>translation</h1>
<p>{% trans "This is the p element." %}</p>
```

## 3. Create Language Files
### (1) 'mkdir locale' at project path
### (2) Create message file(.po file). This step can extract hard code string
```bash
django-admin.py makemessages -l de
```
### (3) Set LOCALE_PATHS at settings.py, and make sure i18n true
```bash
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
LOCALE_PATHS = ('locale/',
)
```

## 4. Update all messages
```bash
django-admin.py makemessages -a
```

## 5. Compile translation file(.po) to more efficient form(.mo file)
```bash
django-admin.py compilemessages
```

## 6. Add middleware to settings.py MIDDLEWARE_CLASSES. This middleware can make Django project discover languages(from settings or Accept-Language)
```python
MIDDLEWARE_CLASSES = (
	... ...
	'django.middleware.locale.LocaleMiddleware',
)
```
For more details about template i18n, please refer to [here](http://www.djangobook.com/en/2.0/chapter19.html)
