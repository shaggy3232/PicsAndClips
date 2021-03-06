
   
const heatData = [
    {
      id: 1,
      title: "New Hip Hop Hits",
      platform: "applemusic",
      url: "https://music.apple.com/ca/playlist/new-hip-hop-hits/pl.4355fef8c209446f82fe6fdf9fa97e03",
      desc: `Recent tracks from Hip-Hop legends and up-and-comers`,
      img: "https://is3-ssl.mzstatic.com/image/thumb/SG-MQ-US-032-Image000001/v4/07/fa/38/07fa38c9-feac-fd3e-c370-02a05d943e16/image/270x270cc.webp"
    },
    {
        id: 2,
        title: "Hip-Hop Central",
        platform: "spotify",
        url: "https://open.spotify.com/playlist/37i9dQZF1DWY6tYEFs22tT?si=fce2846601e74cdc",
        desc: `The names you know and the names you need to know in hip-hop. `,
        img: "https://i.scdn.co/image/ab67706f000000039caddc57bf69cc2e05e22a06"
      },
    {
      id: 3,
      title: "2.24",
      platform: "spotify",
      url: "https://open.spotify.com/playlist/37i9dQZF1DXaitacWUJMPH?si=2c2e86545ffc4498",
      desc: `24 songs dedicated to the Mamba & Mambacita. R.I.P. Kobe & Gianna Bryant. `,
      img: "https://i.scdn.co/image/ab67706f000000030a1c0a9b353861ab36472d91"
    },
    {
        id: 4,
        title: "Hip-Hop/R&B Throwback",
        platform: "applemusic",
        url: "https://music.apple.com/ca/playlist/hip-hop-r-b-throwback/pl.674abcd261d04582b58d6388394cd047",
        desc: `From gangsta rap's heyday to the rise of Beyoncé, this playlist captures one of the most fertile, dynamic periods in hip-hop and R&B`,
        img: "https://is2-ssl.mzstatic.com/image/thumb/Video124/v4/b2/54/85/b2548563-95f0-3a25-ea3a-d7407abd95d2/Jobd46fe528-2b55-41b0-9266-d2f58ea3d606-109117009-PreviewImage_preview_image_nonvideo_sdr-Time1612288474730.png/270x270cc.webp"
      },
    {
      id: 5,
      title: "The Plug",
      platform: "applemusic",
      url: "https://music.apple.com/ca/playlist/the-plug/pl.74fdbee9582349a4bdca600cbdffa2e9",
      desc: `From new drops by emerging voices to regional hits on their way up to just-released bangers from the game's biggest stars`,
      img: "https://is2-ssl.mzstatic.com/image/thumb/Features114/v4/cf/5b/3f/cf5b3f20-91af-591a-078b-3abcfb6ece46/U0RTLU1TLVdXLVRoZV9QbHVnX1JhZGlvLUFEQU1fSUQ9MTUxMzY0MTAxNS1sYW5nPVtsb2NhbGVdLnBuZw.png/305x305cc.webp"
    },
    {
        id: 6,
        title: "The Draft",
        platform: "applemusic",
        url: "https://music.apple.com/ca/playlist/the-draft/pl.fc15653cc3c34295aca84f5c103e50af",
        desc: `Hip-Hop on the come up…featuring Polo G,Lil Tjay, Pressa, Calboy and tons more urban artists on the rise!`,
        img: "https://is5-ssl.mzstatic.com/image/thumb/SG-MQ-US-035-Image000001/v4/62/fd/2f/62fd2f81-3ff9-9e07-dbe3-3d140258657d/image/270x270cc.webp"
      },
    {
      id: 7,
      title: "Street Soul",
      platform: "spotify",
      url: "https://open.spotify.com/playlist/37i9dQZF1DWTplaZ1W7ARf?si=089c39bbee904927",
      desc: `Neighborhood Storytellers.`,
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBERERISEhIREREREhIRERgREhISERISGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU6GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ0NTQ0NDo4ND00NDQxMTc0NDQ2MTE0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAACAgEDAgMFBAYIBgMAAAABAgADEQQSIQUxQVFhBhMicYEykaGxBxQjQlLBcnOSorLR8PE0NWKCg8IVs+H/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACYRAQEAAgICAQQBBQAAAAAAAAABAhEhMQMSQSJRYXGBBBMUMpH/2gAMAwEAAhEDEQA/APqsROg12qe12VbUqRGKYLlWcjueBkidMspjDHG5V6CJ5nTtdVl0sS1V5dVfd8I75VsEfMT0dVgdVYdmUMPkRmTHPa5YerOIibcyIlgSJYgSJZpbVViz3ZsT3hXfs3Lv2c/Ft744PPpA24jE6p/aTRqrt+sVEotjFRYm8itdzYBPl+Yk6h7Q0UpprDudNUyCsoBkIwB3sDzt+JBxzlxA7aJxOm9Sp1NaW1OGSxBYmThihOASp5HIInMgSIiAiIgJJYgSSZSSiSYmUkCYkmUkCREQMxPMXl9NY6/HtdtyFX2AjJ7nGT38xPTzGytXGGVWHkwBH4znnj7dN4Z+t56eVt1LXAIodnYgAPtcj1V8Bh6g5E9RpqtlaJ32Kq/PAinT1p9hFTPfaoBM2yYYWc3trPOXiTgiInRyJYiAiJq1uoFVdlhV3Fdb2Fa1LO20E7VA7k4wBA16/XJSp3OgfY7ojOqNYVGSFz38OwPefIeu+2dya/31mnfS2fqx071mwWF63Vmrs3DADAuT2IIOM+XWe1Pta+s94l+npLe7FaEo6PU6OTvrLHd8Sk8EDHHfE831Dqd961LZYLDSnu62ZRvFfACFsZYDbwTzyfORplqNc9iscsHuKi9V+FLAi1hG9SSrk+p9Yv6vdbTTp3fNenFiV5UblR3R9obvgFFx5dp14c444zwQMf5SD/X+cztl33SevWVL7gsq02W1m9xWDctagKQjj4lygwdvPlgk5+m9J/SHp1savVMylmXaVYW10qQMIzglnYcFm+yCxGfhzPig9OZvorDOuXRQT8RdigGBnkgHvjyllH6h0uoS1EsrIZHUMpHiDNs+W/o+9rtFp6baWT9Vrrb3iZ1Lag3WPtGytGAbJ4OAMd8+M+oqwIBByCAQfMHtNCxEQJEsQJERASSxKMYlkgSJYgZREQEREBLJLIEREBPHfpD9oho60rairVJelgsrsYqdqlPiPwkbMFhk+O3vmeyni/0odIbVaNQld1llbiysUoth3H4TuHfBUtyOAcZ8IHxbqd+lsCNQuqWzA97+s212oTjkqwUHJbJ5GPvnXNjjibL0ZWZGGHRmRge4ZTgg/UT03SvZlHQPYx552jggTnllMZuumOGWd1Hlcj5f5eUHB8/nPpOl9jdKSMixzjhR2wB8ph1L2J06LwWUkcc55nP+7i3/AI+XT5zuxwPPvAbkkD7+wne9V9nvcobFfcmcY7N/tOj+/tjzyczeOUym455YZYXWQuPEjH1zPqn6IPaCw2WaOwj3ZUvR8JG2wHLICBgArkgcY2nE+VE+Q+f8p33si5XWVIHdGsdUrZNQ2m2uWXaWYI+5Qf3Svj3moj9IRNOirsSutbHFlioqu4XaHcAZbHhkzdNMkkskBJLEokRECRLGJRIiIFiIgIiJBYiICIlkCeY9veqarT6Oz9VqsexwV3pt20r4uc9z6Ynp5xuo6Rb6nqcsqupVipwwHpLOx+b/AGf6e2p1K1sDgEu5PgqkFgfXkffPfdO07tYxIAUvhR3woAAnQ09JKarU10WstSVvVkrixay6b8ebkgDPqTMdFc1B36TVPYlbEvUz1vYFHLYQclQASSO04efG9PV4LMea+haRHGo3KuKwioOT8RGc8eHcTT7S3Miix632ZC/Cue/1Emp6i50a3VuKy6/C5CtjjuAePvnkum62h7H/AFvWXX+fvNUUTI8FGQp7j4R6ThjzNO2Vsu4x11iWfYb4QSQG55xjkfWeY13S23WMp8QSBnBJGSPUz2Op0NTsLNPYXXG0q/DqPn+8B5EcZ4PgeKiBWbIBCgkjHJmvH3qJ5cfabrwO0g4Ocj0nsvYBnTVUPYjPpt5+0CwDEEKy454Pfw7zjdV6TvZbgyVfBUr1j4yrlSx3EHAPB/D6dn7IJbVfXXQXcCwGwDA3Ix+LjwOB4eU9vjx3z8PHcbi+4I4YAg5B5BEswoqVFCqNqgcDymyRhIlkkEiWIEkliUSIiAiIgIiICWIgIiICWSWQJp1dBsRkDsm4EEpwwB8j4TdLKPlHVfZ9abtQiVO1ZFaDezftAzqzsz9ycgnHkPWcQ9OILWbw1hrFKEKlZVeyglAMnAA3HnjvPpHtZXnSMw71uj8eWdp/xfhPBDW11sr2lgpZcEKzIp8CxA4Hjk8ZxzPP/UZZWzT1+CY3G2u0v6WEq0tORsrFbAN9lsMDgjyOJydR7JLYioXzUjb6UauuxK2I52EgHB4yCSOOQZ13XeoVPWfcDUWMgUK9fu3rFhGVQ5IyT3wuSBzxPXPqdleSw4UZ+7ynDDjdrr5OZJHjdR0mrRBVRR9mwu2TkuzIe2cfxH0nU6ZwWduDkDueM5xk+n+U5PtBrN5OCec4z3nRUncjhgSpZAwHGQzBQM+AyZrw7uVq56xxkd31XpD211jSLZd7pUe1h8O/IY7gp+0Mux4nq/Yf2UbSqbr8e/cgqAc+7THYnxPPM6b2G176rXud7qi0uSMqwcF14fjjvxjy+c+mgT2Y7wxmLxeTL2ypJLEOaREQJEskCRLECSSxKJEsQEREBERAREsgksRAREsDgdcYDTXlhlRW5I8xgz5D1PVLWwTeFBRGDYJzkcEeGPH759m1tIeuxD2dGU/UYnxKi0JWwsAZ9MxobwYoCdnfxBDD5AesmWHtj+nbw5ay073Q9YpSsobEFYKGsA5ZWx8bE4zyc8DPzmfU+sLZUWqs3DO08MDkAcYIHmD9Z1Gj6yj7zXo2JOzJ2qQuPHjPfzImrXaljnKhc5OAMAfIeE8lx+Hq3JzGlH3Luc5+Z8Zr0IeyxKahususRUHhwwYsf+kBSSfACbej9Ou1di01qSSefJV82PgJ9b9nPZmjQrlQHvZdruRzt77U/hXP3457ADv48fXlx8ufGmvpXs9XpdbqLqgES6usBAMBH3MX2+Sn4Tjw58MCd/MexmU69vKREQEkskBERAkSyQEkskBERASySwERECSxEBERAREsCT477b9PGm1tp5CahfeDttJ8fqCM/wDdPsc8j+kTpX6xp0KqzWK+1NoHLMpwGz2XIH4TWNk4vSy6rwfStLq/dC2lqzWSRkMd42nBDKBx/wDo852nRPZbU6tw9uAgb4nLAj5BQcsfQ7cfhO39juj6nSam5LKh7h9mzLg+7ZFwCwUEM7Z558B8h9AU8eXyH+0zcMZdyOl8uV424nSuk06VNlSBc/aY/bc+p/lOdnykAlzIw06mwV1u5BIRGcgY3EKCTj14nntSz22LXTfWWszattFhFldCvW207dyvnJAJGMfOdzq2dmWutgLU23NuDMhTLKFbaQeSGI7/AGOc9jxejE2LZcSP2thAVUZBX7v9mw+Lknch5HBwCPMp2OfUWCgOQzAYLBdoJ88eE3TXIOO3H5TWmW2Jhv8AMY/KZyCRLJASSxAkRECRLEBEksBERAREQEREBETXezBTtBY9hjA5PzgR2JIReC3j/Co7n8QB6nyBmCUJWzojNlibm3Oz7GdicjcTgEhsDsNvAwMTbpK/doXcjdjLkEsFVRwoJ5IAzz4kk4GcDCsk8sMMxyc9wB2X6fj38ZJzRVTwwu36zePkJFWZATVoZMsZgTLTjajR1WMCy5dFIBDMjhW7qSpBKnHY8cCZV0oiqiKERQFVVG1VUdgAOwm0Y74wWOTxgnHAJ+mIiJWO2Xbj5zKSVGDLMK35Kn5ibjND8EHyP4eMo3ySxIJERAkREBERAREQEREBLJLAkSyQEyVcn0Hea33YO3G7HG7O3PridXf1+rTYTUOi2M4rRAye8tsbG1UQHJyWXnwyM4jV+B2WqcMwryRja7cHzO0Z88qT/wBvPeZKJx6jljnlu7HnGSBnb/04C4nLWJNQUSySwE16o2CtjUqNYMbA7FVPIzkj0zNs13e8/Z+72494vvN+civBztx+9nb38CZmtNjd/ukmRHf5zEyxkiQSyiTTcOJuM1WywZVnKqfQTOatN9lflNslEiIgSJZICIiBJZJYCIiAlklgSJZIGvUOyo7Iu91Viq5A3sBwuT2yZ8W6SmrHWUbW1sltzvY+9fCtWtX3bjwBrQZB7ceM+2zRfpa3KO6IzVklGdQxTcCrEHwypI+Rll1LBw+huz6bT2Nu3WUVWEOQShdQ2zI8BnAnaidR0B7jRWL093aoZWXnhVdgnJ7/AAgcztQ48xAzEomII8xOLr+oJTt3La7OcKtNVlrcDJJCA7R6nAmaOcJ06a7XZO7RAqHfaU1VeWTcQpKsBj4cHGTOx094sRXAdQ4DAWI1bjPgysAQfQzcB2PoePDn/aStONorndCz1tU29gFfBOAcA8E95vBzInYDvgY9ZSp7jv6/lKyh8ZZPCWUDNNs2marfD6ywaemvurz5PYv9l2H8py5xenJtTH/XYfvdj/OcqL2JERIEkskBERAkRECxEQEsksBJLJATXqE3I6/xKy/eMTZEo4Jp3GuzFpYhUK7kAC8ks6nvyc8c8icqm2t2dFZGatgrgd1JAIBHyI/0JxRein3aDe+eQXJCH7Xxsckdxxz3HGJy61s7s4b0Rdg/Ekk/USXY2BeMhQD5Nj8cTTqNbXUpZ2wuQMqrvjPntBxOQuPLt5j+cyzMjq7Ooo6JYr6hK92/cmmtbeq5BUg1khc85wOwwcGc+nUJYiuhLI6qyEK2GVhkEceRm2atLpkrRa6wERAFRV4VV8APSK0ml1C2KXQkruZeVZTlTtYYYA8EEfQzfMUQKMAADJP1JJJ+8mZZgYN/OIaJplH7Garew/14Tae00Wn4Qfn+UsWpoj8A+bf4jOROD0Z91CN57j/eM5sXtCIiQSIiAiSICYs4UEsQoHckgAfWZTzfV7Gt1K1FtqBkUZ7ZYAlseJ5xM5Zesbwx9rp3ia+ljgWIT/SHPynJnRaroCBCUZy4GQGKkN6dhgzk6a1qKcXsoYbvd/FuYgAYHqQT+UzM7O41lhLPprtInRdE6iTvFtmSSgTeRyTnOPwnb/rVe/3e9d/8ORu7Z/KamUs2xlhZdN8k1U6mtyQjq5XGdpzjM02dSoU7TYuRwcZbB9SJfafdPXK8acuYO+0E+Q+/0iuxXAZWDKexU5E0arVV1lRY4XndjuTjtwOe+Pul3NbNW3Tp/ZPoJ0SXCyz312ovs1Nzhdil3C5Crk4UY/GekUTiaXVJYWKOreg7gfI8zqut9TIKLTYQRv37PoAD68GZyykm2scLbp6LEonH0upSxfgdXIC7tpzgkeP4zie0Gpaun4CQXYJkdwMEnH3Y+slykmyY25erlWdQpQ7WsQMO43DI+flN9FisCVYMDggqQR94+U870voldlS2O75fOApUBcEjxByeJv6X0+6i88g1HIJJA3jGQQPAj/OYmVvcbyxxm9XmO+iatRqkrGXZUHhk8n5DxmrTdRpsO1HVm8BypPyB7zW50x63W3IcSTXqtRXWAXdUBPG44zKrqVDAgqRuB8Md8zUrNlZMcAk9hyZwV1Vbodjq23OceAwcflNw1SWI/u3V8Kc7TnGQcTzPS2xXf4fAf8Fkky+qSfLcw+m2/DuvZps6PTE/vVI/9oZ/nOznA6Gm3S6YeVFY/uCc+dL25kREgkRIYCJIlFnVdV6T71g6MFsxghuzAePoZ2s851Cqyi83ICykk5OSBnureQ8vpOfk1rmOni3vi6rB11lA3Fn2Dx3CxR9DnAnM3Jq6S75V6g+QpwM7cg8+HH5zi6nrhsQ1rXguNpO7dwe+BjvOf0nQOlLhvhe0Hg/ujBAz68mc5zdTmO2XE3Zquu6FoktLM27NZrK7SAM8nnj0mvX1F9W6KcF3Vc+QKjP4Zl6Vq207sjV82MikE7SpBI8ue83N/wAw/wDIP8ExNWSfnlbbMrfxw2a7SjS1Nsdy1pVGJwMAbicY7Z7fWcTSNpAgFgdnPcjIC+gwZ3vV9Ibaiq/bUh19SMgj7iZ02l6oKk2WUgsnAyArfJgR+M1ljJfwmOVyx/P/ABj0fVip7ApLJsdgDwTtBYEjwOAZo0dtTO76ne+eQFzyfXBHA8p23Smsu94zoi1MGC4QK3xcYU+IxnmcCh20jutlYdW4BIHOOxUkevaZsup9mpZbfv8Atx7NQiWI9O4BcEhvnyO/IInJ69o0qZSm7497NuIPOR2++btNq3usUVVoqD7e5FYY8Sxxx6ATd7TUMy1uASq7lbH7ucYJ9ODLcd42wmVmUldp03QJSp2Fv2gUtuIPYeHHrNmu0q3VlG4HcHxUjsf9ec43Ruom9W+HbsCDg5DEg+nHb8Zh17QvagKcshJ2/wASnvx4ngfjOnHrxHDV9+bqur/+J1dWfdsSO/7N9ufmpx/OcnpPVbDYKruSTtBI2srDwYTRpuvvWgR03Mg25LbGwO24EHmOm0vqNR79l2qGDk4wCRwoXz7D7pzlm56u13ZfaT9tWmrOs1LFmIQZbjuEBwqjy7/nOJXo7v1Zb7qTpbfeMpr3hyqbiEbcD9rAGcHHPGJzLEt0VxcKGRsjODsKk5258CP5Rreo2arbWiHGQSAdxJ8MnAAEnGrL2vO5Z0z6rqTbptO7faLMG9SvGfrjM7jTf8Kn9Sv+CcHqfTGXS1qnxGokvjnO7O4j6n7pwtP1iz3YpVNz7fdqQfDGB8OO+PWal1efsxZ7Tj4rZ7N/Zv8A6tfyecHRnFOp8/dnH9iyc72c+zf/AFa/+86XUagV6XUEnG5a6x/Sfci/i4l8f+2P8r5Osv4e501e1EX+FFX7hibJivYfITKeh5SSIkCSJDKERECxESDFUA5AAPoAJnJLAmJYiAmLID3APzAMyiBDMbACjZ5B85lOLqdUilKycO+4oMHkLyeflEmxvRMAY4+U3LNVbTcJaKJZImRGQHuAfmAZke30jEEw0sKoHYAfIASL2EsgP2moKM5wM+PnNr9prEsKs8X+kRia9JWO9vUNImPMBi3/AKz2k8t7Q6f32s6ah7LqXvPyrqcD+86zWPaPTCWSJEIiSAkJgmSUWJIlGUREyBliICIiAiIgJ5zrX/H6L/zf/XZETWHY72vwnIXtESUjKWImQmI7xEDJewmQkiRpH7TAREsQnQa7/mGj/oar8kkiaxR30REgSGIlEMkRKJERA//Z"
    }
  ];

  export default heatData