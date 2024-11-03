import os

import pandas as pd
from django.conf.urls.static import static
from django.http import HttpResponse
from django.shortcuts import render

from djangoProject import settings


# Create your views here.

def index(request):
    if request.method == 'POST':
        file = request.FILES.get('file')
        if file:
            # 确保 data 目录存在
            data_dir = os.path.join(settings.STATIC_URL, 'data')
            os.makedirs(data_dir, exist_ok=True)
            # 删除目录中已有的所有文件
            for existing_file in os.listdir(data_dir):
                file_path = os.path.join(data_dir, existing_file)
                try:
                    if os.path.isfile(file_path):
                        os.remove(file_path)
                except Exception as e:
                    return HttpResponse(f'Error deleting files: {str(e)}', status=500)
            # 构建文件路径
            file_path = os.path.join(data_dir, file.name)

            # 保存文件
            with open(file_path, 'wb+') as destination:
                for chunk in file.chunks():
                    destination.write(chunk)

            return render(request, 'layout/base.html')
        else:
            return HttpResponse('No file selected.', status=400)
    file_path = os.path.join(settings.STATIC_URL, 'data_get', '数据模板.xlsx')
    df = pd.read_excel(file_path)
    # 获取列头
    headers = df.columns.tolist()
    # 获取数据行
    data = df.values.tolist()
    # 将数据传递给模板
    context = {
        'headers': headers,
        'data': data,
    }
    return render(request, 'PM_web/index.html', context)

def describe(request):
    return render(request, 'PM_web/describe.html')
