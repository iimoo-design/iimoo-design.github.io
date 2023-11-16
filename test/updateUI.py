import tkinter as tk
import json
import chardet

# def on_content_changed(event):
#     # 捕捉 Text 组件的高度和内容高度
#     text_height = int(description_entry.winfo_height() / description_entry.index("end-1c").split('.')[0])
#     content_height = int(description_entry.cget("height"))
    
#     # 检查内容是否超出了当前高度，若超出则增加高度
#     if text_height > content_height:
#         description_entry.config(height=text_height)

# def submit():
#     # 获取七个输入框中的资讯
#     project_name = entries[0].get("1.0", "end-1c")
#     image_link = entries[1].get("1.0", "end-1c")
#     description = entries[2].get("1.0", "end-1c")
#     area = entries[3].get("1.0", "end-1c")
#     date = entries[4].get("1.0", "end-1c")
#     size = entries[5].get("1.0", "end-1c")
#     category = entries[6].get("1.0", "end-1c")

#     # 将使用者输入的内容写入到 JSON 档案
#     data = {
#         "專案名": project_name,
#         "圖片連結": image_link,
#         "描述": description,
#         "區域": area,
#         "日期": date,
#         "坪數": size,
#         "種類": category
#     }
#     with open('data.json', 'w', encoding="utf-8") as file:
#         json.dump(data, file, ensure_ascii=False)
    
#     root.destroy()  # 提交完成后关闭窗口

# # 建立主视窗
# root = tk.Tk()
# root.title("輸入欄範例")

# # 取得屏幕大小
# screen_width = root.winfo_screenwidth()
# screen_height = root.winfo_screenheight()

# # 设定视窗大小为屏幕宽高的一半
# window_width = int(screen_width / 2)
# window_height = int(screen_height / 2)
# root.geometry(f"{window_width}x{window_height}+{window_width // 2}+{window_height // 2}")

# # 创建七组输入框与标签
# labels = ["專案名", "圖片連結", "描述", "區域", "日期", "坪數", "種類"]
# entries = []

# for idx, label_text in enumerate(labels):
#     label = tk.Label(root, text=label_text)
#     label.grid(row=idx, column=0, padx=5, pady=5, sticky='w')
    
#     if label_text == "描述":
#         entry = tk.Text(root, wrap='word', height=5)  # 描述字段预设高度为5行
#         entry.grid(row=idx, column=1, padx=5, pady=5, sticky='ew')
#         entry.bind("<KeyRelease>", on_content_changed)
#         description_entry = entry  # 保存描述字段的引用
#     else:
#         entry = tk.Text(root, wrap='word', height=2)
#         entry.grid(row=idx, column=1, padx=5, pady=5, sticky='ew')
#         entry.bind("<KeyRelease>", on_content_changed)
#     entries.append(entry)

# # 创建提交按钮
# submit_button = tk.Button(root, text="提交", command=submit)
# submit_button.grid(row=len(labels), column=0, columnspan=2, padx=5, pady=10)

# # 设置输入框在主视窗正中间并且平均分配列和行的权重
# for i in range(len(labels)):
#     root.grid_rowconfigure(i, weight=1)
#     root.grid_columnconfigure(i, weight=1)

# # 启动主回圈
# root.mainloop()
