# Sử dụng ReactNavigator trong React Native

# Mục tiêu bài tập
- Biết sử dụng các thành phần trong thư viện React Navigator như TabNavigator, StackNavigator
- Biết cách truyền dữ liệu khi sử dụng StackNavigator, TabNavigator
- Ngoài ra, biết cách chia component cho thuận tiện

# Nội dung bài tập
- Tạo 1 app quản lý danh sách các member trong lớp học
- App có 2 tab : 
    
    Tab1 : Hiển thị danh sách các thành viên trong lớp (bao gồm hình ảnh, tên, email)
    Tab2 : Hiển thị thông tin của chính bản thân mình
- Với mỗi member được hiển thị ở tab1, có thể click và chuyển sang màn detail

# Độ Khó ***
# Hướng dẫn:
- Tạo 1 TabNavigator chứa 2 StackNavigator là MemberStack, và MeStack
- MeStack: tạo 1 component Me, data lấy từ 1 file json trong Project
- MemberStack: Khai báo 2 màn hình MemberScreen và MemberDetailScreen nằm trong StackNavigator này
Viết code tương tự như MeStack, lấy dữ liệu từ file JSON đổ vào màn hình Members,
Tại màn hình Members, Sử dụng navigator truyền dữ liệu sang màn hình detail và hiển thị thông tin chi tiết hơn ra màn hình

# Ảnh demo

- HomeScreen

![alt](https://github.com/anhtbok92/ReactNavigatorReactNativeTraining/blob/master/img/1.png)

- MeScreen

![alt](https://github.com/anhtbok92/ReactNavigatorReactNativeTraining/blob/master/img/2.png)

- MemberDetailScreen

![alt](https://github.com/anhtbok92/ReactNavigatorReactNativeTraining/blob/master/img/3.png)
