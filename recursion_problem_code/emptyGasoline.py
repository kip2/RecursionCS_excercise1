from re import I
import time

def hoursToEmpty(velocity,fuelEconomy,tankCapacity):
    v = getDistance(velocity)
    d = milesWithoutStop(fuelEconomy, tankCapacity)
    return secondDecimalFloor(d/v)

# 少数第二位切り捨て
def secondDecimalFloor(n):
    return n * 100 // 10 / 10

# 距離
def milesWithoutStop(fuelEconomy, tankCapacity):
    return fuelEconomy * tankCapacity

# 速さ
def getDistance(velocity):
    return velocity * 60 * 60

def main():
    # 情報要求
    print("車のガソリンが空になるまでの時間を計算します。")
    velocity = float(input("車の速さを入力してください(マイル/秒)。(入力例:0.05):"))
    fuelEconomy = float(input("燃費を入力してください(マイル/ガロン)。(入力例:98):"))
    tankCapacity = float(input("ガソリンのタンク容量を入力してください(ガロン)。(入力例:12):"))

    # 実計算
    answer = hoursToEmpty(velocity, fuelEconomy, tankCapacity)

    # 計算中
    print() 
    print("計算中", end="")
    for i in range(3):
        time.sleep(0.5)
        print(" .", end="")
    print("\n")
    time.sleep(2)
    print("結果はこちらです。")
    print(answer)


if __name__ == "__main__":
    main()