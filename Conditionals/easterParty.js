function easterParty([arg1, arg2, arg3]) {
    guests = Number(arg1);
    guestPrice = Number(arg2);
    budget = Number(arg3);

    if(guests < 10) {
        guestPrice = guestPrice;
    } else if(guests <= 15) {
        guestPrice = guestPrice * 0.85;
    } else if(guests <= 20) {
        guestPrice = guestPrice * 0.8;
    } else {
        guestPrice = guestPrice * 0.75;
    }
      totalPrice = guests * guestPrice + budget * 0.1;
      if(totalPrice <= budget) {
          console.log(`It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`);
      } else {
          console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`);
      }

    }

    easterParty([18, 30, 450])