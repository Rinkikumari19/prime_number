u1="rock"
u2="paper"
if u1==u2:
    print"it's a tier!"
elif u1=='scissors':
    if u2=='rock':
        print"rock wins!"
    else:
        print"paper wins!"
elif u1=='paper':
    if u2=='scissors':
        print "scissors wins!"
    else:
        print "rock wins!"
elif u1=='rock':
    if u2=='paper':
        print"paper wins!"
    else:
        print "scissors wins!"
else:
    print "invalid input! you have not ented rock, paper or scissors, try again."