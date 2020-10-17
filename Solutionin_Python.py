def check_pair(N,socks):
    unique_color_socks=list(set(socks))
    possible_pair_of_socks=0
    for i in unique_color_socks:
        possible_pair_of_socks+=socks.count(i)//2
    return possible_pair_of_socks



if __name__ == "__main__":
    N=int(input())
    socks=list(map(int,input().split( )))
    pair_of_socks=check_pair(N,socks)
    print(pair_of_socks)
