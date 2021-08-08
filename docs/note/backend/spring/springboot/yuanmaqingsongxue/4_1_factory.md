# 工厂模式

## 一、简单工厂
### 1、特点
定义一个工厂类，根据传入的参数的值不同返回不同的实例
1. 特点：被创建的实例具有共同的父类或接口
   [![fQOcSx.png](https://z3.ax1x.com/2021/08/08/fQOcSx.png)](https://imgtu.com/i/fQOcSx)
2. 相同类（如：鼠标），根据传入参数（如：类别）不同，获得到不同的对象
3. 工厂生产的是对象（隐藏了对象创建的细节）

### 2、适用场景：
1. 需要创建的对象较少
2. 客户端不关心对象的创建过程

### 3、优缺点
优点：
1. 可以对创建的对象进行"加工"，对客户端隐藏相关细节

缺点：
1. 因创建逻辑复杂或创建对象过多而造成代码臃肿
2. 新增、删除子类均会违反开闭原则

#### 开闭原则
一个软件实体，应该对扩展开发，对修改关闭闭原则
1. 应该通过扩展来实现变化，而不是通过修改已有的代码来实现变化

## 二、工厂方法模式
定义一个用于创建对象的接口，让子类决定实例化哪一个类
1. 对类的实例化延迟到其子类（接口继承工厂）
   [![fQvVY9.png](https://z3.ax1x.com/2021/08/08/fQvVY9.png)](https://imgtu.com/i/fQvVY9)

### 1、优缺点
优点：
1. 遵循开闭原则
2. 对客户端隐藏对象的创建细节
3. 遵循单一职责

缺点：
1. 添加子类的时候"拖家带口"
2. 只支持同一类产品的创建

## 三、抽象工厂模式
提供一个创建一系列相关或相互依赖对象的接口
1. 抽象工厂模式侧重是同一产品族
   [![fQxaC9.md.png](https://z3.ax1x.com/2021/08/08/fQxaC9.md.png)](https://imgtu.com/i/fQxaC9)
2. 工厂方法模式更加侧重于同一产品等级

### 1、优缺点
优点：解决了工厂模式只支持生产一种产品的弊端
1. 新增一个产品族，只需要增加一个新的具体工厂，不需要修改代码
2. 对工厂模式进行了抽象

### 2、差异
1. 工厂方法模式：每个抽象产品派生多个具体产品类，每个抽象工厂类派生多个具体工厂类，每个具体工厂类负责一个具体产品的实例创建
2. 抽象工厂模式：每个抽象产品派生多个具体产品类，每个抽象工厂派生多个具体工厂类，每个具体工厂负责一系列具体产品的实例创建
<ad/>
<comment/>