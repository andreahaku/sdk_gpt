#How to view testnets in MetaMask#
If you want to use the Ethereum testnets Goerli and Sepolia, head to Settings > Advanced, and make sure 'Show test networks' is turned on: 

![MetaMask show test networks](https://support.metamask.io/hc/article_attachments/13957074039323)

Once this setting is turned on, switch to a testnet by heading to the network selector at the top of the homepage and scrolling until you find the one you need:

![MetaMask switch network](https://support.metamask.io/hc/article_attachments/13957065045659)

If you're using MetaMask Mobile, testnets are listed in the network selector by default. #Known issues and supported browsers#
### Known Issues

#### MetaMask doesn’t open when I try to connect, or another crypto wallet opens instead

If you run into a situation where MetaMask won’t open, or a different web3 or crypto wallet extension opens instead when attempting to connect to MetaMask Activity, follow these steps to try and resolve the issue:

1. Verify that MetaMask is installed in your browser, your Secret Recovery Phrase is imported, and that you are able to unlock your wallet using your password. _If you’re having problems unlocking your wallet, [start here](https://support.metamask.io/hc/en-us/articles/4405451730331); if you need to find your SRP, [start here](https://support.metamask.io/hc/en-us/articles/13112366068251)_
2. Verify that you’re using one of the browsers listed below.
3. Disable all other wallet extensions (**but make sure you know your passwords and Secret Recovery Phrases for each wallet before you do!**)
4. Create [a separate browser profile for each crypto wallet](https://support.metamask.io/hc/en-us/articles/12174759849371-How-to-use-multiple-MetaMask-wallets)
5. If you’re still running into problems, start a conversation with a member of our Support team by going to [support.metamask.io](https://support.metamask.io) and clicking on the big blue button labelled “Start a Conversation”.

### MetaMask Activity is supported on the following browsers:

#### Google Chrome

#### Mozilla Firefox

#### Safari (MacOS and iOS)

* _MetaMask Extension is not available in Safari; however, MetaMask Activity can still be used by entering the ENS name or public address of the account you’re interested in. For steps to find and copy a public address from your wallet,_ [_see here_](https://support.metamask.io/hc/en-us/articles/360015289512)_._

It is likely that MetaMask Activity will work as expected on many other browsers, as well, especially those that are Chrome-based, such as Microsoft Edge. Brave Browser, while being Chrome-based, sometimes requires additional configuration in order to work properly with MetaMask; for more on this, [see here](https://support.metamask.io/hc/en-us/articles/360038596792). 

### If you have ideas for how we can continue to improve MetaMask Activity, please submit them via the feedback form at the bottom of the MetaMask Activity page. 

![](https://support.metamask.io/hc/article_attachments/13754729783707)#Troubleshooting a pending or stuck transaction with MetaMask Activity#
### Is one of your recent transactions in MetaMask stuck or "pending"?

Our pending transaction troubleshooting tool will help you take a closer look.

First, you'll need the transaction hash, which is the unique identifier of the transaction. Here are our [instructions on how to find it](https://support.metamask.io/hc/en-us/articles/4413442094235). 

Once you have the hash, click on "Help with a pending transaction" on [activity.metamask.io](https://activity.metamask.io):

  
![MMA help with pending transaction](https://support.metamask.io/hc/article_attachments/13672065422235)

This is where you'll paste the transaction hash: 

![MMA paste transaction ID](https://support.metamask.io/hc/article_attachments/13672065233563)

Now click "View", and MetaMask Activity will search to determine the status of the transaction. Once the search is complete, you can see whether your transaction is successful, failed, or pending:

![MMA transaction pending](https://support.metamask.io/hc/article_attachments/13757088704795)

Stuck and pending transactions can have different solutions, and MetaMask Activity will present you with the right resources to guide you though any necessary next steps.

If you're looking for more information about failed transactions, [start here](https://support.metamask.io/hc/en-us/articles/4410741657499). 

### If you have ideas for how we can continue to improve MetaMask Activity, please submit them via the feedback form at the bottom of the MetaMask Activity page. 

![](https://support.metamask.io/hc/article_attachments/13754726450459)#How do I access my accounts without my Secret Recovery Phrase?#
Backing up your Secret Recovery Phrase in several secure locations is a must-do when using MetaMask. That's because you're the [custodian of your accounts](https://support.metamask.io/hc/en-us/articles/360059952212): **no one can ever stop you from accessing those accounts or using your web3 identity, so long as you know those secret words**.

This also means that if you don't know those secret words, or have them recorded somewhere safe, they will be impossible to guess, and **no one will be able to help you get them back**: not MetaMask, and definitely not someone offering to help you in a DM on Discord.

But no one is perfect, and mistakes happen. If you find yourself in a situation where you realize you don't have your Secret Recovery Phrase and need it, **don't panic: just follow the prompts below to try and get your SRP back.**

_...and then back it up!_

### How to find your Secret Recovery Phrase

You'll be able to find your SRP in several different places, depending on your situation:

**I imported another SRP into MetaMask Extension, and now I can't access my old SRP**

_Please note: this process applies currently to MetaMask Extension only; this information will be updated if and when it becomes available in Mobile._

**Good news: You might be able to get your old SRP back.** To jump straight in, follow the link below; if you want to understand what's going on here, read on:

MetaMask can only hold and manage one SRP at a time, due to technical issues relating to how MetaMask and the browser work together.

Therefore, if you already have an SRP in MetaMask, and then you import another, MetaMask simply "forgets" about the first one--you can't switch back and forth. However, **the vault data is still on your system's storage**, unless you have uninstalled the extension entirely since importing the second (or third, or fourth) SRP.

In order to find your old SRP and decrypt it, follow the instructions below, keeping in mind that **you'll be dealing with multiple vaults in the same directory**, so you might have to cycle through several vault files before you find the one you're missing:

[How to recover your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360018766351)

And remember, make sure **no one can see your screen** while you go through this process!

**Note: If you have an idea of what your password was, but can't _quite_ remember,** you might want to try using [btcrecover,](https://btcrecover.readthedocs.io/en/latest/) a tool designed to help people manage and recover cryptographic keys. Specifically, it has functionality that automates the process of trying lots of different variations of a password. For an idea of what this process involves, check out [this chapter](https://youtu.be/TzZDcN6SnCU?t=266) of a btcrecover video tutorial.

_This project is not affiliated with or endorsed by MetaMask or ConsenSys, and you should make your own decision about whether or not to use it._ 

**I have MetaMask installed, I know my password, and can log in**

**Good news: MetaMask has a function built in for you to reveal your SRP so that you can back it up.** 

Make sure that no one is able to see your screen when you reveal it!

Instructions here: [How to reveal your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360015290032)

**I have MetaMask installed, I know my password, but I can't log in**

**Good news: You might be able to get your SRP back.**

Sometimes things break; sometimes no matter how many times you type your password correctly, you type it wrong. Sometimes, we mistyped the password when we set it!

Whatever the reason, if you can't get into MetaMask, but you know the password--or have a good idea about what your password was--there are some processes you can follow to recover your SRP.

If you're sure you know your password, start with these instructions:

[How to recover your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360018766351)

If your password seems to be the issue, but you have an idea of what it might be, there's a tool that can help you try lots of different options, called [btcrecover](https://btcrecover.readthedocs.io/en/latest/). For an idea of what this process involves, check out [this chapter](https://youtu.be/TzZDcN6SnCU?t=266) of a btcrecover video tutorial.

_This project is not affiliated with or endorsed by MetaMask or ConsenSys, and you should make your own decision about whether or not to use it._ 

If you manage to figure out your password using btcrecover, the tool should decrypt the vault for you, and display your SRP--so make sure no one can see your screen while you use that tool! If btcrecover doesn't show you your SRP, or you figure out your password through some other method, then follow the steps above to recover your SRP.

**I have MetaMask installed and don’t know my password, and can’t log in**

This is a tough situation. The SRP is the cryptographic key that creates and restores all your accounts, but within MetaMask, your password is the thing that encrypts that SRP on your system's storage, and that encryption is _very_ secure. Without your password, you won't be able to recover it.

So, if you have an _idea_ of what your password might have been, you might want to try using [btcrecover,](https://btcrecover.readthedocs.io/en/latest/) a tool designed to help people manage and recover cryptographic keys. Specifically, it has functionality that automates the process of trying lots of different variations of a password. For an idea of what this process involves, check out [this chapter](https://youtu.be/TzZDcN6SnCU?t=266) of a btcrecover video tutorial.

_This project is not affiliated with or endorsed by MetaMask or ConsenSys, and you should make your own decision about whether or not to use it._ 

If you manage to figure out your password using btcrecover, the tool should decrypt the vault for you, and display your SRP--**so make sure no one is able to see your screen while you use that tool!** If btcrecover doesn't show you your SRP, or you figure out your password through some other method, then follow the steps here to recover your SRP:

[How to recover your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360018766351)

**I have MetaMask Mobile installed, don’t know my password, but I can log in using biometrics**

**The current solution to this situation may be simply to migrate your assets to a new SRP.**

Android iOS 

Various efforts are currently underway to document the process for vault recovery on Android.

If you find yourself in this situation, it might be best to move your assets to a new SRP, as we don't currently have a timeline for when vault recovery on Android will be available and documented. For instructions on how to do so, see our [guide on wallet migration](https://support.metamask.io/hc/en-us/articles/4867408571803).

While we have a process documented for iOS, there can be changes on Apple's side that break the process.

Start by following the instructions in the article below, and if they don't work, go to support.metamask.io, and start a conversation with a Support agent for more help:

[How to recover your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360018766351)

**MetaMask was installed on a system that I can't access directly, but I have access to the system files (a backup, the computer's hard drive, etc) and know the password**

**Good news: You might be able to get your SRP back.**

The particulars of this situation can vary wildly, and can affect the success of the operation. Some people have an old hard drive hooked up to a USB adapter, or have a system backup image mounted as a virtual drive. Still others are accessing a system backup in the cloud.

Providing guidance on how to get access to your system backup is well outside the scope of this article. However, if you can access the file system and the MetaMask installation is there, we can guide you.

If you're sure you know your password, start with these instructions:

[How to recover your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360018766351)

If your password seems to be the issue, but you have an idea of what it might be, there's a tool that can help you try lots of different options, called [btcrecover](https://btcrecover.readthedocs.io/en/latest/). For an idea of what this process involves, check out [this chapter](https://youtu.be/TzZDcN6SnCU?t=266) of a btcrecover video tutorial.

_This project is not affiliated with or endorsed by MetaMask or ConsenSys, and you should make your own decision about whether or not to use it._ 

If you manage to figure out your password using btcrecover, the tool should decrypt the vault for you, and display your SRP--so make sure no one is able to see your screen while you use that tool! If btcrecover doesn't show you your SRP, or you figure out your password through some other method, then follow the steps above to recover your SRP.

**I uninstalled the MetaMask extension entirely**

**Depending on your situation, it might be possible to recover your SRP.**

If you need to do this, follow [our guide on Account Migration here](https://support.metamask.io/hc/en-us/articles/4867408571803).

This is a tough situation; browser extension data is deleted when the extension is uninstalled. Generally, this means that your vault data is gone. However, it may have been preserved somewhere, especially if you have automated full operating system backups. If you manage to find a backup of your vault data, then follow the instructions above, under the heading "MetaMask was installed on a system that I can't access directly, but I have access to the system files (a backup, the computer's hard drive, etc) and know the password".

We are continuing to investigate this situation to determine how we can better protect users from SRP loss due to an extension uninstall.#Troubleshoot and analyze your transactions with MetaMask Activity#
### What is MetaMask Activity?

MetaMask Activity is a tool that is designed to help you understand more about the transactions you make with MetaMask, and get help with those transactions when you need it. 

You can look up any valid blockchain address and consult the transactions associated with that account. The transaction information, including when it happened, which addresses were involved, images of tokens and NFTs, and more, will be presented to you front and center.

You'll also have links to helpful support and educational materials provided to you based on the type of transaction you've performed.

![MetaMask Activity](https://support.metamask.io/hc/article_attachments/13712610777755)

### Where do I access it?

#### Easy: [activity.metamask.io](https://activity.metamask.io) 

You can use MetaMask Actvity in a normal Web browser, either on your desktop or phone, as well as in the MetaMask Mobile app's built-in browser. You can use it either by connecting to MetaMask Activity using your wallet, or by entering the public address of an account you're interested in looking at. 

* If you want to sign in with MetaMask Mobile, the smoothest experience will be inside the app's built-in browser; this gives you the added benefit of switching accounts in the wallet view, and having MetaMask Activity update automatically.

Currently, MetaMask Activity will show you information about transactions on Ethereum Mainnet. We're working on bringing support for other networks as quickly as possible.

### What does MetaMask Activity show me that I can't see in my wallet already?

#### A lot, actually:

* **All the transactions made through the account** in question, no matter which device they're made on  
   * MetaMask **never syncs transaction data** across devices, in order to **keep you and your data safe**. MetaMask Activity gets its data from the blockchain itself, so your keys stay safe in their vault.
* Convenient **images of NFTs and tokens** you've interacted with, to help you be sure it's the one you were expecting
* **Contextual support articles and explanations**  
   * MetaMask Activity detects the type of transaction you've made, and provides curated documentation explaining more about the type of transaction or token involved. Common problems, as well as helpful educational materials are provided to you based on the kind of actions you're performing through MetaMask.
* Help **resolving your questions** _now_, with Support standing by  
   * All of this is available to you on [activity.metamask.io](https://activity.metamask.io), with Support agents ready to jump into a conversation with you if you can't figure it out on your own. Additionally, if you do need more help, you'll be better informed to tell them which transaction it is you're having trouble with.
* **Granular information, without the overwhelming experience** of a block explorer:

![MetaMask Activity Interface](https://support.metamask.io/hc/article_attachments/13763369761563)

### If you encounter any issues or have ideas for how we can continue to improve MetaMask Activity, please submit them via the feedback form link at the bottom of the page:

![](https://support.metamask.io/hc/article_attachments/13754682255259)#Buying crypto with the Portfolio Dapp #
Buying crypto on the MetaMask Portfolio Dapp works the same way as it does on MetaMask Mobile and Extension.

Please head to our main article [here](https://support.metamask.io/hc/en-us/articles/360058239311) for more information.#I received an email claiming to be from MetaMask. Is it legit?#
### MetaMask will never send you unsolicited emails.

**MetaMask will not and cannot _initiate_ email correspondence with you**. 

We hold no personal identifying information such as names, email addresses, or otherwise — we don't collect these at any point whilst you're creating your wallet. This means we have no means of contacting you directly unless you specifically request it. And even then, there are only a few specific ways you can do this.

## How to recognize legitimate MetaMask emails

**There are only two types of emails MetaMask could ever send you:**

1. **Correspondence about a Support ticket** you opened, from [support@consensys.zendesk.com](mailto:support@consensys.zendesk.com) if it's your first time, or [support@metamask.io](mailto:support@metamask.io) if otherwise.
2. **Notifications from the [Community page](https://community.metamask.io/)** via [notifications@metamask.discoursemail.com](mailto:notifications@metamask.discoursemail.com).

See below for further information on how to recognize these. 

### Emails about Support tickets

The MetaMask Technical Support team are 'layer two' support that you may be in touch with if you already spoke to a member of our help desk team via chat, accessible by clicking the "Start a Conversation" button, **and** had your case elevated.

To manage each user's ticket, Technical Support use Zendesk — the backend of the same site you're currently looking at. Zendesk tickets are handled via email, which means you may have emails from MetaMask if you've had a ticket open with Technical Support at some point. Learn how to check your tickets [here](https://support.metamask.io/hc/en-us/articles/4453556284571). 

Do not trust any email claiming to be from MetaMask Support unless it meets _all_ of these criteria as a minimum: 

**It's from the correct domain**

Any email from MetaMask Support will either be from:

* [support@consensys.zendesk.com](mailto:support@consensys.zendesk.com), **if you've submitted a ticket for the very first time**.  
   * This email will contain instructions to set up your Zendesk account so you can manage your tickets.
* [support@metamask.io](mailto:support@metamask.io), the domain from which you'll receive emails from Technical Support team members **about open tickets**.

**Emails from any other address that claim to be MetaMask Support are scams**.

Always make sure to hover over or click on the "From" field in your email client so that you can see the actual address. Just because it says the sender is "MetaMask Support" doesn't mean it's us.

**It relates to a ticket you definitely opened**

If you don't remember opening a ticket or don't recognize the content of the email, it is highly unlikely to be us. We'll only ever get in touch in response to an open ticket, so the email content will be specific to the issue you had. 

**You accessed MetaMask Support recently**

The only way we can get your email is if you give it to us as part of the process of opening a ticket. This means it's impossible for us to send unsolicited emails: we'll always email in response to your request.

### Community page emails

The [MetaMask Community site](https://community.metamask.io/) may send you emails if you've opted to receive them. In all cases, the emails will come from: [notifications@metamask.discoursemail.com](mailto:notifications@metamask.discoursemail.com). 

These emails can be:

* An activation email to verify your account when you sign up
* Notifications relating to activity on the Community page, such as mentions, replies, or activity in threads you're watching.

You can adjust your email settings by clicking on the user icon in the top-right, going to 'Preferences', and then heading to 'Emails' and configuring the options there.

![MetaMask community email preferences](https://support.metamask.io/hc/article_attachments/13270906345243)

## How to spot a scam email

Things which should mark out a scam email include:

**It's from an email address _not_ mentioned above**

Inspect the sender's email: is it one of the Support emails we've detailed above? If not, it is almost certainly a scam. To be clear, legitimate emails will be from:

* [support@metamask.io](mailto:support@metamask.io)
* [support@consenys.zendesk.com](mailto:support@consenys.zendesk.com)
* [notifications@metamask.discoursemail.com](mailto:notifications@metamask.discoursemail.com).

**Do not click any links in an email claiming to be from MetaMask that _isn't_ from one of these addresses**.

Scammers will almost always try to hide their emails, so **it's vital that you make sure you check the _actual_ email address**. A common trick that scammers leverage is the fact that many email clients display names for senders in place of email addresses, which are generally only displayed by clicking or hovering over this name.

This mechanism could cause you to be fooled into thinking an email with a sender display name such as 'MetaMask Support' is from us, when in reality, one look at the email address itself will show that it's a scammer.

**A sense of urgency and pressure**

One of the main ways scammers try to get you to act without thinking is to pressurize you. We come across a wide variety of false reasons for this, but some we've seen include:

* Insisting you need to complete **KYC** ("know your customer" practices) to continue using MetaMask. You can completely disregard any statement along these lines. MetaMask does not have any form of KYC — the only time you may come across it is when [buying crypto in MetaMask](https://support.metamask.io/hc/en-us/articles/360058239311), as part of which you may need to complete KYC directly with the provider.
* Advising that your wallet is in some way **restricted**, '**locked**', or **suspended**, and asking you to take steps to address this.
* Asking you to '**upgrade**' your wallet.
* Informing you that your wallet has somehow failed to be updated and that you need to '**verify**' it or '**restore**' to resume using it. Learn more about how MetaMask updates _actually_ work [here](https://support.metamask.io/hc/en-us/articles/360060268452).

You may also want to check out our article that covers the most common type of email scams: [Will MetaMask ever ask me to verify my account?](https://support.metamask.io/hc/en-us/articles/6286050620955)

**Asking you to click a suspicious link**

Generally, emails can do you no harm unless you click the fraudulent links they contain. That's because these can link to sites designed to steal your Secret Recovery Phrase, for example.

**You should never click a link in an email if you have any doubts about security**.

We do, however, need to call out here that official MetaMask Support emails will _sometimes_ contain links — especially if regarding email verification for a new Zendesk or Community account. If you're doubtful, check the sender's email address against the addresses we detail above, or [get in touch with us](https://support.metamask.io/hc/en-us/articles/360058969391) and we will advise whether or not you're looking at a scam email.#When I click 'max' it doesn't show all of my ETH. Why? #
All transactions on Ethereum cost a small amount of ETH to pay for **gas**, which covers the cost of processing each transaction. For a full explanation of how gas works on Ethereum, see [here](https://support.metamask.io/hc/en-us/articles/4404600179227). 

In order to make sure you have enough gas to complete your transaction, we subtract a small amount of ETH when calculating the “Max” amount you can stake.

If you’re seeing your max as “0”, you’ll need to add more ETH to your wallet or wait for gas fees to go down before you can stake.#NFT listing scams#
### Contents:

* [How the scam works](#h%5F01GR4DD12KA55CASZ5FWPZBH99)
* [How you can stay safe](#h%5F01GR4DDAF29YFFPJR7BACA6FQW)
* [Summary](#h%5F01GR4DDKWGE6MB4N7VAG2F282A)

Social engineering — more commonly referred to by the more widely used alternative term _phishing_ — is, unfortunately, widespread in web3\. With self-custody, even experienced, savvy users can still be manipulated into taking actions that play right into scammers' hands. 

More specifically, social engineering describes a scenario where a scammer psychologically manipulates a victim. As you'll be aware, most commonly in web3 this occurs when users are convinced to hand over their Secret Recovery Phrase (seed phrase), providing the scammer with full control of their wallet and its assets. 

For the scope of this article, however, we're focussing on one specific type of social engineering that revolves around **getting you to unknowingly list valuable NFTs with a price of zero**. 

## How do NFT listing scams work?

Scammers have the entirety of the internet at their disposal, including all the tools, sites, social media platforms, etc. that it entails. As a result, you may encounter a variant of this scam in the wild that doesn't match up exactly with our description below. So, as with all our scam explainers, please take this article as a blueprint, and stay vigilant for the key points in the sections below. 

Here's how fraudulent NFT listings usually take place:

1. **The social engineering**. To start with, the scammer first has to execute the 'social' element of this step. That is to say, they need to try and engage you in a sociable way — contriving an interaction that feels natural, has some plausible pretext, and, often, benefits you somehow. This could be:  
   * Complimenting you on some content you posted  
   * Offering you 'alpha' on a new NFT project, token, or dapp  
   * Providing access to an allowlist for an NFT drop  
   * Asking a genuine, relevant question that seems well thought-out  
...you get the idea. The main thing is that there has to be something in there that piques your interest.  
![curiosity-curious.gif](https://support.metamask.io/hc/article_attachments/12514273927835)  
And once they have your attention, they can present you with the means to get scammed. From what we've seen, this is typically a fraudulent dapp, cleverly set up to seem legitimate. The catch is that the backend of the dapp is designed to steal your assets.  
#### Warning!  
The dapp that the scammer links to doesn't necessarily need to be related to the subject they got in touch about, nor does it have to relate to NFTs, any type of token, or otherwise. It just needs to get you to connect your wallet and interact so that it can propose a transaction for you to sign.
2. **The technical underpinnings**. Even if you've [connected your wallet](https://support.metamask.io/hc/en-us/articles/360059535551) to a scam site, there is not really any damage it can do. All it can do is see your account address, which it can then use to check your balances, and propose transactions for you to sign. _However_, **where it does start to get dangerous is when you start to be presented with things to sign**.  
Applying your digital signature to a transaction or message means you give it your irrevocable — you can't take it back — blessing. Usually this translates to total consent for it to do what it needs, as dictated by its smart contract.  
The problem with dapps that the scammers provide you with is that they will usually have **mechanisms hidden in the smart contract code that don't match the actions that the dapp displays in the UI**. This is how they trick you.
3. **The theft**. The most common variant of this kind of scam involves this process:  
   1. **Prompting you to sign a transaction** on the fraudulent dapp. This may or may not be related to NFTs, and will usually be entirely misleading about what it actually does.  
   2. **What you've actually signed is a transaction that lists your NFT(s) for 0 ETH**. The mechanism can be quite convoluted: it may be that the dapp can only access these NFTs because you've already approved OpenSea's access to them. This is how you can list them with a single signature.  
   3. The scammer, aware of the 0 ETH listing before anyone else, **immediately purchases it on OpenSea**.

## How can I spot NFT listing scams and stay safe?

Due to the possible complexity of social engineering/phishing, even the most experienced web3 users can fall victim to it. Total avoidance of phishing would mean removing yourself from any kind of online social contact or interaction, which, for many, is either unfeasible or undesirable — and even then you'd probably still be targeted. 

However, you can still prevent this occurring by remembering these key principles: 

* Be ultra-wary of any new dapp **_before_** you interact with it. Internalize the methods for [deducing whether a smart contract or a dapp is safe to interact with](https://support.metamask.io/hc/en-us/articles/10143114273563).
* **'Sandbox' your valuable assets** in different wallets. For example, you could have one wallet (i.e. one or more accounts backed up with _one_ Secret Recovery Phrase) that you use specifically for interacting with dapps. This could be your 'live' wallet for day-to-day activity, and could hold some ETH for interacting with contracts and paying gas. Meanwhile, your valued assets would be stored elsewhere — 'airgapped' in another MetaMask wallet, or stored in a hardware wallet.
* **Be sceptical of strangers on the internet**. Whilst the internet is full of decent people, anonymity makes it fertile ground for scammers. Although unpleasant, it's best to assume that any unsolicited contact — especially if it relates to web3 — has the potential to involve malicious intentions.

## Summary

tl;dr: **be careful with new, unfamiliar dapps, as they can mask functions in their smart contracts which make you unknowingly list your NFTs for 0 ETH**. 

* This works through social engineering — a.k.a. phishing. The scammer needs a pretext to share their fraudulent site with you.
* Always do your due diligence on any site you come across. See our [guidance](https://support.metamask.io/hc/en-us/articles/10143114273563).
* Consider distributing your assets across different wallets, so that if one is compromised or if you sign an approval or give your signature to something malicious, you at least haven't lost all of our assets.#Why does MetaMask need permission to modify data on all web pages?#
When adding MetaMask to your browser, you may see an alert indicating that MetaMask needs permission to **“read and change all your data on the websites you visit**”:

![MetaMask install edge notification](https://support.metamask.io/hc/article_attachments/13271397337627)

_This image was taken from a Microsoft Edge install process; your message may vary based on the browser and OS you're using._

### Why does MetaMask need these permissions?

#### Background:

These permissions are about **Web browsers and what MetaMask needs to work with them**. The explanation is a little bit technical, but we'll try to keep it simple.

MetaMask is a tool that allows you to interact with blockchain networks, like Ethereum. Those interactions consist on a basic level of sending information to those networks, and getting responses back.

But Ethereum isn't just a traditional Web server somewhere, serving up Web pages in HTML. It's a decentralized network of computers that syncs information and keeps track of assets, and isn't really part of the traditional internet. It doesn't receive requests and send information the same way a server does that's hosting a website: and **MetaMask needs your permission to get that information, because in web3, _you are the one in control._**

#### How it Works

Let's say you're on a page that will allow you to mint an NFT. This is what happens, step by step:

* You connect MetaMask to the dapp.  
   * This lets the dapp know what your public address is, for example.
* You enter in pertinent information--say, certain features you want in the NFT, or how many you want.
* **The dapp itself takes the information you put in,** bundles it into a proposed transaction or signature request, and passes it off to MetaMask.
* **You execute that request in MetaMask**, and MetaMask submits it to the network.  
   * This sometimes requires several signatures--for example, authorizing the dapp to request that your tokens be spent, and then actually authorizing the mint.
* The network receives your request, and executes the mint.
* **The dapp is able to detect that transaction** through its own connection to the blockchain network, and displays to you the NFT that you've minted.

#### The bottom line

**At no point is MetaMask itself reading or changing the information on the webpage**. The dapp does all the work of updating information from the blockchain.

The reason MetaMask needs these broad permissions is, quite simply, browsers don't offer any other way to open up a channel of communication between MetaMask and the webpage.

#### Traditional Web browsers weren't made for blockchain data; that's why MetaMask was created, to build that functionality into your browser.

### How does this work on a technical level? 

In order to enable dapps to access a blockchain network, MetaMask needs to inject a JavaScript object into each page. This allows the dapp to access the blockchain, and fetch publicly-available information specific to your wallet, such as the NFTs you hold, or your transaction history, or your token balances. For more information on how this works, [check out the MetaMask Docs](https://docs.metamask.io/guide/#new-dapp-developers). 

### Why should I believe you?

That's the spirit! **Web3 is all about being able to personally verify what others are telling you.**

If you are still not convinced, a good way to experiment and manage your browser is to sandbox your [MetaMask](https://support.metamask.io/hc/en-us/articles/360015289672-Sandboxing-MetaMask): create a [separate browser profile ](https://support.metamask.io/hc/en-us/articles/12174759849371)so that MetaMask is only installed there. This will let you get used to MetaMask and Web3 in an environment that's separate from your existing web identity—and gives you greater peace of mind about what MetaMask has access to.

That said, **MetaMask is safe for browsing**; we are industry leaders in security and open-source development; for more information on audits that have been performed, see [our Security page here](https://metamask.io/security/).

###  Welcome — you're joining over 30 million MetaMask users all over the world!#Token pre-sale scams#
Token pre-sales are periods during which organisations offer quantities of new tokens for investors to buy early. The 'pre' references the fact that these sales typically come before the _actual_ sale — generally referred to as an initial coin offering, or ICO.

#### Not financial advice

None of the information here is meant to recommend or dissuade you from getting involved with token pre-sales or ICOs. Those decisions are entirely yours. All we aim to provide is an overview of how this subject area can be used by scammers to steal your funds.

These events naturally attract a lot of interest from speculators: if you jump on the right token at a bargain price, its price may skyrocket. Step 3: _profit_? 

## How does it work?

Scammers have been known to exploit ecosystem participants for their fear of missing out (FOMO) on these potentially astronomical financial gains. It's as simple as:

1. **The scammers set up a** **front end,** usually a dapp to which they want you to connect your wallet. The level of sophistication here can vary: don't assume a site is safe to interact with just because it _looks_ professional and legitimate. Web development is so accessible nowadays that even the least ambitious scammer could put together a relatively sleek-looking dapp with minimal time investment.  
#### I'm not stupid: why do they think I'd fall for this?  
One of the main tactics scammers employ to get around your cynicism is by capitalizing on **hype**. Often, the scam token will be associated with a big name, whether directly associated with web3 or not. A brief web search will tell you that scammers have repeatedly tried to create a buzz around a purported Amazon token. What they want you to think is clearly: _why wouldn't you want to get in early on a token launched by one of the world's biggest retailers?!_  
With your judgement clouded by FOMO, they hope you'll buy in regardless of any doubts your more detached, rational self should have.
2. **They publicize the pre-sale**, directing you to the site/dapp where the sale is to happen. They may try to drum up interest by paying for promoted pages on search engines or socials. Often these will attempt to:  
   * Appear legitimate by pushing out articles that mimic the design and domain names of trusted news sources  
   * Attract traffic by closely copying the appearance legitimate token pre-sale sites, but using a slightly different URL out of necessity.
3. **The site prompts you to buy the token**. This will generally be a token approval, enabling the dapp to access and move tokens of a certain type from your wallet, up to a given cap (chosen by you).

The token involved will usually actually exist: anyone can create a new token with any given supply and name. It's just that, quite often, it will either not be the _actual_ (most likely similarly-named) token it pretends to be, or it will be designed to substantiate some fictitious scenario in which they'd like you to invest (e.g. the fake Amazon token). 

## How can I stay safe?

Fake pre-sales depend on eliciting a few main behaviours from you. Here's how you should act to avoid falling into the traps:

* **Verify the pre-sale is being offered on a legitimate site.** Mistaking a scam for a real site is one of the main ways this attack rears its head. Always double-check the URL before you make any transactions. Check the social channels of any project/organization to make sure you follow the correct link.
* **Make sure you understand the transaction before you sign it.** Token approvals involve giving a dapp access to move (including withdraw) a given type of token from your wallet. If you don't understand what token approvals are and look like, do your homework [here](https://metamask.zendesk.com/hc/en-us/articles/6174898326683) and [here](https://metamask.zendesk.com/hc/en-us/articles/6055177143579). It can be the difference between losing a bit of money and losing all your money.
* **Don't recklessly FOMO into a pre-sale.** Make your purchases based on rational thought, not emotion. Don't let your FOMO get the better of you.

If you have any questions about this subject, feel free to head to the [MetaMask Community](https://community.metamask.io/) or get in touch with Support via the 'Start a Conversation' button on the homepage of this site. #How to use multiple MetaMask wallets#
#### Note

_This article was adapted from our blog post, [here](https://consensys.net/blog/metamask/how-to-manage-multiple-wallets-with-metamask/)._

### Contents:

* [What is a wallet, anyway?](#h%5F01GQ58KQMVE4WPE36KNT16AFW3)
* [Why would I need more than one wallet?](#h%5F01GQ58KX1WSPDGVESJJBA6VPNY)
* [How to manage multiple wallets](#h%5F01GQ58M3T5NQ19NYWTQ1C1XS2M)

MetaMask is a flexible tool that can be used in numerous ways. One facet of this is that there's nothing stopping you from using MetaMask on multiple devices, with multiple Secret Recovery Phrases and private keys. 

## Defining 'wallet'

Since web3 has a fundamentally different user account structure to the traditional/web2 username + password combination we're all familiar with, it's useful for us to define what 'wallet' does and does not describe:

* **Your wallet should be thought of as the software through which you manage your accounts and assets**: in other words, MetaMask.
* **MetaMask can import one Secret Recovery Phrase, and any number of private keys**. It cannot, however, hold more than one Secret Recovery Phrase at a time.
* **Your account(s) are not the same thing as your SRP**. They have a complex cryptographic relationship you can read more about [here](https://medium.com/mycrypto/the-journey-from-mnemonic-phrase-to-address-6c5e86e11e14), though you don't _need_ to understand it. What you _do_ need to understand is that your accounts are controlled and created by your Secret Recovery Phrase.
* **Each account is represented by a public address**. Each account you create in MetaMask is derived from your Secret Recovery Phrase; therefore, **your wallet _contains_ one or more accounts**_._
* **Your wallet does not have a public address.** What it does have, though, is one or more accounts derived from it (starting with 'Account 1', named so by default), each of which has its own public address (and corresponding private key).

In summary: each MetaMask address you have (which leads to an _account_) is derived from a Secret Recovery Phrase (which you import into your _wallet_). 

## Why would I need multiple SRPs?

* **Security**. Even if one of your SRPs is compromised, you haven't lost all of your accounts. You haven't placed all your eggs in one basket, as the saying goes.
* **Privacy**. Even though you can [derive multiple accounts from one Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360015289452), you might want to further 'sandbox' your digital identities by creating an entirely new SRP. This way you can almost completely anonymize your activity (assuming the addresses have not been linked to you through KYC, somewhere).
* **Professional use cases**. Maybe you use one wallet for professional purposes — e.g. as a developer, or part of an organisation with web3 involvement — and another for personal use. It's wise to keep these separate. Equally, separating wallets could be useful for tax purposes, if, for whatever reason, you need to report different holdings and activity to different tax authorities.
* **Using different types of MetaMask**. MetaMask comes in three flavors: regular (orange fox), [Flask](https://metamask.io/flask/) (purple, and for developers), and [Institutional](https://metamask.io/institutions/) (blue). Each wallet variety requires installing a separate extension in your browser. It's possible that you want to use a combination of two (or even three?!) of MetaMask's different types concurrently — for that, you'd need to have multiple instances of MetaMask.

### Can I have multiple types of MetaMask installed in the same browser?

No — you can only have one.

Having more than one type of MetaMask — and, typically, any other wallet extension — active in your browser simultaneously will cause problems, and none of them will work correctly. To address this problem, either deactivate (or turn 'off') the additional extensions until you only have one remaining, or, as we're about to discuss, use multiple browsers or browser profiles to access them separately.

## 

## How to manage multiple wallets or SRPs

There are two ways you can approach this: the first is by using different browsers, and the second involves using different browser _profiles_. Let's take a look:

Different browsers Browser profiles 

This option is as straightforward as it sounds: if you’ve only got two or three SRPs, then you can simply install MetaMask in several different browsers, and use a different browser for each one.

Given the open-source nature of the modern web, there’s not a definitive listing of browsers that MetaMask will or won’t work in. The browsers officially supported by MetaMask are:

* Chrome
* Firefox
* Brave
* Edge

The easiest way to manage multiple wallets or SRPs is by using browser profiles. Let’s take a look at how these work with MetaMask in Chrome, as so many browsers are based on it. Chrome’s canonical instructions are available [here](https://support.google.com/chrome/answer/2364824), and the steps are fairly simple:

1. In the top-right corner of your browser, click the profile image (it will have your Google profile image, or if you haven’t logged in, it will have a placeholder image)
2. Under that menu, at the bottom, click on ‘add’:  
![Multiple MetaMask Wallets](https://support.metamask.io/hc/article_attachments/12769967416091)
3. Walk through the prompts to create the new profile; you probably don’t need to associate it with another email account, so you can just click ‘Continue without an account’:  
![Multiple MetaMask Wallets](https://support.metamask.io/hc/article_attachments/12769967410459)
4. Choose a color scheme, give your profile a name that reminds you which wallet you’re going to use with it, and hit 'Done':  
![Multiple MetaMask Wallets](https://support.metamask.io/hc/article_attachments/12769967617947)

Now all that’s left to do is to open a browser window in that new profile, [install MetaMask from our downloads page](https://metamask.io/download/) like you normally would, and follow [these instructions](https://support.metamask.io/hc/en-us/articles/360015289612) to restore from your SRP — or create a new one.#What are metatransactions? #
## What is a metatransaction? 

Metatransaction is a term that, simply put, describes a transaction that you instruct a third party to complete on your behalf. 

### On-chain transactions

Before we describe what metatransactions are and how they work, it's necessary to recap what we mean by **signing a transaction**. 

When you interact with Ethereum mainnet and similarly designed networks, most of your activity will be determined by simple transactions. At a basic level, if you want to send funds to another address, you need to _sign_ a transaction **on-chain**. Signing a transaction means that:

1. **You are the legitimate originator of the transaction**, i.e. _verification._
2. **You irreversibly consent to a given amount of an asset being transferred to another address** — referred to academically as _non-repudiation._
3. **The data in the transaction cannot be modified after you've signed**, i.e. _integrity._

Metatransactions — essentially just signed messages — share these same characteristics. However, they differ from standard transactions in the extent to which they are processed on-chain. A regular transaction — such as moving funds from one address to another — is computed and recorded on the blockchain. 

### Metatransactions: _off_\-chain

Metatransactions, by contrast, conduct one or more steps of the transaction **off-chain**. This is where they get their name: as a prefix, _meta_ generally refers to something being beyond, behind, or after something else. 

Why is this significant? Well, conducting activities off-chain comes with benefits. Mainly: **it's cheaper**, at least for the person initiating the transaction, the user. This is because the user doesn't have to shell out gas fees to pay for their transaction to be processed.

Instead, what generally happens is that the transaction is paid for by a **relayer** — a **third party that receives the signed message from the user and then passes it onwards to the network, paying the necessary gas fees.** 

Note how we say **message**, and _not_ transaction. When you transact via a relayer, you're sending the relayer a signed message, and nothing more — it's only when the relayer then submits your instructions to the network with gas that we can truly refer to a transaction. 

#### Where do relayers get the funds from to pay for gas?

Relayers typically get their funding from the developers or originators of a dapp using their services. More complex funding models are possible — such as issuing your own token to be used as a kind of 'voucher' to be used specifically for paying gas — but generally, this is how it works.

This isn't such a radical model. Think of the infrastructure of web2: the vast farms of servers that process and store the enormous volumes of data the internet generates every day. Web2 platforms don't usually charge you for using the platform. In other words, the infrastructure costs are not paid by the user. Instead, the site itself takes the hit, and seeks to offset this through other revenue streams, such as advertising or paid premium versions.

### What does a relayer do?

Relayers take the details of your signed transaction — the token you want to send, how much of it, and to whom — and incorporate it into another transaction, which they then submit to the network to be computed. 

The metatransaction you sign, therefore, isn't a _complete_ transaction, in that it doesn't contain all the usual components necessary to process it on-chain. Most notably, it's missing gas. The transaction that the relayer puts together, however, is complete with gas, and will be processed by validators. 

## What do metatransactions look like in MetaMask? 

For you, the user, sending a metatransaction will be similar to sending any other. You still sign a transaction that specifies a value, a token, and a recipient address. The difference is that the recipient address is a relayer, rather than the actual end recipient of the funds. **This means that, in practice, you don't really have to do anything differently**. 

The main giveaway of a metatransaction is that it will cost you nothing. You'll just be prompted to 'Sign': 

![MetaMask Metatransaction](https://support.metamask.io/hc/article_attachments/12345029059227)

## What is EIP-712?

Whilst not absolutely necessary for understanding metatransactions, a brief look at [EIP-712](https://eips.ethereum.org/EIPS/eip-712) can help explain some of their underpinnings. 

In brief, this EIP (Ethereum Improvement Proposal) makes it possible for wallets to show users readable text relating to the message they're signing, and allow them to sign it. This means that, when you're prompted with a metatransaction to sign in MetaMask, you can be shown human-readable information, rather than a long hexadecimal number of hashed (encrypted) information that's impossible to understand. 

### Why does it matter? 

EIP-712 doesn't enable metatransactions, but it makes them much more transparent to the user, and this, in turn, has real benefits for user security. 

Previously, our inability to parse the encrypted hexadecimal string would mean we have to **trust** that the message contains the correct data. This makes us vulnerable to scammers: imagine if you visit a fraudulent dapp and it prompts you to sign a metatransaction. Since you're unable to decipher the hashed, hexademical string, you have no idea whether you're giving you're approving something reasonable or signing a message that gives a scammer a green light to drain your wallet. 

Instead, when the data is converted into a human-readable form — i.e. words — the user can check and confirm the message is what they intended, because it will detail things like: 

* Who or what the recipient is, identifiable by their public address
* If a token is to be transferred, swapped, bought or sold: details of the quantity and token type
* Any other message details relevant to the transaction.

## Are there any security implications of metatransactions?

It's a good habit to maintain scepticism towards any message or approval you're signing with your wallet. However, **metatransactions don't have anything fundamentally insecure or unsafe about them**. 

That being said, they can be used by scammers. As with everything Ethereum (and blockchain in general), part of the trade-off of using a decentralized public network is that malicious actors can also get involved. 

Whenever you're signing a metatransaction, consider the following:

* **Am I on the right website?** Double-check the domain name. If the transaction isn't being proposed by the correct dapp, it could lead to funds loss and/or a compromised wallet.
* **Does the transaction data look correct?** Check the address the signed message lists. Is it the address of the correct smart contract? Does the message detail the correct token and the correct quantity of that token?#Clipboard hacking#
#### Clipboard hacks vs Keylogging attacks

Clipboard hacks have a closely related cousin in keylogging. Rather than just focusing on your clipboard, keyloggers allow bad actors to monitor every single keystroke on your computer. For more information, see this [thorough post](https://community.metamask.io/t/keyloggers-and-safety-procedure-an-overview/8789) by one of our Community admins.

## What is clipboard hacking? 

The good news is that clipboard hacking does not mean you now need to be suspicious of people bearing clipboards. The bad news is that it is a genuine and insidious method for stealing your crypto.

As they are hexadecimal (base16) and are many characters long, crypto wallet addresses do not lend themselves to being memorised or typed in manually, just as you would type in an email or username.

Enter copy and paste, the unsung hero of crypto transactions. Many wallets and exchanges, including MetaMask, include built-in 'copy' or 'copy to clipboard' shortcuts that allow you to copy your wallet address with a single click. These features smooth the process of pasting into a third-party site to which you may be transferring tokens, for example. 

**Clipboard hacking exploits the copy and paste function to rob you**. Rather than relying on users' inexperience or exploiting their trust, malicious actors will create and disseminate **malware**.

Once this malware has infected your computer, most likely hidden within a seemingly innocuous download, it will **automatically intercept your clipboard, scan for crypto addresses, and, if it identifies one, replace it with their own**. So by the time you hit paste, your address has been replaced, and you will be about to send your transaction to the hacker(s). 

Naturally, as blockchain transactions are irreversible, there is no way to retrieve your funds once they are sent. 

## How can I protect myself? 

A logical first port of call is to **ensure you have robust anti-malware software installed**, and keep it updated. Your software should identify most potential clipboard hacking malware programs, notify you, and quarantine them before they can affect your crypto activity. For more hardware/software security recommendations, see this [excellent list of suggestions](https://community.metamask.io/t/keyloggers-and-safety-procedure-an-overview/8789) by one of our admins on the MetaMask Community page. It relates specifically to keyloggers, but the same principles will apply. 

However, since there is a possibility that your anti-malware software may not detect the program, **the only way to be safe is to double- and triple-check addresses before you confirm any transaction**. Some hardware wallets may prompt you to do this anyway, but as transactions are irreversible, it is a worthwhile habit to adopt. 

_See [here ](https://support.metamask.io/hc/en-us/articles/360015289512#:~:text=How%20do%20I%20identify%20and%20address%20a%20clipboard%20hack%3F)for more details on what you can do if you suspect you're the victim of a clipboard hack._ #Spoofing scams#
## What is spoofing?

Spoofing involves **hiding or disguising identity to enable malicious activity**, literally _spoofing_ the identity of the malicious party to make it believable and appear trustworthy. 

Fraudsters often use this method in tandem with the closely related practice of **phishing**, through which they attempt to obtain personal information from you directly. Hand in hand, these two methods can easily deceive, and the sophistication of these hacks has grown in step with the popularity of crypto and digital assets, with ever more potential victims entering the Web3 space.

## What could a spoofing attack look like? 

A spoofing hack will target your [Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/4404722782107-User-guide-Secret-Recovery-Phrase-password-and-private-keys)(also known as a seed phrase), as this can be used to restore your wallet and will provide a hacker with access to your private keys and the wallet's contents. MetaMask is a **[self-custodial wallet](https://consensys.net/blog/metamask/whats-in-a-self-custody-non-custodial-wallet-anyway/)**, meaning **you are responsible for keeping your secret recovery phrase secure**.

In practice, a classic spoofing attack on your MetaMask wallet could go something like this:

1. You ask MetaMask a support question in reply to a tweet. (n.b. this is inadvisable — always use our official channels, found [here](https://support.metamask.io/hc/en-us).)
2. A malicious account (potentially a bot, or at least using a bot to scope you out) identifies you as a target due to your requirement for MetaMask support, and will reply to your tweet or send a DM. The account will be configured to resemble an official MetaMask support channel and could include our fox logo, a vaguely convincing Twitter handle and content and replies which read professionally. Another approach could be for the attacker to pose as a MetaMask support engineer, even including a headshot and name.
3. Using their spoofed identity, **the bad actor will rely on you believing that they are an official MetaMask support channel/engineer and talk you into handing over your Secret Recovery Phrase or private key(s) to resolve your problem**. For example, if your issue was a slow or pending transaction, they may offer to look into the issue but request your secret recovery phrase to do so.
4. With their hands on your secret recovery phrase, the bad actor can access your private keys and drain your wallet of funds to their chosen address.

This scenario is just an example, and similar events could play out across any social media platform, messaging service, forum, or otherwise on which you share information publicly. 

## How can I protect myself from spoofing attacks?

Whilst using MetaMask to engage with Web3 ecosystems such as the world of DeFi can be rewarding and exciting, you need to maintain constant vigilance. Golden rules for preventing and identifying spoofing include:

* Remember: **MetaMask will never contact you outside of our support channels**, accessed through our [help center](https://support.metamask.io/hc/en-us). Anyone asking you for contact information, your secret recovery phrase or details of your support issue outside of these channels is a potential scammer and should be ignored and/or reported.
* **Be vigilant**. If it looks like it might be a scam, it probably is. Always be observant and keep a lookout for suspicious, telltale signs. These could include:  
   * Requesting personal information, including anything from your name, the value of your wallet's holdings, or even your private key, which you should **never, ever give to anyone.**  
   * Unofficial-looking Twitter handles using underscores, doubled-up letters, and numbers to mimic official accounts (i.e.[@MetaMask](https://twitter.com/MetaMask)).  
   * Requests to reach out for support, get in touch, or send a DM.  
   * Unprofessional language.

Most importantly, **KEEP YOUR SECRET RECOVERY PHRASE SECURE**, and **do not hand** **it out** regardless of how convincing the person/entity may be.#Sweeper bots/scripts#
## What is sweeping?

Sweeping (also known as _scavenging_) involves malicious parties assigning a script to your wallet which monitors transactions broadcast to the network, as well as the _mempool_ or _txpool_ (transaction pool) where pending transactions are temporarily stored. Once these sweeper scripts identify an incoming or outgoing transaction from the targeted wallet, they intervene to sign a new transaction before the original is complete. The funds can then be intercepted and transferred instead to a wallet written into the script by its owner. 

**Your wallet can only be affected by a sweeper script if you share your secret recovery phrase with a bad actor**. 

They are particularly troublesome for two reasons:

* **The code can react far quicker than a human ever can**. Racing to move your funds through your wallet faster than the script will always result in you coming out second best.
* **It is subtle**. It is not immediately apparent to the user that they've been hacked, as the script works out of sight. If you perform a significant transaction and you or the recipient do not receive the funds, you may at first assume the transaction is stuck or pending, or that MetaMask has misfunctioned.

## How might this play out in practice? 

The first and crucial step for a scammer is to obtain your secret recovery phrase. To do so, they may deploy a phishing attack, which could use the spoofing method outlined above. They may pose as a friendly helpdesk engineer offering to help you resolve your issue or attempt to disguise themselves as an official MetaMask support account. Another potential avenue is to set up a seemingly trustworthy dapp—or mimic an established one—and require the user to input their private key or secret recovery phrase to use it.

If they are successful, they will be able to access your wallet, obtain your private key, and write it into the sweeper script. Possession of your private key allows the script to **sign transactions without your knowledge**, allowing it total and unrestrained control over wallet activity. The script will then proceed to monitor transactions coming to and from your account and _sweep_ out any tokens you transfer in before you could possibly react. 

Sweeper scripts are a nuisance to dispose of once they have infiltrated your wallet, and require you to employ very complex methods or even recruit whitehat hackers. For example, there are highly specific approaches you can take if you are attempting to [get NFTs out of a compromised wallet](https://medium.com/mycrypto/operation-cryptokitty-rescue-93fd8e00e4f8). 

## How can I stay safe?

**Keeping your secret recovery phrase secure is the best and most dependable way to avoid falling victim to sweeper scripts.** Without it, malicious actors cannot access your private key and sign transactions that steal your funds. 

Another option—the relevance of which scales with how much you value your crypto holdings—is to **consider** **buying a hardware wallet**. Popular options include Ledger and Trezor. Hardware wallets are termed "cold" wallets as they store your private keys completely offline, a considerable obstacle to hackers. 

As with most things web3, you should also **stay sceptical**. That is to say, whenever you interact with Dapps, do not assume they are reputable and trustworthy. Always do your research and make sure you are comfortable with the risks. 

_See also: [Fighting back against sweeper bots](https://support.metamask.io/hc/en-us/articles/5716855323675)_#What are the risks of using MetaMask Staking?#
Please see our [Risk Disclosures](https://consensys.net/staking-risk-disclosures/). #NFT minting scams#
NFTs played a considerable role in the surge that web3 experienced in 2021\. Creating, buying, and selling all helped raise asset prices, and web3 was further pushed into the spotlight of mainstream media coverage and discussion amongst people who had previously had no involvement with crypto. 

Abstracting crypto away from numbers and charts and into art and collectibles means that NFTs often appeal to people who, in years gone by, would not have been involved with crypto. This can make them such an appealing target for scammers. If you're not an experienced web3 participant, and just got involved because you want to explore a new and more rewarding way of selling your art, you're less likely to be clued up on the technical underpinnings of blockchain, smart contracts, and tokens, and therefore _more_ likely to fall victim to a scam. 

That's not say that those involved with NFTs aren't knowledgeable; just that the popular appeal of these assets may attract people who _are_ ignorant of key web3 security principles.

## How does this scam work?

Borrowed from its usage as a term used to describe the creation of that much more traditional asset, the physical coin, the word _mint_ basically describes the act of creating an NFT. From its minting onwards, the asset and its owner are recorded on the blockchain. 

In a lot of cases, NFT creators or collectives distribute new collections through open minting processes, where anyone can get involved. Often these are gated by membership of a certain club, possession of existing related NFTs, or some other credentials. Sometimes, though, they're fully public, with a first-come, first-served model. 

These are usually the situations that scammers are trying to lure you into. Though the circumstances can and do vary significantly, this is the general procedure:

1. **The scammer invents an NFT project**. Sometimes this may be almost impossible to distinguish from a genuine project. In other cases, it may imitate existing prominent projects in some way, to capitalize on — leach off — the interest they attract.
2. **They present you with the scam NFT mint, and apply pressure.** Emails, SMS, Telegram, Instagram, Twitter, Reddit... the number of possible options for publicising a scam NFT project is considerable. Once they've made you aware, they will contrive various ways of convincing you that you absolutely need to get involved, right away.
3. **You're made to sign a transaction that results in you losing funds**. Again, the scope for this is large. Types of transactions that scammers may prompt you to sign include:  
   * **Send**: A simple 'send', i.e. transfer of funds. This should ring alarm bells because it demonstrates you're not receiving anything in return — you're just asking to have funds removed from your wallet and added to someone else's. NFTs will not be involved at all. It is also not a contract interaction, meaning it couldn't possibly be interacting with an NFT smart contract.  
   * **Token approval**: Asking you to authorize the dapp and its smart contract to move around a given amount of a token in your wallet (you can [read more here](https://metamask.zendesk.com/hc/en-us/articles/6174898326683)). Think: "Why would I need to provide access to my tokens to mint an NFT?" Answer: you shouldn't. NFTs will need gas, paid in ETH, to mint. But an NFT mint certainly won't need access to any token, such as an ERC-20.  
   * **Dangerous transaction (warning message)**: Sometimes MetaMask will automatically identify when you're interacting with a suspicious contract, and present you with a warning message in red text advising that you may be handing over control to a significant amount — or _all_ — of your assets. A suspect NFT mint site may prompt this message. If you see it, you should **never** sign the transaction.

#### What's all this talk about smart contracts?

An NFT mint is always orchestrated by a smart contract. Whether you 'create' your NFT on a major marketplace or write your own smart contract to do so, you need to interact with the Ethereum Virtual Machine so that your NFT is safely recorded on the blockchain. **This is why minting NFTs is not free: gas fees must be paid to fund this computation** (though some marketplaces have 'lazy' minting, where you don't pay until your NFT sells.)

Minting an NFT fundamentally will involve a smart contract interaction. 

## How can I identify scam NFT mints?

Given the creativity and desperation of scammers to find new ways to exploit people, it isn't possible for us to exhaustively document every single way that this scam could reach you. Additionally, as we mentioned above, in some cases a fraudulent NFT mint may be indistinguishable from a genuine one. However, if you learn to recognize what an NFT mint _should_ look like in MetaMask, you're far less likely to get scammed. 

That being said, a lot of instances of this scam can be avoided by:

* **Being wary of any direct messages you receive, and, specifically, the links they contain**. If the mint is attempting to mimic an existing legitimate project, inspect the URL and compare it with the real site.
* **Not falling for FOMO.** Scammers will try to create a sense of urgency, pressurizing you into acting without scrutinizing what you're interacting with. In these situations, where you're worried about missing out on an opportunity to potentially secure a valuable asset at a bargain price, take a step back. If the NFT mint exhibits one or more of these signs, it could be a scam:  
   * A **progress bar** **or a counter**, indicating that there are fewer and fewer NFTs available to be minted as time goes on  
   * A **countdown timer**  
   * **Popup messages** on the site showing others — in real-time — that have just minted, and how many NFTs they minted
* **Due diligence**. As we stated with imitation NFT projects above — where comparing URLs and other features against the legit version can help you identify scams — you can usually get a clearer picture through additional research. If the project is not imitating an existing one, you could:  
   * Check socials and websites for traces of an identifiable team behind it, a whitepaper, roadmap, a community, etc.  
   * Take the public address of the party you're interacting with and check it out on a block explorer. Does it match the activity you'd expect of an NFT minting contract?

## Summary

* NFT mints are often used as an attack vector as scammers elicit FOMO to **try and make you act with less caution**.
* Always do your **due diligence** on any NFT project that is hosting a mint.
* Often, scams will **rely on you not properly scrutinizing the transaction** that they prompt.

If you have any questions about this subject, feel free to head to the [MetaMask Community](https://community.metamask.io/) or get in touch with Support via the 'Start a Conversation' button on the homepage of this site. #How do estimated rewards work? #
When viewing your holdings, you'll see two variants of estimated rewards which are calculated slightly differently: 

* **Estimated lifetime rewards**: Lifetime rewards are an estimate of how many rewards you’ve received from the staking provider, calculated using a mix of on-chain data, data via API from the [Lido subgraph](https://thegraph.com/explorer/subgraphs/HXfMc1jPHfFQoccWd7VMv66km75FoxVHDMvsJj5vG5vf?view=Overview) and [Rocket Pool subgraph](https://thegraph.com/explorer/subgraphs/S9ihna8D733WTEShJ1KctSTCvY1VJ7gdVwhUujq4Ejo?view=Overview) from The Graph, and data via API from CoinGecko. It may include rewards you may have received from holdings acquired outside of MetaMask Staking.
* **Estimated current rewards**: Current rewards is the percentage of annual rewards you are predicted to receive, subject to change, based on a provider’s performance over the last week, as calculated by each provider's API.#How does MetaMask calculate estimated rewards, network control, and popularity?#
**Estimated rewards** is the percentage of annual rewards you are predicted to receive, subject to change, based on a provider’s performance over the last week, as calculated by each provider's API. To learn more about estimated rewards, see [here](https://support.metamask.io/hc/en-us/articles/11991443541915). 

**Network control** is the estimated percentage of staking validators associated with each provider, as calculated by the[ rated.network](https://www.rated.network/) API.

**Popularity** is an estimate of the fiat value of ETH staked with each provider. This is calculated by multiplying the estimated number of staking validators associated with the provider—obtained via the [rated.network](https://www.rated.network/?network=mainnet&view=pool) API—by an estimate of 32 ETH staked per validator. #What does it mean that Rocket Pool is at 'max capacity'? #
Rocket Pool relies on independent operators joining their protocol and using Rocket Pool’s software to set up new validators using ETH pooled in the protocol. Sometimes, there may not be enough new validators joining Rocket Pool to meet the demand for staking. When this occurs, Rocket Pool limits the amount of new ETH that can be pooled.

![Rocket_Pool_max_capacity.png](https://support.metamask.io/hc/article_attachments/12770268025883)

When Rocket Pool is at or near max capacity there is a chance your transaction will be rejected. To reduce the possibility that you try to stake and pay fees including gas for a failed transaction, the MetaMask Staking interface disables staking with Rocket Pool during these periods.#MetaMask Swaps in the Portfolio Dapp#
MetaMask Swaps as it exists in the Portfolio Dapp functions extremely similarly to the regular MetaMask Swaps.

If we cover your query, our guides and tips on MetaMask Swaps in [this section](https://support.metamask.io/hc/sections/360012954532) will cover it. #I can't connect MetaMask Extension to a dapp #
Usually, when you intend to connect MetaMask to a dapp in a desktop browser, a pop-up will appear in MetaMask asking you to confirm the connection.

**If nothing happens, the most common reason is because you have more than one browser-based wallet installed and active**. **You'll need to disable other wallets in order for MetaMask to work properly.** 

To do this, head to your browser's extension manager and find the on/off toggle next to the other wallet's extension. It should look like this:

![MetaMask_extension_toggle.png](https://support.metamask.io/hc/article_attachments/13240492768667)

**Once you have disabled other wallets, reload the page**. 

Depending on your browser, managing extensions can work a little differently. To find the correct page, copy the appropriate link into your address bar:

* **Chrome**: chrome://extensions
* **Brave**: brave://extensions
* **Firefox**: about:addons
* **Edge**: edge://extensions

If disabling other wallets doesn't work, get in touch with Support via the 'Start a Conversation' button on our homepage. #Testnet ETH scams#
[Testnets](https://support.metamask.io/hc/en-us/articles/360059213492) exist on pretty much all networks in web3 — from Ethereum to BSC to Polygon to Palm. They're an essential element of a functioning smart contract ecosystem, since they allow developers of decentralized applications (dapps) to test their new creations before releasing them. 

Testnets come with their own native tokens that mimic the native token of the corresponding mainnet. On Ethereum's testnets, known as Goerli and Sepolia, real-world ETH is simulated through testnet ETH, which you may see referred to as 'Goerli ETH' or 'Sepolia ETH'. 

Crucially, **testnet variants of ETH do not have any real-world value**. This is what scams relating to testnet ETH hinge on; more specifically, they rely on users' ignorance of this fact. 

Real ether is traded on the open market and has a fluctuating fiat price at any given time that reflects market conditions. Testnet ETH, on the other hand, is essentially worthless, since you can obtain virtually unlimited amounts for free from faucets (some are listed in this [Ethereum Foundation article](https://ethereum.org/en/developers/docs/networks/#which-testnet-should-i-use)), if you have the patience. 

## How do these scams work?

In a nutshell, and as alluded to above, **scams that involve testnet ETH rely on you not knowing — at the time of the scam being executed — that testnet ETH has no monetary value**. This could be because you forgot, the UI on a dapp misled you, you believed the word of a bad actor, or you genuinely were not aware in the first place. 

Whatever the reason, it's irrelevant to the scammer. 

Here's how these tricks typically work:

1. **The scammer sets up the scenario**. If that sounds vague, it's because the scope of how this trap could be laid is pretty broad. Generally, they need to engineer a scenario where they can give you testnet ETH in exchange for an asset of _actual_ value. Here are some examples:  
   * **Scenario A: NFTs.** Imagine you're an artist, and you have a few NFTs listed on a marketplace. You're just starting out, so you list items in a collection at 0.1 ETH each. One day, you wake up and see someone has offered you 5 ETH for one. Naturally, you rush to accept it.  
   * **Scenario B: A real-world transaction.** Sometimes bad actors may insist on paying you for a real-world item in crypto. Say, for example, you were happy to, as long as they sent a deposit first so you could check they were legit.  
   * **Scenario C: You're trading in-game items.** Tradable items in online games, especially ones already linked to the blockchain, lend themselves well to crypto payments: crypto transcends international banking systems and is quick and convenient. If both parties are willing, why not?
2. **The scammer tries to convince you the ETH they sent has value**. You'll probably be able to guess what happens next, regardless of which of the three scenarios we follow. The scammer has paid for their item or service in testnet ETH that has no real value — in other words, for free — and needs to convince you that everything is fine. Some tactics they may employ include:  
   * **Demanding you connect to the testnet in your wallet**. If you connect to a testnet in MetaMask, it's possible that you may see a fiat value (e.g. US dollars) that suggests the testnet ETH _is_ worth something. This is turned off by default in MetaMask, but you may have it turned on, for one reason or another. The scammer will be banking on the fact that you will immediately relax once you see the fiat value/  
   * **They give you instructions or guidance on trading the testnet ETH for tokens with real value**. They may tell you have 48 hours, for example, to convert the tokens to real ETH, or you may be given a set of spurious instructions or a specific dapp that will let you convert the testnet ETH. Don't be fooled: there is no way of converting it into real value.  
![Testnet_ETH_scam_example.png](https://support.metamask.io/hc/article_attachments/13271098833051)  
_An example of a scammer attempting to convince a Reddit user to accept testnet ETH. From [this thread.](https://www.reddit.com/r/Metamask/comments/qv9rbi/new%5Fto%5Fcrypto%5Fis%5Fthis%5Freal%5For%5Fa%5Fscam%5Fhe%5Fsent%5Fme/)_
3. **You send over the asset in question**. The timing of this step and the previous is somewhat interchangeable: it's possible you might have already sent the NFT, for example, before the scammer's charm offensive begins. Either way, by the time you've parted with your cryptoasset, it's already too late. Blockchain transactions are immutable, so if you've already been convinced by the scammer that your testnet ETH has value and you've sent over the asset they requested, then it's extremely unlikely you'll be able to get it back.

## How to stay safe

The main things to look out for to prevent yourself falling victim to a scam involving testnet ETH are:

* **Urgency.** Scammers often try to create a sense of urgency to make you think you'll miss out on free money if you don't act quickly.
* **Unsolicited** **messages.** To make this work, the scammer needs to reach out to you. This can be on any messaging platform (e.g. Telegram, Discord), social media platform (Reddit, Instagram, Twitter), or traditional communication method (SMS, email). Be sceptical of any such messages and assume they do not mean well.
* **'Too good to be true' offers/'free money'**. If the supposed offer seems too good to be true, it probably is.

## Summary

* Testnets are used primarily by developers to make sure their dapps work. The versions of ETH on testnets do not have any real value, as they can be obtained for free from faucets.
* Scammers exploit lack of awareness around testnets' purpose, making people believe that testnet ETH has value.
* The scam often involves fraudulent _purchases_ of cryptoassets with testnet ETH, including NFTs, gaming collectibles, and more.
* Once users realize the ETH they received has no value, it's too late.

If you have any questions about this subject, feel free to head to the [MetaMask Community](https://community.metamask.io/) or get in touch with Support via the 'Start a Conversation' button on the homepage of this site. #What are the tax implications of liquid staking?#
MetaMask cannot provide tax advice and you should consult a competent tax professional in your jurisdiction for tax advice about whether staking, receiving rewards, and swapping may be considered taxable events in your jurisdiction. For additional information, see [here](https://support.metamask.io/hc/en-us/articles/4406001678747).#How am I rewarded with Rocket Pool?#
With Rocket Pool, the amount of rETH you hold doesn’t change to reflect rewards. Rather, the amount of ETH you can withdraw in exchange for your rETH updates according to a conversion rate where your rETH represents your proportional claim to ETH on the Rocket Pool protocol. This conversion rate increases or decreases based on the performance of the protocol to reflect any rewards you may receive. Rocket Pool typically updates the conversion rate on a daily basis.

Here's how Rocket Pool calculate the conversion rate:

![6209fe6d-310a-4302-b9ee-56006290ff08.png](https://support.metamask.io/hc/article_attachments/11835046885787)

For example, if you initially received 1 rETH when Rocket Pool’s conversion rate was “1 rETH = 1.1 ETH” and your share of rETH on Rocket Pool gets you 0.1 ETH in rewards over time, the conversion rate would be expected to update to “1 rETH = 1.2 ETH”.

If you want to skip the manual calculations, you can easily check the amount of your rewards in the Stake section of MetaMask Portfolio, under the ‘Lifetime Rewards’ column.

Staked ETH and rewards received on Rocket Pool are not currently withdrawable, since withdrawals will only be possible after planned upgrades to Ethereum and after Lido and Rocket Pool adjust accordingly.#What is Rocket Pool and rETH?#
Rocket Pool is a liquid staking protocol for Ethereum that allows users with less than 32 ETH to collectively fund new validators and receive rewards. Rocket Pool outsources the technical and operational complexity of operating an Ethereum validator to permissionless validator operators subject to certain requirements.

When you deposit ETH into Rocket Pool, you receive Rocket Pool’s liquid staking token, rETH, which represents your proportional claim to ETH in Rocket Pool. As validators operating on Rocket Pool receive rewards, you are eligible to receive rewards proportional to your stake, which is typically expected to occur daily.

When you send ETH to be staked in Rocket Pool, Rocket Pool subtracts a 0.05% fee and then converts your ETH to rETH. The conversion rate is calculated according to your proportional claim to ETH on the Rocket Pool protocol.

For example, if Rocket Pool’s conversion rate is “1 rETH = 1.1 ETH” and you were to send 1 ETH to Rocket Pool to stake:

* Rocket Pool would take a 0.0005 ETH fee, leaving you with 0.9995 ETH to be staked.
* Your 0.9995 ETH would convert to \~0.90863 rETH at the “1 rETH = 1.1 ETH” conversion rate.
* You would receive \~0.90863 rETH to represent your stake with Rocket Pool.

Staked ETH and rewards received on Rocket Pool are not currently withdrawable, since withdrawals will only be possible after planned upgrades to Ethereum and after Lido and Rocket Pool adjust accordingly.

To learn more about Rocket Pool rewards, see [here](https://metamask.zendesk.com/hc/en-us/articles/11834708272283).#How am I rewarded with Lido?#
With Lido the number of stETH tokens in your wallet increases or decreases based on the performance of the protocol to reflect any rewards you may receive. Lido typically updates token balances on a daily basis.

Lido expects stETH to be withdrawable on a 1:1 basis for ETH once withdrawals are enabled.

For example, if you initially hold 1 stETH and your share of stETH on Lido gets you 0.1 ETH in rewards over time, your balance would be expected to update to show that you hold 1.1 stETH.

If you want to skip the manual calculations, you can easily check the amount of your rewards in the Stake section of MetaMask Portfolio, under the ‘Lifetime Rewards’ column.

Staked ETH and rewards received on Lido are not currently withdrawable. Since withdrawals will only be possible after planned upgrades to Ethereum – and after Lido and Rocket Pool adjust accordingly – there is no guaranteed date by which withdrawals will be available.#What is Lido and stETH?#
Lido is a liquid staking protocol for Ethereum that allows users with less than 32 ETH to collectively fund new validators and receive rewards. Lido outsources the technical and operational complexity of operating an Ethereum validator to a permissioned group of validator operators.

When you deposit ETH into Lido, you receive Lido’s liquid staking token, stETH, which represents your proportional claim to ETH in Lido. As validators operating on Lido receive rewards, you are eligible to receive rewards proportional to your stake, which is typically expected to occur daily.

When you stake ETH with Lido, Lido sends you stETH on a 1:1 basis equivalent to the amount of ETH staked, so that if you were to stake 1 ETH you would be issued 1 stETH in return.

To learn more about how Lido rewards work, see [here](https://metamask.zendesk.com/hc/en-us/articles/11834668124059).#What's the difference between withdrawing my ETH and swapping?#
Withdrawing staked ETH and rewards involves exchanging your stETH or rETH for ETH directly with the Lido or Rocket Pool protocols. This may involve Lido or Rocket Pool shutting down a validator or preventing the activation of a new validator, to ensure that there is enough ETH to cover a withdrawal.

**Staked ETH and rewards received on Lido and Rocket Pool are not currently withdrawable**. Since withdrawals will only be possible after planned upgrades to Ethereum – and after Lido and Rocket Pool adjust accordingly – there is no guaranteed date by which withdrawals will be available.

A swap involves trading your stETH or rETH back for ETH, often via a third-party exchange, and does not typically involve shutting down a validator. Swaps are subject to fluctuating market prices, so you may want to consider waiting for withdrawals. To easily swap your liquid staking tokens through the MetaMask Staking interface, find the position you’d like to exit from, click the three dots on the right next to your position, and click “Swap”.#How do I withdraw my stake and rewards?#
**Staked ETH and rewards received on the Lido or Rocket Pool protocol are not currently withdrawable**. Since withdrawals will only be possible after planned upgrades to Ethereum – and after Lido and Rocket Pool adjust accordingly – there is no guaranteed date by which withdrawals will be available.

As an alternative to a withdrawal, you may consider trading your stETH or rETH for another asset such as ETH through MetaMask Swaps. Swaps are subject to fluctuating market prices, so you may want to consider waiting for withdrawals.

To easily swap your liquid staking tokens through the MetaMask Staking interface, find the position you’d like to exit from, click the three dots on the right next to your position, and click “Swap”.#What happens to my ETH when I stake through MetaMask?#
When you stake through MetaMask, we route your transaction and ETH (minus any fees) to your selected staking provider. Your ETH is deposited into their protocol, and you receive liquid staking tokens directly from them in return. These tokens, such as Lido’s stETH or Rocket Pool’s rETH, represent your proportional claim to ETH in their protocol.#What are liquid staking tokens?#
Some staking protocols provide individuals who stake with them with _liquid staking tokens_ that represent their proportional claim to ETH in the protocol. Lido’s liquid staking token is stETH and Rocket Pool’s is rETH.

Liquid staking tokens can typically be bought or sold in a _swap_, which may allow you to trade your stETH or rETH back for ETH even if direct withdrawals of staked ETH and rewards aren't yet enabled by those protocols. Swaps are subject to fluctuating market prices, so you may want to consider waiting for withdrawals.#What is staking?#
**Staking is the act of depositing ETH to activate new validators on the Ethereum protocol**. Validators help keep Ethereum secure and operational by validating transactions and adding new blocks to the blockchain. For more on validators, Ethereum, and how it all works, check out our explainer here.

In return for staking ETH and operating a validator, stakers are eligible to receive rewards that may include:

* _Consensus layer rewards_, in the form of new ETH issuance
* _Execution layer rewards_, based on:  
   * A portion of the gas fees users pay to send Ethereum transactions  
   * _Maximal extractable value_, derived from software run by some validator operators.

Staking on Ethereum typically requires a minimum of 32 ETH, but some staking protocols, such as Lido and Rocket Pool, operate staking pools that allow individuals with less than 32 ETH to combine their deposits with others to activate validators.

Staked ETH and rewards received on Lido and Rocket Pool are not currently withdrawable. Since withdrawals will only be possible after planned upgrades to Ethereum – and after Lido and Rocket Pool adjust accordingly – there is no guaranteed date by which withdrawals will be available.#What can I stake with MetaMask Staking? #
MetaMask Staking currently allows you to stake ETH through the Lido or Rocket Pool protocols.#A transaction failed when interacting with a smart contract. What can I do?#
Smart contracts are the bedrock of what makes Ethereum — and, nowadays, many other smart-contract enabled networks — so special. Rather than just a decentralized blockchain for recording a sequence of transactions, smart contract platforms like Ethereum allow virtually anyone to create and run computer programs that interact with their blockchain. These programs are known as smart contracts, and they run on the Ethereum Virtual Machine (EVM). 

#### Transaction?

In this context, when we say 'transaction' we're referring to any point at which a smart contract needs to modify or update the [state](https://ethereum.org/en/developers/docs/evm/#from-ledger-to-state-machine) of the Ethereum network. Day-to-day, most of your transactions on Ethereum are likely to involve smart contracts. If you use MetaMask Swaps, for example, you'll be interacting with one.

**Your failed smart contract transaction is more than likely an output from one of these programs (smart contracts) that mandates updating the state of your or others' accounts on the EVM.**

Since the functions and design of smart contracts can vary enormously — Ethereum is 'Turing-complete', meaning it can perform any computable task — there are many different reasons why a transaction prompted by one could fail. Solidity, the programming language used for Ethereum smart contracts, also allows the authors to define custom error messages with any conditions they choose, further increasing the potential scope. 

**You can see the error message for your failed transaction by finding the transaction on Etherscan** (or the appropriate block explorer for the network you're on) using its [transaction hash/ID](https://support.metamask.io/hc/en-us/articles/4413442094235). 

Although it's virtually impossible to exhaustively document smart contract errors, we have already documented many common ones. Simply type 'Error' in the search bar to see them, or just search more specifically for the one you're experiencing. 

If you still need help, feel free to get in touch with Support via the 'Start a Conversation' button on the homepage of this site. (If it doesn't appear, try turning off ad blockers or any other features that might interfere, such as a VPN.)#Fake crypto exchange scams#
### Contents

* [How fake crypto exchange scams work](#h%5F01GMQHKV2QWNRKZ7G56FGXVQ5D)
* [How to stay safe](#h%5F01GMQHM08Z0VB80J00QV6QJRY8)
* [Summary](#h%5F01GMQHM5X2WXG92RRSWBYYC4QD)

Scammers will always try to get as close to you and your funds — whether in crypto or fiat — as they can. One of the places where web3 participants are at their most vulnerable is centralized exchanges (CEXs). 

As opposed to decentralized exchanges (DEXs), where one party directly exchanges their tokens with another party according to smart contracts (code), CEXs need their customers' trust due to them taking **custody** of their funds for at least part of the order process. Whereas DEXs conduct the entirety of every trade on chain, CEXs usually store their order books — the _ledger_ where trades are recorded — **off chain**. 

Since their order is off chain, the user can't track its progress transparently, and instead has to trust that it is being processed and that they will receive the funds they were promised. 

**And wherever trust is necessary, it can be exploited**. Let's take a look at how these scams are usually structured.

#### Not all exchanges are created equal

None of this is to say that DEXs are fundamentally safer than CEXs. Due to their almost complete reliance on code, they are extremely vulnerable to exploits — _if_ a talented hacker can find one and leverage it to their benefit. 

CEXs also vary in their trustworthiness, but since this is a subjective label determined by individuals' experiences and opinions, most discussion is moot. The collapse of FTX in late 2022, a CEX widely lauded as one of the most trustworthy, demonstrates why you should retain a healthy scepticism towards CEXs and look into self-custody solutions to minimize your exposure to the risk of centralization.

## 

## How the scam works

Like many scams in web3, **fake exchanges operate with a model that lures users with the promises of better-than-average (or, often, spectacularly better than average) returns on investments**. Other promises could include sign-up bonuses, such as free crypto. Whilst many legitimate CEXs offer rewards for using their platform, it is rarely without conditions: it's more commonly a reward for completing a certain number of transactions, or for just becoming more heavily involved in the platform through deposits or similar. No-strings-attached free money is usually a sign of a scam. We find ourselves saying this a lot, but it is an almost-universally relevant principle to keep in mind in web3: if it seems too good to be true, it probably is. 

Anyway, here's the playbook:

1. **You're presented with the scam site**. The scammer's method for getting you on their site can vary, and could be any of the following (and more):  
   * Unsolicited direct messages on social media  
   * Traditional communication methods such as email or text  
   * Mimicking a reputable CEX. This can include mimicking the appearance of the site itself, but also 'typosquatting' with a similar URL, or just adopting similar or related names to major reputable exchanges.
2. **You're promised significant rewards**. To entice you to use the fraudulent site, the scammers need tempting bait. This could be instant sign-up bonuses, extremely high returns (APY) on deposits/staked assets, or something similar. Sometimes, in order to access these returns and use the platform, users are mandated to pay some kind of account fee to setup their profile and enable trading.
3. **The money you deposit to invest is stolen, and your portfolio and trades manipulated**. When you deposit to make trades on the platform, your funds are actually just removed by the scammers. However, they are likely to make sure that your portfolio and/or trade history is configured to _suggest_ that you did make the trade, and received the appropriate amount in return. This manual adjustment of the trades means they can easily reflect the high returns/bonuses that they initially promised. This results in a situation in which the user thinks that they're making considerable returns, since every time they check their portfolio, they will see them reflected there. In reality, any investment they make is likely to be immediately pocketed by the scammer, with no actual trade having taken place.

## How to stay safe: red flags to look out for

**Knock-off brand and domain names**

A common tactic for feigning legitimacy is mimicking the names and branding of existing CEXs. Make sure to inspect the domain name in the site's URL closely, and compare it with the real thing, which should be straightforward to locate. Scammers may also 'typosquat'. This is a technique where the URL is the same as the legitimate version, only with one or two characters replaced. This makes it possible for users to directly input the scam site's URL if they make a simple typo.

**Unbelievably high returns or rewards**

Promises of APYs, bonuses, and returns in general that are considerably higher than going market rates should always raise suspicion.

**Urgency and pressure**

Scammers are keen to swindle you before you have time to realize what's gone on. This is why they so often try and pressure you to do things _now_, or by a certain point in time.

**Visual clues: bad design**

Scammers' sites and emails are rarely of a professional quality, and it's often quite easy to tell. Look out for low-res images, scruffy layouts, and misspellings. Sophisticated, well-built scam sites are possible though, so don't assume a site is legit just because it looks good.

And, of course, always remember: never give your Secret Recovery Phrase to anyone. See more basic safety and security tips [here](https://metamask.zendesk.com/hc/en-us/articles/360015489591).

## Summary

* Scammers can pose as crypto exchanges in a bid to get you to deposit funds.
* Usually they offer bonuses or high returns to entice you.
* It's possible that your portfolio will display correct values in the site's UI, in line with what you've actually deposited. This can be a front, with your funds having been gradually stolen all along.
* You'll usually be able to spot these sites before you deposit due to a few [giveaway features](#h%5F01GMQHM08Z0VB80J00QV6QJRY8).

If you have any questions about this subject, feel free to head to the [MetaMask Community](https://community.metamask.io/) or get in touch with Support via the 'Start a Conversation' button on the homepage of this site. #Fake 'mining' voucher scams#
> This article was adapted from a blog post available [here](https://consensys.net/blog/metamask/fake-mining-scams-a-familiar-foe-in-a-new-disguise/).

This is a type of scam that uses the promise of “mining” rewards to lure you into depositing tokens on the platform. At first, your balance on the platform appears to grow through these rewards. This is just a ruse: the balance these dapps display is false, and the scammers have been draining your wallet whilst deceiving you into believing that your balance was actually growing.

#### Contents:

* [How does the scam work?](#h%5F01GMDBVW03K4JQ6EJHNN6FMEN0)
* [How can I stay safe?](#h%5F01GMDBW3JE6SD4QEQJM6A938X2)
* [Summary](#h%5F01GMDBW7TYZYXPM8DMFQTDM3GM)

## 

## How do fake 'mining' scams work? 

The key step in executing this scam is for the malicious actor to obtain a token approval from you. This means you'll be signing a transaction that gives their smart contract (a program running on their dapp) permission to move your funds. Only then can they start to steal your funds as they intend. 

Approvals are per token — so if you approve a request relating to USDT, the dapp will have permission to move that token according to its programming. 

#### Token approvals

Understanding token approvals is important for staying safe in web3\. Read our explainer [here](https://support.metamask.io/hc/en-us/articles/6174898326683) for more information. It's also important to note that _connecting_ to a dapp is different to signing a token approval it suggests to you.

### Luring you in

Before a scammer can get you to sign a token approval on their dapp, they need to lure you to that site in the first place.

The method for sharing the link to the dapp itself (a website) can vary significantly. Maybe it's in a Telegram group; maybe on Twitter; maybe via Instagram. It could also be in your direct messages on any platform. Whichever method they choose is not the key detail here: instead, we need to focus on what it is they're offering.

To attract you to their site, scammers promise some combination of:

* Guaranteed returns on an investment
* Free money
* Extremely high APYs (yields) in return for deposits.

This is where — they hope — your eyes will light up. _Shut up and take my money_! etc.

### Getting your signature

No, they don't want your autograph. What they _do_ want is the signature generated by your private key, on an approval transaction.

This is where the 'voucher' comes into play. The idea is that you hand over XYZ amount of tokens to 'buy' a voucher that gains you access to the platform, and, from there, access to the ludicrous gains that they've promised you. The catch is that the transaction the dapp suggests — which they hope you will just interpret as the voucher purchase — is actually an unlimited token approval. This gives the dapp the ability to drain your wallet of as many tokens of that type as it wants, until there are none left. 

#### 'Unlimited token approval'? What?!

This is, unfortunately, a common way for bad actors to gain access to your funds and drain them from your wallet. See the relevant section [here](https://support.metamask.io/hc/en-us/articles/6174898326683) for more information.

### Draining your wallet

Once they have the unlimited token approval, the scammers have — on paper (figuratively speaking) — your permission to take as many of your tokens _of that type_ that they want. 

Often, though, they don't tend to do this straight away. The entire premise of the scam relies on the user being unaware of it taking place. To achieve this, the scammers will often slowly take funds from your wallet — using the approval you granted — whilst continuing to inflate the value of your deposit/holdings on their dapp, making you feel like you're actually gaining. 

By the time you notice, it's too late. 

## 

## How to stay safe

There's a few key behaviours you can adopt to prevent you falling victim to a scam like this:

* Always check what a dapp is actually requesting before clicking ‘approve’. In MetaMask, you can also adjust the amount that the dapp has access to. Even if you only provide access to 10% of your tokens, and the dapp turns out to be a scam, that’s still a considerably better outcome than if you’d granted unlimited access.
* DYOR. The best time to get in the habit of performing due diligence on any dapp before interacting with it was six months ago; the second best time is today. Look out for misspellings, low-quality images/logos, and other giveaways.
* Remember that if something seems too good to be true, it probably is. If you’re being offered 498,563% APY, you’re probably on thin ice.
* Get used to checking out any smart contract/dapp before you interact with it, potentially using our [guide](https://support.metamask.io/hc/en-us/articles/10143114273563) as a starting point.

Additionally, you might consider holding smaller sums in your software wallet (one that’s connected to the internet, such as MetaMask) whilst keeping the bulk of your tokens in a [hardware wallet](https://support.metamask.io/hc/en-us/articles/4408552261275). For example, some recommend the rule of thumb that you should only keep a value in your software wallet that you’d be happy to carry around in your physical wallet.

## Summary

* These scams work by luring you in with the promise of high rewards and tricking you into signing an unlimited token approval
* Clue up on token approvals and be wary of any app that asks for unlimited access
* If a money-making proposition seems to be good to be true, it probably is.

Remember: if you think you've identified a fraudulent address, you can [report it on Etherscan](https://support.metamask.io/hc/en-us/articles/4415323627803). 

If you have any questions about this subject, feel free to head to the [MetaMask Community](https://community.metamask.io/) or get in touch with Support via the 'Start a Conversation' button on the homepage of this site. #Honeypot scams#
> This article was adapted from a blog post available [here](https://consensys.net/blog/metamask/understanding-and-avoiding-crypto-honeypot-scams/).

Although they have a pleasant-sounding name, honeypot scams aim to steal funds by luring you into interacting with a fraudulently configured wallet. 

Their name references the fact that, at least from the outside, the wallet is highly appealing — just like a pot of honey left outdoors would attract insects and animals. 

### Contents:

* [How honeypot scams work](#h%5F01GMB85JBJTV7474H5H9S106MH)
* [How to spot honeypot scams](#h%5F01GMB8HKRWQRD00P8JW4NDQ02K)
* [Summary](#h%5F01GMB8TBW854KG4AGTQ9AYHRWC)

## So how do they work? 

### Step 1: First contact

Honeypot scams revolve around the principle of dangling the prospect of free money in front of you. They present you with a well-stocked wallet that you can access, hoping that you do indeed to try to access it and send funds out. 

To make sure that you _can_ actually access it, a **key element in the ploy is the scammer sharing the wallet's Secret Recovery Phrase (seed phrase)**. Usually, they get in touch to do so, posing as an innocent web3 citizen that needs help with their wallet. For example:

![Honeypot scam example](https://support.metamask.io/hc/article_attachments/13271285752603)

They do this in the hope that your thought process will be something like: _Hah, what a noob — I'll just go straight into their wallet and transfer that 6,000 USDT straight to my own wallet. Easy money!_ 

#### Never, ever share your Secret Recovery Phrase like this

The scammer above has deliberately shared their Secret Recovery Phrase to fool you. To be clear: you should **never** share yours.

### Step 2: You try to move the tokens to your own wallet

Possessing the private key to a wallet with $6,000 worth of tokens sitting in it is tantalizing. But wait: this is where things get a little more complex.

Usually, the value in a honeypot wallet will be tied up in tokens _other than_ the network's native token. This means that if you wanted to send them anywhere else, you'd need to somehow get a small amount of the network's native token into the wallet to pay the gas fees for the transfer. In the above screenshot, the scammer "Candi" lets us know the network, telling us that the USDT is a "trx20" token. (_TRX_ suggests the Tron network; but even if it were on there, it would actually be a TRC20 token; anyway, let's not get distracted.)

So let's say you load up Candi's wallet on a new browser instance or similar, with the intention of transferring the 6,000 USDT out. You send a little TRX to fund the transaction, and... it's gone. 

What happened?

### Step 3: A script steals the tokens you intended to use for gas

This is where the scammer makes their money. The funds they leave in the wallet as bait are never touched, because no one can ever transfer them out. **The tokens you send to the address to use for gas fees are automatically sent elsewhere by a sweeper script** (a.k.a. sweeper bot) before you can send a transaction yourself. 

If you were to load up the block explorer page for an address that was serving as a honeypot, it would look something like this:

![Honeypot scam example](https://support.metamask.io/hc/article_attachments/13271297172379)

Notice how there are lots of transactions happening within very short, distinct windows: BNB, a native token used to pay for gas, is being transferred out almost as soon as it is being added. 

This is because the script is 'listening' for transfers into the wallet address, and reacting to them virtually immediately by submitting a transaction to _sweep_ them out. 

## How can I spot honeypot scams?

Here are a few things to look out for:

* **Anyone sharing a seed phrase/Secret Recovery Phrase**. This should be an immediate red flag, since anyone using a self-custodial wallet in good faith would never share theirs. (Other than edge cases, such as developers wanting to access the same test wallet.)
* **A transaction history that suggests any transfers _in_ are immediately transferred _out_** (or, at least, shortly after). Honeypot scams need a script that will sweep funds out to a third wallet. Look up the wallet on a block explorer and check for these patterns.
* **People sending you direct messages on social platforms**. Scammers rely on social media platforms for direct access to you, the user. Be wary of anyone who contacts you regarding crypto/web3 on these platforms — there is a chance that they're out to harm you. Also look out for bots set up to share these messages, identifiable by the fact they share the same tweet/message repeatedly.

## Summary 

Honeypot scams work by:

1. 1. Sending you the Secret Recovery Phrase/seed phrase to a wallet, claiming to be seeking help  
   2. Hoping that you see the valuable funds in the wallet, and want to transfer them out or swap them  
   3. Expecting you to send some of the network's native token to the wallet to pay gas fees for the transactions in step 2  
   4. Stealing the tokens you send using a sweeper script, which _sweeps_ them into a third wallet of the scammer's choosing before you can send your own transaction.

Remember: if you think you've identified a fraudulent address, you can [report it on Etherscan](https://support.metamask.io/hc/en-us/articles/4415323627803). 

If you have any questions about this subject, feel free to head to the [MetaMask Community](https://community.metamask.io/) or get in touch with Support via the 'Start a Conversation' button on the homepage of this site. #Why can't I replace a pending transaction? #
#### Looking for how to resolve pending transactions?

Pending transactions that are displaying as such on the blockchain (make sure to [check a block explorer](https://support.metamask.io/hc/en-us/articles/360057536611)) can be replaced by sending another transaction with the same nonce, using the method [here](https://support.metamask.io/hc/en-us/articles/360015489251). This article should be your first destination if you're looking for how to replace a pending transaction.

One of the most common reasons your replacement pending transaction will fail is because you **already have multiple pending transactions**. 

In these cases, you need to **replace the oldest transaction first, and proceed through them in reverse order** (from oldest to newest). 

Age is determined by the transaction's nonce, a unique number (_number used only once_) that is assigned to every transaction sent from your wallet. Nonces are assigned in ascending order — so the smallest pending transaction nonce you can find is the oldest. 

#### How do I find pending transactions?

If a transaction is pending, it will be marked as such in your MetaMask transaction history. You can also inspect your history on a [block explorer](https://support.metamask.io/hc/en-us/articles/360057536611).

If you try to replace a pending transaction before resolving older outstanding pending transactions first, your new transactions will continually fail. This is because you need to resolve the oldest first. #Error: "EXPIRY_PASSED" after a swap#
If you try to swap using MetaMask Swaps and your swap fails, you could see this error message on the block explorer:

![EXPIRY_PASSED.png](https://support.metamask.io/hc/article_attachments/11992991758235)

This happens either when:

* You waited too long in MetaMask to perform the swap, or;
* You submitted the swap right as the quotes were about to refresh.

Retry the attempted swap as normal, and you should no longer encounter the same error. If you do, [get in touch with Support](https://support.metamask.io/hc/en-us/articles/360058969391). #Why did my NFT-related transaction fail?#
NFTs are moved between different addresses in a similar way to other cryptoassets like ERC-20 tokens. This means they could be subject to the same reasons that regular transactions fail. To start with, see our article [here](https://support.metamask.io/hc/en-us/articles/4410741657499) for more information on failed transactions generally. 

Although you'll be able to see a transaction's 'Failed' status in MetaMask, you can get more detail about the specific reason by heading to [Etherscan](https://etherscan.io/) (or the block explorer for the network you're using).

There are several error messages you could see on your transaction on the block explorer:

* **Reverted**: This error is thrown when transactions are not completed and the network essentially reverts to a state that reflects how things would be if you hadn't ever submitted it. This is relatively common on NFT marketplaces — such as OpenSea — as it occurs if someone completes an NFT purchase ahead of you. If this happens, check on the marketplace (or look up the NFT on a block explorer using its address) to see if it has already been transferred to a different wallet address.
* **Out of gas**: This means your transaction's gas limit was exceeded before the transaction could be completed. A regular transaction needs a minimum of 21,000 gas units; NFT-related transactions such as purchases can be more complex, and require higher gas limits. If you receive this error, you need to try the transaction again but adjust your gas limit in MetaMask. See our article on this error message [here](https://support.metamask.io/hc/en-us/articles/360038849792).
* **Dropped and replaced**: This message refers to a situation where one transaction is, for various possible reasons, disregarded by the network in favour of another. Transactions can be dropped from the mempool (where they are held before being added to a block) by Ethereum nodes, potentially due to offering lower gas fees than other broadcast transactions or just timing out. See a full explanation in this [Etherscan article](https://info.etherscan.com/transaction-dropped-replaced/). It can also occur if you deliberately attempt to replace a transaction, such as if it's [stuck or pending](https://support.metamask.io/hc/en-us/articles/360015489251).
* **Pending or 'stuck'**: When the total gas fee is too low to incentivize validators to pick it up and add it to a block (usually because the priority fee wasn't high enough), you'll get this error message. You can try to 'unstick' your transaction using the methods outlined [here](https://support.metamask.io/hc/en-us/articles/360015489251).

If you're still unable to resolve your issue within NFT transaction, get in touch with Support using the 'Start a Conversation' button on the homepage of this site.#I can't import a token into my portfolio. Why? #
Viewing all the tokens in your portfolio should be straightforward since a majority of popular tokens will be detected automatically. See how to import (add) tokens [here](https://support.metamask.io/hc/en-us/articles/8324697607835). 

If you're wondering why you're seeing different tokens listed in MetaMask and the Portfolio Dapp, see [here](https://support.metamask.io/hc/en-us/articles/10554670875291). 

If you can't add a token, it will be because:

1. Each supported network in the Portfolio Dapp has its own token list. If you own a token on these lists, you'll be able to add it. If the token isn't on this list, it won't be available.
2. The token may be supported in the Portfolio Dapp, but not on the network that you're trying to add it on.
3. MetaMask and the Portfolio Dapp work differently. In MetaMask, you can import any token by inputting details manually, so long as they adhere to key token standards like ERC-20\. In the Portfolio Dapp, you can only add the tokens from our list.

If you're attempting to add a token and none of these circumstances apply to you, get in touch with Support by hitting the 'Contact' button in the bottom left of the Portfolio Dapp. #Portfolio is not showing the same tokens as my MetaMask wallet#
MetaMask and the Portfolio Dapp are separate software and do not communicate directly with each other on the backend. 

Here's some points to keep in mind:

* [Adding a token to MetaMask](https://support.metamask.io/hc/en-us/articles/360015489031) does not mean that it is automatically displayed in the Portfolio Dapp, and vice versa.
* If a token isn't appearing in your portfolio, it may be because it is not on a supported network, or isn't a supported token on one of those networks. (Currently supported networks include Ethereum mainnet, Polygon, BNB Smart Chain, Avalanche, Optimism, Arbitrum, and Fantom.) See [here](https://support.metamask.io/hc/en-us/articles/10587744991131) for further information about adding tokens.
* If you see a token in MetaMask but not in the Portfolio Dapp, try adding it using our instructions [here](https://support.metamask.io/hc/en-us/articles/8324697607835).
* If you see a token in the Portfolio Dapp but not in MetaMask, add it using [one of these methods](https://support.metamask.io/hc/en-us/articles/360015489031).#How to move your tokens from a centralized exchange (CEX) to MetaMask#
Centralized exchanges (often shortened to CEXs) can be a convenient place to buy cryptocurrencies and tokens. However, once you purchase your assets, they are often held in a custodial wallet on the exchange. This means that the exchange itself holds the private key for that wallet address, and therefore has ultimate control over those assets.

If you want to participate more actively in web3, or just want to move your funds for security or peace of mind, you'll need to move the funds off the exchange. A [self-custodial wallet](https://support.metamask.io/hc/en-us/articles/360059952212) like MetaMask can be more suitable for these purposes, since you need a self-custodial wallet to manage your digital identity properly. Self-custody means you hold the wallet's private key, and that you are solely responsible for controlling the assets in your wallet. 

To move your funds from a CEX to MetaMask, follow these steps:

![CEX_to_MM_v2.png](https://support.metamask.io/hc/article_attachments/10471638105499)

#### A note on wallets

For simplicity, we normally refer to crypto wallets 'holding' assets. This isn't strictly true: the blockchain is the place which records changes to wallet balances. All your wallet is for is verifying that you are the owner of the address, and that you have the authority to move those funds around. So when we say there are funds _in_ your wallet, what we mean to say is that your wallet address has some attributable to it, as recorded by on-chain transactions.

### Here's some other useful resources:

* [MetaMask is a self-custodial wallet](https://support.metamask.io/hc/en-us/articles/360059952212)
* [What’s In A Self-Custody (Non-Custodial) Wallet, Anyway?](https://consensys.net/blog/metamask/whats-in-a-self-custody-non-custodial-wallet-anyway/) (blog)#How to use MetaMask Bridges#
#### Want to bridge to a network you've never used before? Read this first!

Before you move your funds onto another network, remember that you'll need **native tokens** on that network in order to use them further. As we don't currently support bridging BNB, this means you'll need to get these into your wallet on this network either through an on-ramp (buying with conventional currency, and having the tokens deposited into your wallet), having tokens sent to your wallet, or buying from an exchange that supports the network and transferring them.

#### Contents: 

* [What is a bridge?](#h%5F01GGSRENNBAPG0GRC02PADY8MC)
* [Where can I find MetaMask Bridges?](#h%5F01GGSREV2RPPVYTKXJY5S4ZGBC)
* [How does it work? ](#h%5F01GGSQCS0PPG6YDH964VC6ZJNR)
* [What are the benefits?](#h%5F01GGSRF4NYJTP6R01WGJBEWQE3)
* [FAQs](#h%5F01GGSRF9FCZR53YCNSME5TMMY2)

MetaMask Bridges does exactly what it says on the tin: it pulls together bridging quotes for you to choose from. From here, you can pick the quote that's best for you and move your tokens to the network you need.

Think of it as an aggregator of aggregators, or meta-aggregator. It’s analogous to visiting travel sites that find you the cheapest flight from numerous airlines, or — slightly closer to home — using MetaMask Swaps to find you the cheapest token swap quote from decentralized exchanges.

## What is a bridge?

A bridge allows you to transfer your tokens between different blockchain networks. For example, perhaps you want to use a dapp or a game on the Polygon network, but most of your funds are on Ethereum mainnet. You can use a bridge to transfer some ETH, USDC, or other tokens from Ethereum to Polygon — retaining their value — and start to use them with dapps on Polygon.

### To dive a bit deeper:

At their most basic level, bridges are platforms with contracts on the chains you're transferring to and from. Though the exact system varies, each bridge has a mechanism to validate your deposit on one network and issue equivalent tokens on another network.

When you request to move Ethereum from Mainnet to Polygon, for example, the first thing the bridge will need to do is have you deposit the ETH to the bridge. The bridge will prompt you to sign a transaction to send the tokens to their address (for tokens other than ETH, this assumes you've already signed an approval granting it access to your tokens).

![BridgeV1.png](https://support.metamask.io/hc/article_attachments/10407380366363)

The deposit may be validated in a few different ways depending on the bridge, but this process essentially buys you the right to have your target address credited with the agreed amount of tokens (that is: the token you're bridging to). The bridge honors this request by minting or sending the tokens to the account you specified on the destination network.

## Where can I find it?

You can find MetaMask Bridges within the Portfolio Dapp, available at [portfolio.metamask.io](https://portfolio.metamask.io/).

![MetaMask Portfolio Dapp Bridge](https://support.metamask.io/hc/article_attachments/12706140781211)

## How does it work?

MetaMask Bridges takes the data you input and runs it through existing bridge aggregators. For every transaction, you’ll need a:

* Source network
* Destination network
* Token type and quantity.

Once we're finished trawling the aggregators, you’ll be presented with a recommended quote, as determined by our algorithm. If you want to choose an alternative route, you’ll be able to view and select other quotes too.

Additionally, although we request your bridge transfer through an aggregator, we’re also only using the aggregators to access a select list of bridges which meet our requirements for trust minimization.

Here’s our **step-by-step guide**:

1. Make sure your wallet is connected and that you’ve selected the account that has the tokens you want to bridge.
2. Select the network from which you want to move tokens under the ‘From this network’ field.
3. Input the details of the token you want to bridge under ‘You send’. The drop-down list in this field is divided into tokens that are ‘Able to bridge’ and those that you’re ‘Unable to bridge’. The category each token belongs to depends on:  
   * Whether we currently support that token  
   * Whether you hold that token in your wallet.
4. Pick the network to which you want to bridge the tokens under ‘To this network’.

![MetaMask Portfolio Dapp Bridge UI](https://support.metamask.io/hc/article_attachments/13140997494299)

1. When you input a token and an amount to send, the aggregator will start to find quotes. Once it’s done, you’ll be able to see how much of the token you’ll receive on the destination network, and your quote listed under ‘Recommended Bridge’ below.
2. Assess the quote by clicking the drop-down arrow in the top right of the quote. Here you can see estimated timings and fees. The quote will refresh every minute to make sure you’re getting up-to-date information.
3. If you want to view other quotes, hit ‘Choose a different quote’ in the top-right of the quote field. Click on one to select it.
4. When you’re happy with the chosen quote, click the ‘Select’ button. This will call up a window which asks you to sign a message using your wallet. Follow the prompt and MetaMask will open to allow you to do so, and then proceed through to initiate the bridge.

![MetaMask Portfolio Dapp Bridge UI](https://support.metamask.io/hc/article_attachments/12706619126811)

## What are the benefits?

We’re continually working to make MetaMask a flexible, empowering passport to access all that web3 has to offer. Efficiently bridging tokens with as little risk as possible is a key pillar of your independence and agency on the decentralized web, where you should have full control of how and where you manage your digital assets and identity. This is why MetaMask, in contrast to the ‘walled gardens’ of web2, will always be free, and why we cannot and will not try and stop you or penalize you if you’d prefer to conduct your activities elsewhere.

A similar logic applies to moving assets between blockchains. Enter bridging, and one of the reasons we want to provide the most seamless, accessible bridging platform we can for MetaMask users.

Here’s why we think you’ll like it:

* We do the legwork: No more trawling the web to find the cheapest aggregator that also supports the tokens and networks you want.
* Safety: Only bridge using platforms which have passed our vetting process, ensuring we’re only presenting you with the most secure platforms we can find.
* Transparency: We will always make you aware of the risks of every transaction and provide you with our best estimates of expected duration and price.
* Reliability: If you can see an option in the aggregator for a certain path or token, you will be able to use it, and with a high expectation of success. We’ll never pursue choice–unsustainably adding more networks and tokens–at the cost of reliability and quality.

## FAQs

**What networks are supported?**

You can bridge between:

* Ethereum mainnet
* Polygon
* BNB Smart Chain
* Avalanche
* Arbitrum
* Optimism.

**What tokens are supported?**

Native tokens, USDC, USDT, and DAI on all networks.

**Does MetaMask take custody of my funds at any point?**

No, we work with third parties to bridge your tokens between networks.

**Do you make money from this?**

Yes. Just like MetaMask Swaps, **we apply a 0.875% fee on each transaction**. This is calculated based on the total value of the transaction, before fees are subtracted.

So if you want to bridge 1,000 USDT, for example, the MetaMask fee would be 8.75 USDT, and then other fees and costs will be subtracted from the remaining 991.25 USDT. 

This means that when you use MetaMask Bridges, you pay:

* The MetaMask fee
* Gas fees on the source network
* The difference in the value of the token you send vs. the value of tokens you receive on the destination network. This includes any fees charged by the bridge providers, as well as gas fees on the destination network).

**I haven't received my tokens in the time I should have. What should I do?**

The time we quote is an estimate, and delays can happen for several reasons, such as a change in network conditions. In the majority of cases, the bridge transfer is just delayed and your transfer will still go through automatically.

If you’ve already waited over three hours and your transfer is still in progress, please get in touch with MetaMask Support by clicking the ‘Contact’ button in the bottom left of the dapp. If we’re unable to troubleshoot the problem, we will then recommend that you get in touch with the bridge’s support to look into getting your transaction unstuck.

**What aggregators and bridges do you use?**

As we described above, our platform sources bridging options through two stages:

* Aggregators, through which we access a selection of;
* Bridge providers, the platforms that actually execute the bridge.

The aggregators we use are LI.FI and Socket. The bridge providers we access through these aggregators are:

* Hop
* Connext
* Celer cBridge
* Polygon PoS Bridge

**What is the maximum transaction size?**

The maximum value you can bridge at a time is $50,000.

**Something went wrong with my transfer. What do I do?**

Don't panic! Just get in touch with Support via the 'Contact' button on the Portfolio Dapp.#Funds sent on wrong network#
If you're moving tokens around from one network to another, it's best to be careful about what you're doing, and always [use a safe bridge.](https://support.metamask.io/hc/en-us/articles/4836913606683-Field-Guide-to-Bridges)

However, accidents happen, so if you think you sent tokens on the wrong network, here are some steps you can take.

### EVM-compatible tokens and networks

One of the cool things about your Secret Recovery Phrase is that it can be used on multiple networks, with the same address, provided the network is _EVM compatible —_ in other words, uses the same technical configuration as Ethereum. Many popular networks are EVM compatible, such as Polygon, Arbitrum, Optimism, and Avalanche. Some notable networks that are _not_ EVM compatible (or are working on becoming EVM compatible) include Klaytn, Algorand, and StarkNet.

So let's say you meant to send some tokens to a friend on Ethereum, but you sent them on Polygon instead. Good news — all your friend needs to do is switch networks to Polygon, and the tokens you sent should be there. They could then bridge them to Ethereum, and use them as they originally intended. In this scenario, the tokens aren't lost.

### Non-EVM tokens and networks

**If you tried sending tokens directly from your MetaMask wallet to a non-EVM network, and the transaction went through, it's entirely possible that your tokens are gone forever.**

**If you're dealing with tokens sent between Binance entities, [check our Binance series here](https://support.metamask.io/hc/en-us/articles/4412308177691-Understanding-BSC-Binance-and-MetaMask).**

Let's say that Address A, created on Ethereum, sends 0.5 ETH through MetaMask on the Ethereum network to Address B, which was created on Algorand.

Both of these addresses are derived mathematically from a series of words; we call it a Secret Recovery Phrase, Algorand calls it a Mnemonic Phrase, but it's the same type of technology: a series of words that represent a very long number, which, when passed through certain processes, will always produce the same public addresses used to send and receive tokens. So we've got two Secret Recovery Phrases here: A, from Ethereum, and B, from Algorand.

The problem is that you sent the tokens on the Ethereum network, and they went to the address that you specified—_on the Ethereum network—_and the mnemonic phrase you have for your Algorand wallet will not work on Ethereum. Or, rather, it won't create the same addresses on Ethereum that it did on Algorand. So if you grab your Algorand mnemonic, [open up MetaMask in a fresh browser profile and import it](https://consensys.net/blog/metamask/how-to-manage-multiple-wallets-with-metamask/), unfortunately, if it even works, you will see different addresses.

![Different_address_from_same_SRP.png](https://support.metamask.io/hc/article_attachments/9507520750875)

_A seed phrase is linked to a specific network; it will not restore the same address on another network._

Maybe you sent your tokens, accidentally, to someone else's wallet, who owns that address on Ethereum. Much more likely, however, you have sent those tokens to an address that will never be claimed by anyone; the number of potential SRPs and addresses on Ethereum is mind-numbingly large, and the odds are very much against this ever happening.

![Same_address_for_different_network.png](https://support.metamask.io/hc/article_attachments/9508559941659)

_You cannot send tokens directly between networks. If you do, chances are you've deposited them in a stranger's wallet, or a wallet address that will never be claimed._

### Smart Contracts

Smart contracts are, generally speaking, not good things to send tokens to. They have addresses, but unless you _absolutely know what you are doing_, you should interact with a smart contract through a UI, not by simply sending funds directly to it. Remember: a smart contract is a computer program that runs on the blockchain, and many of them are not set up to be actively accessed and used to send or receive tokens. That said, **if you did accidentally send tokens to a smart contract, don't despair**\--reach out for help to the community related to the smart contract in question. [One of the greatest stories ever told in Ethereum](https://www.paradigm.xyz/2020/08/ethereum-is-a-dark-forest) is about getting tokens out of a smart contract.#How do I send ETH/other tokens to a layer 2 or other network? #
#### MetaMask Bridges

You can now bridge tokens between several popular networks using MetaMask Bridges, directly within the Portfolio Dapp. Check it out here: [portfolio.metamask.io/bridge](https://portfolio.metamask.io/bridge)

The multi-chain future is now, and traversing web3 does not mean you'll be spending all your time on one chain, such as Ethereum Mainnet. Instead, you'll most likely want to move your tokens around between networks (different blockchains) to make use of specific dapps, or to take advantage of cheaper network costs (gas fees). 

However, moving assets between chains is not as simple as just switching networks in MetaMask, or sending them to a specific address. Instead, you need to **bridge** assets between networks.

### If you want to read more about how to bridge, [see here](https://support.metamask.io/hc/en-us/articles/4836913606683). 

Here's a few fundamental truths to keep in mind:

* Unless you bridge, **the tokens you send in any transaction are going to stay on the network you sent them on.** So if you send some ETH on Ethereum Mainnet, that ETH is going to stay on Mainnet.
* **You can use the same account address across multiple networks, but sending to this address does not mean tokens are bridged to any other network**. They will stay on the network from which they originate. Your MetaMask address, for example, [can be used across different EVM-compatible chains](https://support.metamask.io/hc/en-us/articles/4404424659995) (networks compatible with Ethereum), but sending tokens on different chains to this address _does not_ bridge them.
* **It is possible to irreversibly lose assets by sending them to the wrong address**. This is particularly relevant when buying on exchanges. For example, you could purchase some MATIC (the native token of Polygon) on a centralized exchange, and receive the ERC-20 version. This means it's a mirrored version of MATIC, produced specifically for use on Ethereum and compatible networks. Although its value is equivalent on paper, _this is not the same token_ as Polygon-native MATIC. If you wanted to get your ERC-20 MATIC onto Polygon itself, you'd need to bridge.

#### See also: 

* Our [**network profiles**](https://support.metamask.io/hc/en-us/sections/4442278744475-Network-Profiles), which provide bridging advice and other guidance on specific networks
* [User Guide: Custom Networks and Sidechains](https://support.metamask.io/hc/en-us/articles/4404424659995)
* [How to use MetaMask Bridges](https://support.metamask.io/hc/en-us/articles/10055915089819)
* [Field Guide to Bridges](https://support.metamask.io/hc/en-us/articles/4836913606683)#There is an unauthorized transaction on my account#
If you see a transaction on your account that you do not recognize at first, one of these situations will apply to you:

## The transaction _did_ originate from you

It's entirely possible that you don't recognize a transaction because you forgot you made it, or because it's part of a more complex string of transactions executed whilst you were interacting with a dapp. Using a [block explorer](https://support.metamask.io/hc/en-us/articles/360057536611), check whether you recognize the following traits of the transaction:

* Date and time
* Recipient address
* The dapp involved (which is listed alongside each transaction under 'Activity')
* The value sent.

## The transaction is unauthorized

If you're sure the transaction is not yours, check out our article _[I've been hacked/scammed](https://support.metamask.io/hc/en-us/articles/360052511372)_ to see our recommended next steps. #ETH or other tokens not appearing in recipient's wallet#
If you've [sent tokens from your MetaMask wallet](https://support.metamask.io/hc/en-us/articles/360015488931) but they're not appearing in the wallet of the recipient, follow these steps:

1. **Check that the transaction was successful.** Head to the [block explorer](https://support.metamask.io/hc/en-us/articles/360057536611) of the network you were on. From here, you can either get the [transaction hash](https://support.metamask.io/hc/en-us/articles/4413442094235) from MetaMask and paste it in the search bar, or just paste your wallet address and find the transaction manually under your recent activity. If the transaction was successful, you'll see something like this when you're on the transaction page in the block explorer:  
![Check_successful_transaction_MetaMask.png](https://support.metamask.io/hc/article_attachments/10057511071771)  
If the transaction was unsuccessful, the tokens will not show up in the destination wallet, and you'll need to try sending them again. Remember that blockchain transactions are not immediate, so your transaction may take a little while to be confirmed.  
**If the transaction is successful, proceed to the next step.**
2. **Check that you sent the transaction to the correct address.** There are two potential reasons why your tokens may not be appearing where you expect them to:  
   * **You sent to a contract address**. Smart contracts on Ethereum and EVM-compatible networks have their own addresses, and they are easily mistakeable for regular wallet addresses.  
   * **You pasted in the wrong address**. This is a simple but easy mistake to make. Double-check the transaction on the explorer: did you paste the intended address?
3. **Has the recipient configured their wallet to display the token?** Whilst it's highly unlikely that ETH will not show up by default, some wallets—MetaMask amongst them—often need tokens to be added manually in order for them to display in your balance, especially if the token is new or uncommon. Check that this applies to the wallet in question.

## How can I get my ETH/tokens back if I sent them to the wrong address?

Blockchains are immutable, and designed specifically to be an unalterable record of activity. This means that confirmed transactions are _forever_ confirmed — they cannot be reversed.

Unfortunately, if you transferred to the wrong address and you can verify on the block explorer that the transaction was successful, you're unlikely ever to see those tokens again. 

The only possible route for retrieval is to contact the owner of the address and try and arrange for the tokens to be sent back. However, as addresses are anonymous by nature, it is likely to be difficult to impossible to identify wallet owners. #Getting started with the Portfolio Dapp#
## What is the Portfolio Dapp?

The Portfolio Dapp enables you to view all your MetaMask accounts and their assets in one place. It aggregates values from across your accounts and shows your total holdings, making it easier than ever to get an at-a-glance summary of their value in your chosen currency. 

You can access it here: [portfolio.metamask.io](https://portfolio.metamask.io/). On Extension, you can also follow a link called 'Portfolio site' immediately above your assets. 

![MetaMask Extension Portfolio link](https://support.metamask.io/hc/article_attachments/11993098710939)

#### How do I access the dapp on Mobile?

First you'll need to head to the [browser within the MetaMask app](https://support.metamask.io/hc/en-us/articles/6356387482523), then head to portfolio.metamask.io from there. If you don't use the built-in browser, you won't be able to connect your wallet.

As MetaMask is designed to function as your passport to the decentralized web—which, of course, is now multi-chain—your portfolio can also show assets held on different networks compatible with Ethereum. Currently, this includes:

* Ethereum mainnet
* Avalanche (C-Chain)
* Polygon
* BNB Smart Chain (formerly BSC)
* Fantom
* Arbitrum
* Optimism

We aim to expand network coverage as soon as we’re able to. 

## How do I get set up?

1. The first thing you’ll need to do is connect your MetaMask wallet. This is as simple as hitting the prompt in the center of the screen; if you want more information, see our [guide](https://support.metamask.io/hc/articles/8324584621083).
2. Once connected, you can start exploring your portfolio:
* Learn how to switch networks
* Explore details about the assets your hold
* View your NFTs
* Find and [watch additional tokens](https://support.metamask.io/hc/articles/8324356266907)
* [Add any additional MetaMask accounts](https://support.metamask.io/hc/articles/8324584621083) you have.

## FAQs

**Can I add accounts from wallets other than MetaMask?**

At the moment, no. The dapp will only accommodate accounts created in MetaMask, although adding accounts that don’t originate from MetaMask is part of our roadmap. 

However, you can get around this by [watching the account](https://support.metamask.io/hc/articles/8324454669339). This enables you to essentially add any Ethereum address to your portfolio.

**Can I add accounts from two different MetaMask wallets (i.e. two Secret Recovery Phrases)?**

No. You can only use one MetaMask wallet (i.e. one Secret Recovery Phrase) at a time, accessing the accounts associated with that Secret Recovery Phrase.

The wallet (and associated accounts) accessible in the dapp will be the wallet you’re logged into in your current instance of MetaMask.

**What networks are supported?**

We support Ethereum mainnet, Avalanche, Polygon and BNB Smart Chain.

**Will the Portfolio show imported wallets and hardware wallets from my MetaMask?**

Yes. Any imported wallets and hardware wallets which are currently present in your instance of MetaMask (i.e. the browser you're using) will be displayed, should you wish them to be.

**What’s the relationship between the Portfolio Dapp and MetaMask?**

MetaMask is a crypto wallet that allows you to take control of your identity on web3 and access decentralized applications (dapps) such as this platform.

The Portfolio Dapp, as its name suggests, is a _**d**ecentralized **app**lication_ that you sign into using MetaMask, and, in doing so, allow the dapp to access and display your account details and balances.

Portfolio is developed by teams closely affiliated with MetaMask, and is directly accessible from your MetaMask wallet.

**Can I use Portfolio on MetaMask Mobile as well as MetaMask Extension?**

Yes! You can use the dapp on both platforms.

However, to sign into the dapp on MetaMask Mobile, please use the in-app browser.#How to avoid NFT scams#
There has been enormous growth in the NFT space in the last few years across areas as varied as art, sports, gaming, or real estate. Amongst these use cases, NFT art collecting has particularly flourished. According to data from @rchen8 at[ Dune Analytics](https://dune.com/rchen8/opensea), the leading NFT marketplace OpenSea surpassed 1.8M users in June 2022\. However, like any other sector with an open marketplace and high levels of activity, scams have also become more common.

Whether you’ve been involved with crypto and NFTs for several years or are just starting, it’s always good practice to continuously study [safety and security](https://support.metamask.io/hc/en-us/articles/360015489591). New scams arise regularly, so staying aware will help you sharpen your defenses.

**Discord**, **Twitter**, and **Telegram** are some of the main platforms NFT projects build out their communities and share information on mints, events, marketplace activity, and more. Scammers have noticed this and are always seeking new ways to exploit community members for their holdings. Discords, for example, are hardly a secure, scam-free environment: [41 NFT Discords were compromised within the first 10 days of June 2022 alone](https://twitter.com/NFTherder/status/1538228794024251395?s=20&t=UFMAMsGLyXO4y0D-3u0GAw). 

Here are some ways you can stay ahead of common scams on these platforms:

* **Be cautious of any announcements offering a stealth or surprise mint, even when it comes from an official Discord account**. An example of this is the exploit of the Bored Ape Yacht Club Discord server where [hackers took over a community manager's account](https://mashable.com/article/bored-ape-yacht-club-hacked-again) and announced a surprise giveaway, posting a link to a malicious phishing site. Members who followed the link and took part in the airdrop soon realized they had fallen victim to a scam and their NFTs were stolen.
* **When you're clicking on announcement links or public messages, confirm they are legit**; this includes NFT mint announcements, airdrops, QR codes, or DMs (even from a name you may recognize). Do your research and verify all links, information, and announcements with a thorough investigation. Phishers, imposters, plagiarists, scammers, and hackers all exist on these platforms, so stay vigilant. Scammers rely on the fear of missing out (FOMO) mentality and employ a common strategy of urgent, time-limited messages with links to be clicked.
* **Be wary of direct messages (DMs) on any social platform.** Scammers will often DM users trying to lure them into clicking a phishing link for a fake mint, giveaway, airdrop, or purported alpha or insider information. They may even imitate the names and profile pictures of support staff associated with the project. Bad actors have been known to send malicious downloadable content via DMs that will compromise a device. We recommend you **do not interact with these messages or click on any links or files provided**. A community manager or member of a team should never DM you with private information or reach out to you offering support non-publicly. A popular security practice in web3 Discords is to close your DMs so that scammers are unable to approach you discreetly.

It’s easy to let your guard down when you’ve become comfortable in a fun space, but with so much activity on these platforms, staying aware and informed is pivotal. 

Below are some links to other content for further reading. Although it may not relate directly to NFTs, many of the principles of web3 safety are universally applicable, and it can never hurt to educate yourself:

* [Basic Safety and Security Tips for MetaMask](https://support.metamask.io/hc/en-us/articles/360015489591)
* [What is a 'Secret Recovery Phrase' and how to keep your crypto wallet secure](https://support.metamask.io/hc/en-us/articles/360060826432)
* [Common scams and how to avoid them](https://support.metamask.io/hc/en-us/articles/4412217080091)
* [Scammers and Phishers: Rugpulls and airdrop scams](https://support.metamask.io/hc/en-us/articles/4407169552667)#How to customize a transaction nonce#
## What is a nonce?

The term 'nonce' is a [portmanteau](https://en.wikipedia.org/wiki/Portmanteau) of '**n**umber used **on**ly on**ce**': every single transaction you _send_ from your MetaMask wallet has one, and the number (starting with 0 for the first transaction you send) increases in increments of 1.

Each transaction's nonce acts as an identifier that ensures your transactions are processed by the network in the correct order, preventing ['double spend' scenarios](https://support.mycrypto.com/general-knowledge/ethereum-blockchain/what-is-nonce/).

In MetaMask, adjusting the nonce can be useful if you need to [speed up or cancel pending transactions](https://support.metamask.io/hc/en-us/articles/360015489251).

## How do I customize the nonce when sending a transaction? 

Extension Mobile 

Customizing the nonce isn't possible unless you first toggle this option on. To do so, head to settings by clicking the identicon in the top left of your wallet, and then going to the 'Advanced' settings:

![MetaMask advanced settings Transaction nonce](https://support.metamask.io/hc/article_attachments/13074302592539)

Start to [send a transaction](https://support.metamask.io/hc/en-us/articles/360015488931) from your wallet. Enter the address you want to send to and the value, and click 'Next'. Before you confirm the transaction, you'll see a breakdown of the gas fees and other details that looks like this:

![MetaMask Transaction nonce](https://support.metamask.io/hc/article_attachments/13074298930843)

Click the 'Custom nonce' field to enter the number you need, and, when you're ready to submit the transaction, 'Confirm'. 

Customizing the nonce isn't possible unless you first toggle this option on. To do so, head to settings by clicking the hamburger icon in the top left of your wallet, and then going to the 'Advanced' settings:

![MetaMask advanced settings transaction nonce mobile](https://support.metamask.io/hc/article_attachments/13074302596251)

Start to [send a transaction](https://support.metamask.io/hc/en-us/articles/360015488931), and input the recipient's address and the value you want to send. Now tap 'Next', and you'll be taken to a screen which looks like this:

![MetaMask Transaction nonce mobile](https://support.metamask.io/hc/article_attachments/13074302938651)

When you tap the highlighted 'Edit' text next to the nonce field, you'll be able to customize it using the plus and minus buttons:

![MetaMask Transaction nonce mobile](https://support.metamask.io/hc/article_attachments/13074411572763)

Press 'Save' to confirm your choice.#What is MetaMask Flask, and how is it different from normal MetaMask?#
#### 

![mceclip1.png](https://support.metamask.io/hc/article_attachments/6974707389467/mceclip1.png)

#### What is MetaMask Flask?

MetaMask Flask is a distribution of the software designed for developers. It's like a laboratory (hence the name) where the MetaMask team can try out new ideas and features. It has experimental, even dangerous functionality in it that is not meant for everyday use. It also doesn't have the same stability guarantees that the production distribution of MetaMask has.

#### Why was it made?

Most of us think of MetaMask as the fox-themed software that lets us access all the cool stuff happening in Web3\. One of the reasons that MetaMask works as well as it does for users is that first, it works well for _developers_. It's easy to integrate MetaMask into your dapp or blockchain-enabled website.  
  
MetaMask has always had this focus on developer experience, and the community has responded in kind. In fact, there are so many suggestions and requests for features that the development team can't keep up with vetting them all, and deciding between the competing options. At the same time that the product gained popularity with developers, it was exploding with end users, and was maturing overall. As more value came into the crypto ecosystem, it became more and more important to have a secure, stable production version of MetaMask, and so the decision was made to make a separate, "test environment" version of the application: and Flask was born.

#### What can you do with it?

The first big feature shipped through Flask has been MetaMask Snaps. Snaps is a whole topic in and of itself, but think of it like this: Snaps allows developers to bring any kind of functionality they want to the application. Given how broad that is, and the potential security implications, snaps can only be used in Flask at the moment; however, the plan is to allow users to customize their MetaMask experience through this functionality.

#### How do I get involved?

If you've got the technical understanding, check out [the Snaps documentation here](https://docs.metamask.io/guide/snaps.html), and you can [download and install Flask here](https://metamask.io/flask/). One thing to keep in mind: you can only have one installation of MetaMask active at a time, so if you're going to be using Flask, make sure your production MetaMask is either disabled, or you're using a separate browser profile entirely.

####   
And again--**MetaMask Flask is for development use only!** #Network Profile: Aurora #
Network name

Aurora

Token

ETH

RPC

[https://mainnet.aurora.dev](https://mainnet.aurora.dev/)

Chain ID

1313161554

Block explorer

[Aurorascan](https://aurorascan.dev/) 

Website

[aurora.dev](https://aurora.dev/) 

Aurora is a version of the [Ethereum Virtual Machine](https://ethereum.org/en/developers/docs/evm/) (EVM) that exists on [NEAR Protocol](https://near.org/). Although NEAR and Aurora are developed by the same team, Aurora is best conceptualized as a network in its own right due to its EVM compatibility. 

Aurora's objective is to function similarly to NEAR itself, just with the key difference that it can be used to host decentralized applications (dapps) and run smart contracts which were originally written on Ethereum. This makes it highly appealing for developers: in their [own words](https://doc.aurora.dev/#:~:text=provides%20the%20Ethereum%201.0%20development%20experience%2C%20with%20layer%2D2%2Dlike%20speed%20and%20scalability), Aurora "provides the Ethereum 1.0 development experience, with layer-2-like speed and scalability." Creating an appealing space for developers means a higher-quality and more diverse ecosystem, which, in turn, draws in users.

In parallel to smoothing the transition for developers, Aurora is also designed to present a relatively flat learning curve for those more familiar with Ethereum, principally through its native token choice. Rather than having its own native token (the token you use to pay gas fees) like many layer 1 chains, **Aurora simply uses ETH**. 

Since it resides on NEAR, Aurora retains many of the former's core features. These include:

* Low transaction costs (gas fees), typically [$0.02 per transaction](https://doc.aurora.dev/#:~:text=Gas%20fees%E2%80%8B,Transaction%20cost%20~%240.02)
* Faster transaction finality of <3 seconds
* Carbon neutrality.

Another key feature of Aurora is the fact that is governed by [AuroraDAO](https://aurora.dev/dao), a decentralized autonomous organization which votes on high-level matters relating to the network. Governance uses the [AURORA token](https://aurora.dev/tokenomics) (though, as we mentioned earlier, Aurora's _native token_ for gas fees is ETH). 

There's also a membership platform available on Aurora called [Aurora+](https://aurora.plus/), promising 50 free transactions per month, AURORA staking, and potential governance involvement. 

## 

## **Using Aurora**

**How do I add Aurora to MetaMask?**

Simply follow our instructions for adding networks [here](https://support.metamask.io/hc/en-us/articles/360043227612). The details you'll need to add it manually, including RPC, chain ID, and token are detailed at the top of this page. 

**What's the relationship between Aurora and NEAR? Why can't I use NEAR with MetaMask?**

Aurora is a version of the Ethereum Virtual Machine that runs _on NEAR,_ and is developed by the NEAR Protocol team.

NEAR, by contrast, is a distinct layer-1 blockchain, completely separate from Ethereum, and so cannot be used with MetaMask (which is only usable with EVM-compatible networks). There is a useful graphic [here](https://doc.aurora.dev/) explaining how Aurora interacts with NEAR for each transaction. 

**How do I bridge tokens to and from Aurora?**

The NEAR Protocol team have built the [Rainbow Bridge](https://rainbowbridge.app/transfer) specifically to support transactions between Ethereum mainnet, Aurora, and NEAR.

To use it, head to the site and connect the MetaMask account you want to use and the Aurora or NEAR address you want to transact with.

Bear in mind that not all transfer directions cost the same. As the [Rainbow Bridge FAQs](https://rainbowbridge.app/faq) explain:

_Transfers **between NEAR and Aurora** require a **single transaction,** **cost a few cents** and happen instantaneously._

_Transfers **from Ethereum** require a **single transaction**, and happen in **about 10 minutes**. The cost will be estimated in MetaMask prior to confirming the transaction._

_Transfers **to Ethereum**, however, involve **two transactions** — the **kick-off** on Aurora or NEAR, and the **finalization** on Ethereum. The finalization can take up to **16 hours**, and its cost will depend on gas prices at that time, and are therefore **unpredictable**._ 

You can read more about how the bridge works [here](https://help.aurora.dev/article/38-how-do-i-confirm-a-transaction) and [here](https://doc.aurora.dev/bridge/bridge-overview).

**Is ETH on Aurora the same as ETH on Ethereum mainnet?**

No.

Although ETH is the native token of both networks, you cannot simply send your ETH from Ethereum mainnet straight to Aurora — it must be bridged first. See the FAQ on bridging immediately above.

**Is my public address the same when using Aurora on MetaMask?**

Yes.

Since Aurora is EVM-compatible, you can use the same Ethereum address (i.e. the type you have in MetaMask) as an existing MetaMask account.

Once you've added Aurora to MetaMask, notice how your address stays the same even when you switch between networks. This means that even if you send some ETH to your MetaMask and haven't bridged it onto the correct network (one of Ethereum mainnet or Aurora), it will still be retrievable in your MetaMask by just switching to the network it's on.

[NEAR has a completely different approach to public addresses.](https://docs.near.org/docs/concepts/account)

**Does Infura's partnership with NEAR mean I can access NEAR with MetaMask?**

The [announcement](https://consensys.net/blog/press-release/leading-ethereum-development-platform-infura-partners-with-near-protocol-marking-expansion-as-a-multi-chain-connector/) simply means that developers can use Infura to easily access the NEAR blockchain.

Although, by default, [MetaMask uses Infura](https://support.metamask.io/hc/en-us/articles/4417315392795) to connect to the blockchain, Infura's compatibility with NEAR does not mean MetaMask does. MetaMask and Infura are different products, and the former can only be used with EVM-compatible networks.

## 

## **Useful resources**

[Aurora knowledge base](https://help.aurora.dev/) (aimed at users)

[Aurora docs](https://doc.aurora.dev/) (aimed at developers)

[Rainbow Bridge](https://rainbowbridge.app/transfer) (official Ethereum <-> Aurora <-> NEAR bridge developed by NEAR)

[Aurora ecosystem](https://aurora.dev/ecosystem)#How to use the MetaMask Mobile Browser#
One of the most useful features of MetaMask Mobile is its built-in browser.

This enables you to use your MetaMask wallet to interact with dapps directly on your smartphone, without having to access a desktop browser. Note that you **have to access dapps using the in-app browser in MetaMask**, rather than any other browser available on your device. On other browsers, you won't be able to connect to dapps using MetaMask. 

In this guide, we'll use the classic blockchain video game Cryptokitties as an example, but the steps are essentially the same for any web3-enabled website:

1. Make sure you've selected the account you want to use for accessing dapps. To do this, tap on the hamburger icon in the top left and tap your account name to select from the list.

![MetaMask switch account mobile](https://support.metamask.io/hc/article_attachments/13103724408603)

1. Open the browser by tapping on the browser tab at the bottom of the screen:

![MetaMask open mobile browser](https://support.metamask.io/hc/article_attachments/13103727058331)

1. Open a new tab using search bar, or my clicking the magnifying glass icon, and navigate to the website or app you are interested in:

![MetaMask navigate mobile browser](https://support.metamask.io/hc/article_attachments/13103837035547)

As with most web3 applications, Cryptokitties asks to connect to your wallet. Here's the real convenience of the MetaMask Mobile browser: **you've already selected your account**, so it's all queued up and ready. With a tap, you can sign in with that account and start playing:

![MetaMask connect mobile browser](https://support.metamask.io/hc/article_attachments/13103724100251)

Keep in mind that the browser is not as fully-featured as a standalone mobile browser application such as Chrome or Firefox. There may be things that don't work. But if you're trying to mint an NFT on the go, or check out a new web3 project that you might want to spend some time on later, it's just the right solution.

Also, **keep track of what applications you give permissions to**, and **be careful which permissions you give** them. (Though dapp connections are much more innocuous than their potentially dangerous relative, [token approvals](https://support.metamask.io/hc/en-us/articles/6174898326683).) Find out how to manage dapp permissions [here](https://support.metamask.io/hc/en-us/articles/360059535551).#What is a token approval?#
### Contents

* [What is a token approval?](#h%5F01G6WZRAE8A9Z3G3J07M14J923)
* [What they look like](#h%5F01G6WZRG3D3HY3J4W1DR9238KF)
* [What they mean](#h%5F01G6WZRNT2BS61XJHV0S9CXD2P)
* [Revoking approvals](#h%5F01G6WZRV65M72W3J1518B5T6ZC)
* [Unlimited token approvals](#h%5F01G6X0J818RMX8E35CCPE0KQEH)
* [setApprovalForAll](#h%5F01GA1DZF6GH7EAJV86X6D839H6)
* [Additional resources](#h%5F01GA1DZN3YZQX2MCZ7A3H45ZSW)

Across web3, you'll encounter a range of transaction types, each of which is identifiable in MetaMask at the point of confirming the transaction. 

Understanding what they are and how to interpret their meaning is an important part of staying safe in web3\. The challenge is that much of the information displayed on these screens is either not designed to be human-readable—such as the long hexadecimal numbers we recognize as account or contract addresses—or, at best, is difficult to decipher.

**Token approvals** are among the most common of the transaction types you'll encounter, and learning about them is therefore essential. In web3, and especially with a[ self-custodial](https://support.metamask.io/hc/en-us/articles/360059952212) wallet like MetaMask, you're firmly in control and hold ultimate responsibility for everything you do. That's why it's critical you know exactly what you're signing up for when you confirm token approvals.

## What is a token approval?

In short: **permission for a dapp to access and move a specific type of token from your wallet**. 

These prompts will often appear in MetaMask if you're a frequent user of decentralized exchanges (DEXs) and DeFi in general. Most platforms rely on you depositing or transferring your tokens to them for one reason or another. However, clicking buttons such as 'Transfer', 'Deposit', or 'Move' won't do anything unless their dapp has your permission—as the wallet owner—to do so.

This is why token approvals are necessary: they enable the dapp to access and move your tokens on your behalf. 

## What they look like

The token approval prompt that appears in MetaMask will look something like this:

![Token Approval](https://support.metamask.io/hc/article_attachments/12302267624475)

Let's dissect this. Notice how:

* **The dapp's name and web URL are displayed at the top.** This helps you make sure that the dapp you _expect to be_ interacting with is actually the one requesting the approval.
* You **can see the address of the smart contract requesting access**. If you're interacting with a dapp/contract you're not 100% sure about, you could take this address and look it up on a block explorer such as [Etherscan](https://etherscan.io/) to look for any strange activity, or to see if it is flagged as a potential scam.
* **You can** **edit the permission (!)**. In this context, 'permission' refers to how much of that token (in this case, MATIC) the dapp will be able to access. Note that this is not limited by how much of the token you actually have in your account; [it can and often does drastically exceed this](#h%5F01G6X0J818RMX8E35CCPE0KQEH). For more on editing token approvals, see our [article on setting a custom spend limit](https://support.metamask.io/hc/en-us/articles/6055177143579).
* **You have to pay gas fees**. The only way for the approval to be secure is for everyone to be 100% sure it came from you, the wallet owner. Thankfully, we just so happen to be using a decentralized, immutable ledger (i.e. blockchain) that can record your permission as historical fact. But for this permission to be recorded, it must be on chain; and for any transaction to be processed on chain, you must pay the costs of operating the network: gas.

## What they mean

If you grant permission for a dapp to access 1,000 USDT, it can do so whenever you ask it to, without requiring a similar token approval transaction again. This applies until the dapp has had access to 1,000 tokens, at which point you'll need to sign another transaction. 

But what's going on behind the scenes? Well, when you approve access to a token, in many cases you're consenting to the dapp calling the [transferFrom](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-Transfer-address-address-uint256-:~:text=an%20Approval%20event.-,transferFrom%28address%20sender%2C%20address%20recipient%2C%20uint256%20amount%29%20%E2%86%92%20bool,-external) function, one of the functions defined in the ERC-20 standard. (In programming, to 'call' a function is to use it.) It enables the dapp to transfer a given amount of the token from your wallet into theirs. The amount is determined by a corresponding [approve](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-Approval-address-address-uint256-:~:text=transferFrom%20are%20called.-,approve%28address%20spender%2C%20uint256%20amount%29%20%E2%86%92%20bool,-external) function, for which—you guessed it—you provide inputs for when you sign your token _approval_.

You can see this process in action when you're presented with the approval confirmation in MetaMask. If you scroll down to 'View full transaction details' and click it, you can see the 'Approve' function listed:

![Token Approval](https://support.metamask.io/hc/article_attachments/12302405884955) 

The 'Granted to' field gives you another opportunity to copy the contract address that's asking for approval and verify its legitimacy on a block explorer. 

#### EIP-3009: the _permit_ function and minimizing gas fees

Not every token you come across works as we've described above, which relates to ERC-20 tokens. This mechanism of _approve_ \+ _transferFrom_ is not relevant for tokens that have implemented the [EIP-3009](https://eips.ethereum.org/EIPS/eip-3009) model, with the stablecoin USDC the most prominent example.

With EIP-3009, rather than an _approve_ transaction, you sign a _permit_ transaction. These bundle up the approval and transfer into one transaction, meaning that you effectively pay zero gas for the approval, and just pay the gas for transferring the tokens.

Want more information on approvals? See our [blog post](https://consensys.net/blog/metamask/the-seal-of-approval-know-what-youre-consenting-to-with-permissions-and-approvals-in-metamask/) on the subject for a deep dive. 

## Revoking token approvals

It never hurts to be in control of your assets, and to be aware of which dapps have access to them. There are a few ways to revoke existing token approvals: see our [article](https://support.metamask.io/hc/en-us/articles/4446106184731) for more detail. 

## Unlimited token approvals: how to stay safe

Often, token approval requests will ask for access to so many tokens that it's essentially unlimited — just see the screenshot above, which shows Uniswap requesting access to 1.1559 tokens. Many legitimate dapps do this to minimize the need—and associated transaction costs—for you to re-approve access to the token every time you want to use it on a dapp. Think of DEXs, for example: if you're conducting a lot of token swaps, you don't want the additional clicks and gas fees every single time. 

However, requesting essentially unlimited amounts of tokens is also how many malicious sites steal from unsuspecting web3 users. This can be particularly demoralizing as a user if you've adhered to all our recommended [security tips](https://support.metamask.io/hc/en-us/articles/360015489591), including keeping your Secret Recovery Phrase offline-only, and never sharing it: despite all your efforts, you could be exploited anyway. 

To make sure you're not granting bad actors access to all of your tokens, we recommend you follow these key principles (which we've borrowed from our [blog post](https://consensys.net/blog/metamask/fake-mining-scams-a-familiar-foe-in-a-new-disguise/)):

* **Always check what a dapp is actually requesting before clicking ‘approve’**. In MetaMask, you can also [adjust the amount](https://twitter.com/MetaMask/status/1245769574131400709) that the dapp has access to. Even if you only provide access to 10% of your tokens, and the dapp turns out to be a scam, that’s still a considerably better outcome than if you’d granted unlimited access.
* DYOR. The best time to get in the habit of performing **due diligence** on any dapp before interacting with it was six months ago; the second best time is today. Look out for misspellings, low-quality images/logos, and other giveaways.
* Remember that **if something seems too good to be true, it probably is**. If you’re being offered 498,563% APY, you’re probably on thin ice.

## _setApprovalForAll_: Making it easier to know what you're approving in MetaMask

If you're not familiar with Ethereum smart contract code, _setApprovalForAll_ may look mildly bewildering, but it's worth knowing about if you interact with dapps. 

This is a function in the [ERC-721 and ERC-1155 standards](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721#IERC721-setApprovalForAll-address-bool-:~:text=setApprovalForAll%28address%20operator%2C%20bool%20%5Fapproved%29) (which relate specifically to NFTs) that enables you to grant or revoke other addresses the ability to manage **all of your NFTs associated with a specific smart contract**. 

One of the most common applications for this function is NFT marketplaces. When you sell an NFT on a platform such as OpenSea, you need to allow the dapp to access and transfer that NFT to the buyer when it sells. Such platforms often request access to _all_ the NFTs of that type (i.e. originating from the same smart contract). For you, the user, this is generally inconsequential — we trust large platforms such as OpenSea not to overstep the boundary and remove NFTs that they shouldn't. 

And, like we said, _generally_ it ends there. However—like many areas of web3—this is a potential opening for scammers; either by exploiting an existing dapp to which many wallets have already granted access to _all_ tokens of a certain type, or by luring you into granting approval to a malicious dapp. 

This is why **MetaMask Extension makes it as clear as possible what you're consenting to when you sign a _setApprovalForAll_ transaction**. This is how it'll look:

![ApproveAll Notifcation](https://support.metamask.io/hc/article_attachments/12302331962011)

Notice also how you have the option to '**Verify contract details**'. If you click this, you'll be able to access a page showing the name, if any, of:

* The contract requesting access
* The NFT contract.

MetaMask retrieves this information from publicly available data, and you can also copy each contract's address to your clipboard if you want to investigate further. See our [article on verifying the safety of smart contracts](https://support.metamask.io/hc/en-us/articles/10143114273563) for what kinds of things to look out for at this point. 

Given that this function allows access to all tokens associated with the contract, two things should cross your mind when you're presented with it:

* Does the dapp I'm interacting with actually need access to all of my tokens?
* Is this a legitimate, non-malicious site that isn't trying to scam me?

One common _non-_legitimate application of this function is when malicious dapps ask you to _setApprovalForAll_ to claim an NFT drop: **you shouldn't have to sign this kind of approval to receive anything**. Don't be fooled!

We can't protect you from the risks inherent in using web3: as the owner of a [self-custodial wallet](https://support.metamask.io/hc/en-us/articles/360059952212), that responsibility lies with you. However, with changes such as this, we're working to equip you with the information you need to stay vigilant and aware of exactly what you're doing. 

## Further reading

For more reading on token approvals, and the unlimited approvals _gotcha_ specifically, see here:

* [Fake “Mining” Scams: a Familiar Foe in a New Disguise](https://consensys.net/blog/metamask/fake-mining-scams-a-familiar-foe-in-a-new-disguise/)
* [The Seal of Approval: Know What You’re Consenting To With Permissions and Approvals in MetaMask](https://consensys.net/blog/metamask/the-seal-of-approval-know-what-youre-consenting-to-with-permissions-and-approvals-in-metamask/)
* [How to revoke smart contract allowances/token approvals](https://support.metamask.io/hc/en-us/articles/4446106184731-How-to-revoke-smart-contract-allowances-token-approvals)
* [How to customize token approvals/allowances with custom spend limit](https://support.metamask.io/hc/en-us/articles/6055177143579-How-to-customize-token-approvals-allowances-with-custom-spend-limit)#What role does staking play on Ethereum?#
#### Am I in the right place?

This article describes the role that staking plays in web3 and on Ethereum. If you're looking for documentation about [MetaMask Staking](https://portfolio.metamask.io/stake), head to [this section](https://support.metamask.io/hc/sections/10505259606555).

#### One of the most common actions that you will come across as a user of Web3 technologies is an action referred to as _staking_. 

It's helpful to think of staking as similar to putting your tokens in a savings account, or as depositing them with a third party. On a technical level, when you stake a cryptoasset you are generally committing that asset to be controlled by a smart contract, in exchange for something, usually an alternative token of some kind. 

Staking is used in a very wide variety of contexts. Let's take a look at some of the most common.

### Staking and Liquidity Pools (DeFi, gaming)

One of the great innovations of Decentralized Finance, or DeFi, has been the [liquidity pool](https://consensys.net/blog/metamask/impermanent-loss-defi-markets-gotcha-number-two/). In order to exchange one token for another without relying on a trusted intermediary such as a centralized exchange, users _deposit_ matching amounts of two different tokens—say, ETH and DAI—into a pool controlled by a smart contract; other users can then use that pool of tokens (hence, a _liquidity pool_) to trade ETH for DAI, or vice versa. Those who deposited tokens into the pool earn a percentage of a transaction fee for the use of their tokens.

In a way, this is a kind of staking, but it's not usually called that; it's usually called depositing. Staking often occurs at the next level:

Once a user deposits tokens into the liquidity pool, they usually receive something in return, like a receipt of their deposit. Many times it's an NFT, representing their specific token amounts and the value of the same; it can also be what's called [_liquidity pool tokens_](https://support.metamask.io/hc/en-us/articles/4409347883675-How-to-use-Liquidity-Pool-LP-tokens), or LPTs. 

On many DeFi platforms, these LPTs can be _staked_, or again deposited, into a contract that then gives the users rewards in the "native token" of the platform. **This model is often referred to as "farming", as you are 'reaping' the benefits of your staked token** **.**

Another model of staking used on such platforms is that, once you have those "platform-native" tokens, you can stake _those_, and earn _governance_ tokens, allowing you to participate in votes regarding the direction of the platform.

### Staking ETH in a validator node

In order to effectuate the switch from Proof of Work to Proof of Stake on Ethereum, the Ethereum network has devised a structure that uses staking to help ensure the security of the network. Maintaining consensus regarding the state of a blockchain network is a complex technical topic that is [described more elsewhere](https://support.metamask.io/hc/en-us/articles/360015489611-Learn-the-basics-of-blockchains-and-Ethereum-miners-and-validators-gas-cryptocurrencies-and-NFTs-block-explorer-networks-etc-). For the present purposes, think of it like this:

The network is made up of lots of _validators_, which are programs that sync data about what transactions are coming in, and validate them, or refuse them if they're not acceptable. In order to have a validator live on the network, a user has to initiate the validator with a wallet address that corresponds to an address that has [staked 32 ETH into a smart contract run by the Ethereum network](https://ethereum.org/en/staking/).

If that user's validator functions as intended, in other words, is on and is connected to the network, validates blocks correctly, then they are rewarded with fractions of ETH. This follows the pattern we saw in the DeFi examples above.

If, on the other hand, the user's validator does not function as intended, some or all of the ETH that is staked can be _slashed —_ i.e. taken from them. This can happen if, for example, the validator tries to validate transactions it shouldn't and maliciously move funds, or, more innocently, if it doesn't meet minimum uptime requirements.

Given the value of ETH, running a validator node is no small investment. It is this financial incentive, along with the multifaceted additional security measures, which help ensure the security of the Ethereum network under Proof of Stake.

Until an upgrade in 2023 when withdrawals will be enabled, all ETH staked in validator nodes continues to earn rewards as designed, but is 'locked'; the users who have deposited that ETH cannot remove it.#I can't access the 'Start a Conversation' button on the Support page#
The 'Start a Conversation' button on our [Support page](https://support.metamask.io/hc/en-us) allows you to access a live chat, and get through to an agent if our bot doesn't resolve your issue first. It looks like this on desktop browsers, but you can also access it from mobile (though it will be laid out slightly differently):

![Start_a_conversation_MetaMask.png](https://support.metamask.io/hc/article_attachments/9887916876827)

For most, the button should fully load and be clickable within a second or two. 

If it won't load, it could be that your browser's adblockers, or similar applications, are interfering with our back-end. Try disabling them for the Support page. If all else fails, try using a different browser. 

See also: [How to contact MetaMask Support](https://support.metamask.io/hc/en-us/articles/360058969391)#How does MetaMask connect to a blockchain network?#
The Internet was originally created as a tool to share information: to pull information out of one database, transfer it remotely, and make it appear on a computer somewhere else. But, in order to do that, you need to have some sort of program to represent that data in the same way, no matter what computer you’re on (and, ideally, make it a pleasant experience): and thus, browsers were born.

Public blockchains like Ethereum are the next evolution of Internet databases, and MetaMask is the next evolution of the browser. Your legacy browser doesn't have the ability to connect to this new kind of network, so MetaMask builds on top of them, pulling and pushing data to and from these public blockchain networks, with all of the interactivity we've come to expect from a Web experience built in. 

## Choose your own network connection

Just like pointing your browser to a URL, MetaMask needs to be pointed to what blockchain engineers call an [_RPC_](https://www.w3.org/History/1992/nfs%5Fdxcern%5Fmirror/rpc/doc/Introduction/WhatIs.html) [_endpoint_](https://www.cloudflare.com/learning/security/glossary/what-is-endpoint/). The data transfer standard for legacy Internet traffic is [HTTP](https://www.w3.org/Protocols/); most public blockchains use a standard called [JSON-RPC](https://www.jsonrpc.org/). This requesting and submitting of data is done through a set of commands that programmers refer to as an [API](https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces). If someone says 'the blockchain API' or 'the blockchain endpoint', they're referring to the same thing: _the place where you can send a request to the blockchain._

#### JSON-RPC APIs

If you want to know more about how JSON-RPC APIs work with public blockchains, take a look at MetaMask’s [Developer Docs](https://docs.metamask.io/guide/ethereum-provider.html), and ethereum.org’s [documentation](https://ethereum.org/en/developers/docs/apis/json-rpc/).

## How do you find an API endpoint? 

Well, you have to have a [node](https://support.metamask.io/hc/en-us/articles/360015489611-Learn-the-basics-of-blockchains-and-Ethereum-miners-and-validators-gas-cryptocurrencies-and-NFTs-block-explorer-networks-etc-) of the blockchain available. Each node is constantly syncing the state of the blockchain, the history of transactions on the network. It's keeping the decentralized database up to date, and you can request—from that database—information it holds. What if you don't have the ability to run a blockchain node?

That's where Infura comes in. Infura provides an instantly available, always on, scalable blockchain API which gives you data access as if you were running your own node, and so much more. Infura offers access to these nodes through API endpoints, through which wallets and applications can send JSON-RPC requests. You could think of Infura, in this way, as a gateway to blockchain data.

#### Scalability and Privacy

Infura offers significant advantages over other blockchain API providers, especially in terms of scalability and insulation against usage spikes, but also meaningful privacy protections for users, which is why MetaMask connects to them by default.

MetaMask, though, has always been designed to be customizable. There are some blockchains that are so new, not widely adopted enough, or haven’t achieved the level of stability required for Infura to support them to their standards of service. Or perhaps you want to connect to a node you host yourself, or another local node of the blockchain. Maybe you’re building your own blockchain! **For this reason, users have always been able to point MetaMask to the RPC endpoint of their choice**. 

#### Run your own node

If you want to run your own Ethereum node, it’s easier than you might think; learn how to get it running with our Knowledge Base article [here](https://support.metamask.io/hc/en-us/articles/360060707952-How-to-run-your-own-Ethereum-node-and-use-it-with-MetaMask), and get it hooked up to MetaMask following instructions [here](https://support.metamask.io/hc/en-us/articles/360015290012-Using-a-Local-Node).

## MetaMask’s relationship to Infura

The [relationship between MetaMask and Infura](https://support.metamask.io/hc/en-us/articles/4417315392795) is a long one, and goes back to the beginnings of the ecosystem. Originally, both were projects under what is today known as ConsenSys Mesh, an incubator for technology built on Ethereum. The two projects were a natural fit, with MetaMask being the use case and Infura the service provider. That relationship continues now that both projects have been folded into the full stack of Web3 products offered by ConsenSys. 

MetaMask’s core vision is that of a permissionless, privacy-enabling product: rather than an Internet that commodifies you and your data, with your identity residing on someone else’s server, this is an Internet that enables you; you control your data and your identity.

Beyond Infura’s technical capabilities, allowing MetaMask to scale to the tens of millions of users it currently has, MetaMask chooses to ship with Infura as the default blockchain network connection provider because of their commitment to privacy and their work to progressively decentralize over time. 

A JSON-RPC API provider is just like any other server or API provider, in the sense that it takes requests from a computer and serves responses. Just like a traditional server, the technical capacity exists to track IP addresses, allowing for the compilation of behavioral patterns and surveillance techniques. Infura’s competitors have pursued the prominent funding model in Web2: not the provision of the service itself, but taking the user data you extract from that service, and selling the analytics of user behavior. Infura competitors have raised tremendous amounts of investment capital with the mandate that they will monetize the blockchain data itself. Infura, however, is not in the business of selling the analytics of user behavior. 

#### You Own Your Data

Infura shares MetaMask’s core belief that users own their usage data; Infura has not and will not productize and sell usage information to third parties.

## The future of network connection providers

The vision of Web3 is one of liberation and decentralization. It’s possible that there will be tools developed that will take this ecosystem further along this path, breaking away from the model of service providers, toward a model of pure peer-to-peer interaction.

One way that Infura is embracing this future is through constantly expanding their offering of networks supported. Originally built for Ethereum alone, Infura now supports a number of sidechains, Layer 2 networks like Arbitrum, and even non-Ethereum Virtual Machine (EVM) compatible networks like Filecoin. 

#### NFTs Forever

Infura also offers a robust suite of tools surrounding IPFS, enabling the NFT ecosystem easy and reliable access to a persistent, decentralized metadata storage platform.

MetaMask, for their part, have built MetaMask Snaps, further enabling the customization and extensibility of Web3\. Snaps allows developers to extend the functionality of MetaMask with custom features like custom blockchains, custom account types, custom messaging and notification protocols, and more, including novel technical solutions such as combining different cryptographic standards; in other words, allowing MetaMask to interact with non-EVM compatible networks. 

Despite the apparent difference, at first blush, between a user-friendly front-end browser experience and a developer-focused API provider, both Infura and MetaMask are united around a core vision of building the protocols and infrastructure of the future, where users always come first.#How do I turn on dark mode?#
Dark mode is available on MetaMask Mobile v4.3.0 and later, and v10.13.0 and later in MetaMask Extension.

Extension Mobile 

To turn on dark mode, head to Settings -> General, scroll until you see 'Theme', and then select 'Dark' from the dropdown menu. If this is the first time you access the dark mode menu, the setting will be 'Default', which means the classic _light_ MetaMask theme. Once you've interacted with it, however, you'll be able to pick from Dark, Light, or System.

![MetaMask Dark Mode](https://support.metamask.io/hc/article_attachments/10110549889435)

Dark mode on MetaMask Mobile **aligns with your device settings**. This means **you won't find the toggle in the MetaMask app itself**. To change your device settings, see the below iOS and Android guides:

* [iOS](https://support.apple.com/en-gb/HT210332)
* [Android](https://support.google.com/accessibility/android/answer/6151800).

#### Dark mode on Xiaomi devices

MetaMask's dark mode may not work on Xiaomi devices due to dark mode settings on MIUI OS (a customized version of Android) overwriting our app.

A workaround is to go to Settings -> Display -> More Dark Mode options and then turn off the toggle next to MetaMask. #My country/region isn't supported for buying crypto#
Whilst we want to make MetaMask's features accessible to as many people around the world as possible, buying crypto in MetaMask (also referred to as on-ramp) is not universally available.

This is because the companies we partner with cannot operate in every jurisdiction, as their operations are affected by varying laws and regulations. 

If your country/region isn't supported, you may still be able to get tokens into your wallet through other means. One route, for example, could be to **b** **uy tokens on a centralized exchange (CEX) and deposit them into MetaMask**. See [our guide](https://support.metamask.io/hc/en-us/articles/360028141672) for more information. Also, bear in mind that this route, like on-ramps themselves, will usually require KYC (know your customer) steps, such as proving your identity, and availability may also vary by region. CEXs also differ from MetaMask in that they are custodial — meaning you don't have control of your accounts' [private keys](https://support.metamask.io/hc/en-us/articles/4404722782107).

You could also arrange a P2P (peer-to-peer) deposit into your wallet by sending simple transactions.

Regardless of the method you choose, please do your own research before handing over any money, and make sure the platform you're using is safe. Always [practise good web3 security habits](https://support.metamask.io/hc/en-us/articles/360060826432).#Field Guide to Bridges#
### Potential Loss of Assets

Transferring assets between blockchains is not necessarily a simple task. Some tokens cannot be sent from one network to another — and if you do, **you can lose them forever**.

![sendtokens.jpg](https://consensys.zendesk.com/hc/article_attachments/4408073472795/sendtokens.jpg)

## What is a bridge?

A bridge is an app that allows you to transfer assets (cryptocurrencies, NFTs, or other tokens) between one blockchain and another. For example, transferring from BSC (now BNB Chain) to Ethereum.

## Why do I need to use a bridge?

   * Many users use the same address on multiple blockchains, for example by [adding a blockchain connection](https://support.metamask.io/hc/en-us/articles/360043227612) in MetaMask. What if they've got an NFT on Gnosis Chain, but they want to have it on Polygon?
   * Conversely, you might have a different address, say on BSC, than what you use on Ethereum. You may think that you can just send tokens from your BSC address directly to your Ethereum address; after all, they're both EVM-compatible, right?

_Wrong._**The BSC blockchain and Ethereum blockchains are separate networks, with no built-in knowledge of each other.** 

If you send to your Ethereum address from BSC, BSC will send to the address you put in, but _on the BSC network._ For more information on this specific scenario, [see here](https://academy.binance.com/en/articles/how-to-recover-crypto-transferred-to-the-wrong-network-on-binance).

## What bridge should I use?

#### MetaMask Bridge

You can now access a curated, straightforward bridging experience in MetaMask Bridge, available at [portfolio.metamask.io](https://portfolio.metamask.io/). Only certain tokens and network combinations are available initially.

You should choose a bridge primarily based on what you're trying to move, where. For example, some bridges only move ERC-20 (currency) tokens; others specifically handle ERC-721 and 1155 (NFTs). The last thing you want to do is try to transfer tokens to a different network, and never receive them.

### There is no definitive listing of bridges.

This is Web3, which is based around permissionless, open development; this means that at any given time, there might be a new bridge between networks. There are also **bridge aggregators**, which are platforms that allow you to use several bridges in conjunction, conveniently transferring assets across platforms.

#### Network Profiles

For detailed information regarding a specific network, see our [Network Profiles](https://support.metamask.io/hc/en-us/sections/4442278744475-Network-Profiles), which include bridge information for each network.

_The following is a non-exhaustive list of bridges and aggregators, in no particular order. MetaMask does not recommend or endorse any of these products; we are providing this information as a starting point for you to do your own research and understand how each bridge works before using it._

### Bridges

| [Celer Bridge](https://cbridge.celer.network/#/transfer) | [Wormhole's Portal Bridge](https://portalbridge.com/#/transfer) | [Rainbow Bridge](https://rainbowbridge.app/transfer) | [Terra Bridge](https://bridge.terra.money/) |
| -------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------- |
| [Multichain Bridge](https://app.multichain.org/#/router) | [Allbridge](https://allbridge.io/)                              | [EvoDeFi Bridge](https://bridge.evodefi.com/)        | [PolyBridge](https://bridge.poly.network/)  |

### Bridge Aggregators

| [Rango Exchange](https://rango.exchange/) | [Li.Fi Bridge Aggregator](https://links.li.finance/) | [movr.network](https://www.movr.network/) |
| ----------------------------------------- | ---------------------------------------------------- | ----------------------------------------- |
| [chainswap](https://chainswap.com/)       | [Router Protocol](https://www.routerprotocol.com/)   |                                           |

## How does a bridge work?

There are a number of different mechanisms that bridges use to move assets between networks; often, they are centralized entities that operate almost like an exchange. Others are more decentralized. If you're interested in the nuts and bolts, start with ethereum.org's [documentation here](https://ethereum.org/en/bridges/).

## I need step-by-step instructions on how to use a bridge

Given the above-mentioned wide variety in bridge platforms, networks, and functionality, we can't provide a step-by-step that will work for _every_ bridge. In general, though, this is how it works:

* Navigate to the bridge that you have identified will work for your particular combination of networks and token types
* Log in to the app with your MetaMask wallet
* Choose the network you're going _from_ and _to_
* Choose the asset you want to transfer  
   * During these steps, you may need to sign approvals in your MetaMask Wallet. _Make sure you read every transaction or approval you make carefully._ For more on approvals, [see here](https://consensys.net/blog/metamask/the-seal-of-approval-know-what-youre-consenting-to-with-permissions-and-approvals-in-metamask/) or [here](https://support.metamask.io/hc/en-us/articles/6174898326683).
* Initiate the bridging process
* WAIT  
   * Bridging generally is not instantaneous, and can often take five to ten minutes for the transaction to be fully processed on the first chain, and then the second chain.
* Open your wallet on the second chain (If you're managing both chain's assets in MetaMask, make sure you switch networks in MetaMask!) and verify the assets are present; remember, you may need to [add the tokens to be able to see them](https://support.metamask.io/hc/en-us/articles/360015489031).#The Ethereum address format and why it matters when using MetaMask#
When you create a MetaMask account, or [add a new account](https://support.metamask.io/hc/en-us/articles/360015289452-How-to-create-an-additional-account-in-your-wallet) to your wallet, you're given a unique **public address**. 

On Ethereum and other networks compatible with the Ethereum Virtual Machine (EVM), **public addresses all share the same format: they begin with _0x_, and are followed by 40 alphanumeric characters** (numerals and letters), adding up to 42 characters in total. They're also _not_ case sensitive.

This address is a number, even though it also includes alphabetical characters. This is because the hexadecimal (base 16) system used to generate the address doesn't just use numerals, like our ten-digit decimal system. Instead, the hexadecimal system uses the numerals 0-9 _and_ the letters A-F. This means it has 16 characters at its disposal, hence the name base _16_. In computer science and many programming languages, the 0x prefix is used at the start of all hex numbers, as they are known, to differentiate them from decimal values. 

## **How does this affect your daily use of MetaMask?** 

### Interoperability: use the same address on different networks

As mentioned above, EVM-compatible networks all share the Ethereum address format. This is because they're generally 'hard forks', based heavily on Ethereum's design, or share key fundamentals. Not all are derived directly from Ethereum, though — many were developed separately and designed for compatibility. Reflecting much of the same architecture naturally lends itself to sharing address formats too. 

Due to these shared characteristics, you can use MetaMask to [interact with any other EVM-compatible network](https://support.metamask.io/hc/en-us/articles/4404424659995-User-Guide-Custom-networks-and-sidechains) **using the same address**. This includes networks such as:

* [Polygon](https://support.metamask.io/hc/en-us/articles/4415758346267)
* [BSC (BNB Chain)](https://support.metamask.io/hc/en-us/articles/4415758120219)
* [Fantom](https://support.metamask.io/hc/en-us/articles/4415758161435)
* [Avalanche (C-Chain)](https://support.metamask.io/hc/en-us/articles/4415758179355).

Try it out: [add a network](https://support.metamask.io/hc/en-us/articles/360043227612) to MetaMask, or switch over from one you've already added. Notice how your account and its address stay the same. This means your MetaMask address on both Ethereum mainnet and BSC, for example, is exactly the same. 

However, the interplay of networks and tokens (particularly the question of [ERC-20 variants](https://support.metamask.io/hc/en-us/articles/4405497827355-User-Guide-Tokens#:~:text=ERC%2D20%20Tokens,add%20it%20manually.) of native tokens) can be complex and is not without risk, so please always do your research before sending a transaction. A network's native tokens are unlikely to be interchangeable with the (ERC-20) version that you can send and receive on MetaMask, for example. 

For information on some of the most prominent EVM-compatible networks you can use with MetaMask, head to our [network profiles page](https://support.metamask.io/hc/en-us/articles/4415750833691). Follow the link to the network you're investigating to read more about bridging, tokens, and the nuances of its use. 

### Interacting with networks that have different address formats: be careful! 

#### tl;dr

**Don't use MetaMask with any addresses that don't use the Ethereum format**, either when sending or receiving. This is in addition to the fact **you should never send tokens straight from one network to another without bridging**. (There are some cases where you won't lose them, but in most scenarios, you will.) You could, for instance, send tokens on Polygon to your MetaMask address, and be able to view them in MetaMask — presuming you have the Polygon network and the tokens themselves added. However, you would not be able to use these tokens on Ethereum, despite the ease with which you can switch over to mainnet in MetaMask. You'd need to bridge the tokens over separately.

Check out our [Field Guide to Bridges](https://support.metamask.io/hc/en-us/articles/4836913606683) for more information.

Whilst MetaMask is a flexible passport to accessing Ethereum and EVM-compatible chains, there are **some cases where you need to exercise caution** when it comes to address formats:

* **EVM-compatible networks with different formats**. Just because a network is EVM-compatible does not necessarily mean it uses an _0x_ address in all circumstances. The Harmony network, for example, is fully EVM-compatible, but [allows users to switch between an _0x_ and _one1_ version of their address](https://support.metamask.io/hc/en-us/articles/4415758143387-Network-profile-Harmony-ONE-#:~:text=Are%20my%20MetaMask,information%2C%20see%20here.%C2%A0) (although the number which follows this prefix is the same). Others, like Avalanche, have multiple chains with varying levels of EVM support ([you should only interact with Avalanche C-Chain on MetaMask](https://support.metamask.io/hc/en-us/articles/4415758179355-Network-profile-Avalanche-AVAX-#:~:text=Is%20my%20Avalanche,bridge%20them%20over.%C2%A0)).
* **Non-EVM-compatible networks: stay away**. As flexible as MetaMask is, you cannot interact with non-EVM-compatible networks on completely different blockchains. The most obvious example would be Bitcoin, whose address format is completely different. If the blockchain has nothing or little to do with Ethereum, it is unlikely to be usable with MetaMask.#How to reset your wallet#
_**This article describes the wallet reset process, which is different from an account reset**. [Click here](https://support.metamask.io/hc/en-us/articles/360015488891) to read about resetting your account._ 

**Contents:**

* [What is a wallet reset?](#h%5F01FXJ8NN1X1PJNG0AH3XKKJR93)
* [Why might I need to do it? ](#h%5F01FXJ8NVJ9X7ZY96H1WBA0NCHX)
* [How do I do it?](#h%5F01FXJ8P07CG8H4A8A9GK0X0EKA)
* [Re-adding accounts after your wallet reset](#h%5F01FXJNJHE3W732SMMVS3ZSC145)

## **What is a wallet reset?**

A wallet reset essentially returns your MetaMask Extension or Mobile app to the state it was in when you downloaded it: it **clears your Secret Recovery Phrase and your accounts from the software**. After you execute a reset, you'll need to re-enter your Secret Recovery Phrase to get access to your wallet again. (_This is why you should never reset your wallet unless you have your SRP to hand.)_ 

Currently, the **wallet reset function is** **only visible on Mobile** (on the lock screen, when you log out). However, **you can also reset your wallet on Extension**. See our [steps](#h%5F01FXJ8P07CG8H4A8A9GK0X0EKA) below for more detail. 

### What's the difference between resetting my wallet and resetting my account?

Although similar in name, these two options have different effects. 

**Reset wallet** will completely remove your wallet from the device, requiring you to restore with your SRP. '**Reset account**' will wipe your transaction history, leaving your wallet otherwise untouched. See our [account reset article](https://support.metamask.io/hc/en-us/articles/360015488891) for additional detail.

#### In summary:

**Reset account** will wipe your transaction history, but keep your wallet in MetaMask.

**Reset wallet** will completely remove your wallet from this MetaMask install.

Most users will have no need to reset their account, and we suggest only doing so when recommended to by a Support agent or when one of our articles suggests it.

## **Why might I need to reset my wallet?**

The two main reasons are:

* You want to stop using your existing MetaMask wallet and create a new one, with a new Secret Recovery Phrase
* You want to [reset your password](https://support.metamask.io/hc/en-us/articles/360039616872), potentially because you've forgotten it.

Currently, the process is the same in both cases. 

## **How do I reset my wallet?** 

#### Warning!

**Only follow these instructions if you have your Secret Recovery Phrase backed up and available.**

If you start the reset process without it, you may not be able to access your account ever again.

If you don't have it to hand, and are still signed in to MetaMask, learn how to reveal your phrase [here](https://support.metamask.io/hc/en-us/articles/360015290032). 

Please note that when resetting your wallet, **any accounts (addresses) that do not originate from your Secret Recovery Phrase will not be recovered afterwards**. These imported accounts, either hardware wallet or imported via private key, are **not included** under the Secret Recovery Phrase and will need to be [re-added manually](https://support.metamask.io/hc/en-us/articles/360015489271). Please be sure to verify that you have the private key details for any imported accounts before proceeding with the reset process. See [here](https://support.metamask.io/hc/en-us/articles/360015289932) for more on imported accounts.

Extension Mobile 

1. To start with, you will need to uninstall MetaMask. Rather than doing this within the app itself, you'll need to remove it using your browser's extension settings. For example, on Chrome, you can just right click on the extension icon in the top right, and click 'Remove from Chrome'.

![How can I delete my MetaMask Wallet](https://support.metamask.io/hc/article_attachments/9220162293403/How_can_I_delete_my_MetaMask_Wallet.gif)

You can also go to chrome://extensions/ and click the 'Remove' button there:

![Remove MetaMask Extension](https://support.metamask.io/hc/article_attachments/9220262640155/Remove_MetaMask_Extension.png)

1. [Reinstall MetaMask](https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask#:~:text=How%20to%20install%20MetaMask%3A).
2. When you reinstall the MetaMask Extension, you'll see a welcome message. Click through. Now you'll be presented with the option to either import a wallet or create a new one. Since we're resetting in this case, we just want to import.

![How to restore wallet.png](https://support.metamask.io/hc/article_attachments/9220504019483/How_to_restore_wallet_1.png)

1. Enter your Secret Recovery Phrase (all lower case) and your preferred password:

![How to restore wallet.png](https://support.metamask.io/hc/article_attachments/9220537423899/How_to_restore_wallet_2.png)

If you entered your Secret Recovery Phrase correctly, the process is now complete, and you should be able to access your wallet in Extension as before.

1. Lock your account by tapping the hamburger icon in the top left, and selecting the lock option at the bottom.
2. On the lock screen, tap 'Reset wallet':
3. A warning message will appear, reminding you that you should not proceed unless you have your Secret Recovery Phrase. Tap through and then type 'delete' in the field in the subsequent screen to confirm your intention.

![How to reset your account mobile](https://support.metamask.io/hc/article_attachments/9186314346523/How_to_reset_your_account_mobile.gif)

1. Now you'll be redirected to a screen that looks like this. Tap 'Import using Secret Recovery Phrase'.

![Reset_Wallet_Mobile_1.png](https://support.metamask.io/hc/article_attachments/9186483545883/Reset_Wallet_Mobile_1.png)

1. Input your Secret Recovery Phrase -- all in lower case, with spaces between words. You'll also need to choose a password.

![Reset Wallet Mobile](https://support.metamask.io/hc/article_attachments/9186523757723/Reset_Wallet_Mobile_2.png)

Once you input your Secret Recovery Phrase correctly, you're finished!

## **Re-adding accounts after you reset your wallet**

Now that your wallet has been reset, let's talk about **re-adding accounts**:

* Any imported accounts (such as hardware wallets) will not automatically reappear -- you need to re-add them manually.
* Any additional accounts you originally had on that MetaMask instance will not necessarily be restored alongside the auto-generated original (i.e. Account 1, before renaming). MetaMask will proceed through your previous accounts in ascending order until it hits one with 0 ETH, in which case it will stop, and any beyond that will not be added. However, you can easily get them back by [ re-adding accounts](https://support.metamask.io/hc/en-us/articles/360015489271-How-to-add-missing-accounts-after-restoring-with-Secret-Recovery-Phrase) until you reach the one you're looking for.#How to remove networks#
As they're essentially instructions that point MetaMask in the correct direction (towards an RPC endpoint), all the networks you add are removable. Follow the steps below for the platform you're using: 

Extension Mobile 

1. Click the network selector at the top of the app to bring up the list of networks you've previously added. Find the network you want to remove and click the cross that appears when you mouse over it.  
![cross.png](https://support.metamask.io/hc/article_attachments/7471758838811/cross.png)
2. Click 'Delete' on the menu that appears.  
![Extension_2.png](https://support.metamask.io/hc/article_attachments/4502792746651/Extension_2.png)

1. Tap the hamburger icon in the top left of the app and tap 'Settings'.  
![Mobile_1.PNG](https://support.metamask.io/hc/article_attachments/4502749858075/Mobile_1.PNG)
2. Find 'Networks' in the settings menu.  
![Mobile_2.PNG](https://support.metamask.io/hc/article_attachments/4502798584219/Mobile_2.PNG)
3. You'll now see a list of the networks you've previously added to your MetaMask:  
![Mobile_3.PNG](https://support.metamask.io/hc/article_attachments/4502813374747/Mobile_3.PNG)  
Long press on the network you want to remove to bring up a prompt confirming your intention, and then tap 'Remove'.  
![Mobile_4.PNG](https://support.metamask.io/hc/article_attachments/4502798662555/Mobile_4.PNG)

If you need to re-add a network, just follow the same steps you used to add it originally: [via Chainlist](https://support.metamask.io/hc/en-us/articles/360058992772-Add-a-network-using-Chainlist-Extension-or-Mobile-) or [manually](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC).#How to check the status of an open Support ticket#
If you've already been in touch with Support and have an open ticket, **contacting us again by any means does not mean your issue will get resolved sooner**. Our technical support team work through tickets chronologically and will be in touch to help you out as soon as possible.

**If you've only spoken to us through the chat window on this site, you do not have an open ticket**. Tickets are administered by email. 

> What do we mean when we say 'Support'? [See below](#h%5F01G4ATW2NMA8PGVBN2N6SB7P9H).

In the meantime, you can log into our support platform, Zendesk, to check on the status of your ticket:

1. **Log into your Zendesk account on the MetaMask support page**. The URL should read: **_support.metamask.io/hc/\[locale\]_**. Make sure you're in the right place — if you're not on this domain, you may be on a fraudulent site, so don't enter any personal information! You should have received an email to create an account for the platform when your ticket was opened.
2. Find the account icon in the top right of the page. Click on it and hit 'My activities' in the drop-down menu:

![Check the status of an open Support ticket MetaMask](https://support.metamask.io/hc/article_attachments/10022983187611)

1. On this page you'll be able to see your open support tickets listed under the 'Requests' tab:

![Check the status of an open Support ticket MetaMask](https://support.metamask.io/hc/article_attachments/10022955875227)

This is the only place where you can check on your ticket status. Our Support Twitter account, for example, will not and cannot contact you on Twitter.

#### MetaMask Support structure

MetaMask Support consists of three main elements: the helpdesk, technical support, and the Community page. All three are accessible via this site — our Support page. Typically, you might first interact with the Community or some articles on this page before contacting our helpdesk. Depending on your problem, helpdesk may elevate your case to technical support. **The tickets described in this article relate solely to support provided by the technical support team.** 

Let's break this down. To start with, what is **technical support**?

We use this term for our staff who will help you with tickets via email, and usually concerning particularly complex issues or matters relating to security and loss of funds. In most cases, you cannot contact technical support about MetaMask without being referred.

**Technical support is distinct from helpdesk agents**. The latter handle the majority of Support cases, and you can get through to them through the [Start a Conversation button](https://support.metamask.io/hc/en-us/articles/360058969391-How-to-contact-MetaMask-Support#:~:text=If%20you%20can%27t%20find%20an%20answer%20in%20these%20resources%2C%20click%20on%20the%20%27Start%20a%20Conversation%27%20button%20on%20https%3A//metamask.zendesk.com/hc/en%2Dus.%C2%A0If%20the%20button%20doesn%27t%20appear%20or%20is%20broken%2C%20try%20turning%20off%20adblockers%2C%20as%20explained%20here.) on our Support homepage after answering a few questions that help us gather details. The helpdesk team do not work via email, but solely through the window that opens when you click the Start a Conversation button.

Additionally, posting on our [**Community** page](https://community.metamask.io/) does not mean you have opened a ticket. However, the Community page is moderated, so you will receive a response, and potentially help from other community members.

If you originally got in contact with us through the conversation window, or you posted on the Community forum, this does not mean you have an open ticket. The steps described above therefore won't apply. #How do I find my transactions?#
There are a few different ways to locate and view your transactions:

## **Finding transactions in MetaMask**

Extension Mobile 

As soon as you submit a transaction to the network, it will appear in the 'Activity' tab of your account, detailing whether you were sending or receiving:

![MetaMask Find Transactions](https://support.metamask.io/hc/article_attachments/12892912394907)

Click on the transaction in question to display its details: 

![MetaMask Find Transactions](https://support.metamask.io/hc/article_attachments/12892921292315)

From here, you can also get additional information by following the 'View on block explorer' link. 'Copy Transaction ID' will add the transaction hash to your clipboard. 

There are two ways to access your transactions on Mobile.

The first is to tap on the token type whose transactions you want to view:

![MetaMask Find Transactions Mobile](https://support.metamask.io/hc/article_attachments/12892989158299)

The second is to tap the hamburger icon in the top left and select 'Activity'. In the list this brings up, tap on the transaction you're looking for to view its details.

![MetaMask Find Transactions Mobile](https://support.metamask.io/hc/article_attachments/12892981178779)

## **Finding transactions on the block explorer**

### Firstly: what is a block explorer?

Essentially, block explorers are independent sites which retrieve information about activity on the blockchain, organise it, and make it freely available online. With the help of block explorers, all network (blockchain) activity can be quickly queried, helping ensure total transparency. 

Although their barrage of [long, hexadecimal numbers](https://support.metamask.io/hc/en-us/articles/4702972178459) and highly specific terminology can be intimidating at first, block explorers are very easy to use. These skills will form a vital element in your toolkit for using Web3\. 

Block explorers are specific to each blockchain: Ethereum has its own ([Etherscan](https://etherscan.io/)), BSC has its own ([BscScan](https://bscscan.com/)), etc. 

Make sure you're using the right site by heading to the relevant network profile from our [hub](https://support.metamask.io/hc/en-us/articles/4415750833691), which covers many of the most popular EVM-compatible blockchains. 

### Finding transactions

Although there are distinctions between each block explorer, they broadly look the same. The steps below will apply regardless of the network you're using:

1. Open up the appropriate block explorer. [Network profiles accessible from our hub](https://support.metamask.io/hc/en-us/articles/4415750833691) can help you find it.
2. [Copy your wallet address. ](https://support.metamask.io/hc/en-us/articles/360015289512-How-to-copy-your-MetaMask-account-public-address-)
3. Paste your address into the search bar to open up your wallet's page.
4. Locate the transaction in the list provided.

## **Related articles**

[How to find a transaction ID](https://support.metamask.io/hc/en-us/articles/4413442094235)

[How to check my wallet activity on the blockchain explorer](https://support.metamask.io/hc/en-us/articles/360057536611-How-to-check-my-wallet-activity-on-the-blockchain-explorer)#Network profiles hub#
Looking for a guide on how to interact with a specific network using MetaMask? You're in the right place. 

MetaMask is usable with any network compatible with the Ethereum Virtual Machine (EVM).

Follow the links below to find the network you're looking for — although please note this is by no means an exhaustive list.

## **EVM-compatible blockchains**

Based on Ethereum (usually through hard forks) but with key differences such as different consensus mechanisms, alternative blockchains to Ethereum mainnet have a broad range of intended functions, features, and relative advantages. Chief amongst them is their ability to compute more transactions per second (tps) whilst maintaining lower gas fees. Generally, they each have their own ecosystem of dapps, such as DeFi and NFT platforms. 

Follow the links below to view our profiles on each network:

### [BNB Chain](https://support.metamask.io/hc/en-us/articles/4415758120219) (formerly Binance Smart Chain/BSC)

### [Harmony](https://support.metamask.io/hc/en-us/articles/4415758143387)

### [Fantom](https://support.metamask.io/hc/en-us/articles/4415758161435)

### [Avalanche](https://support.metamask.io/hc/en-us/articles/4415758179355)

### [Aurora](https://support.metamask.io/hc/en-us/articles/6945467429019)

## **Layer 2 (L2) and sidechains**

**L2 networks** are protocols built on top of an existing blockchain to improve throughput -- the volume of transactions it can handle. L2s are generally fundamentally linked to layer 1 chains, relying on them for security.

**Sidechains** are their own blockchain. With this slightly greater distance from the main chain comes increased self-reliance: in contrast to L2s, sidechains use their own security mechanisms. However, they are still closely linked to the parent chain. Their purpose is typically to improve or expand the parent blockchain's functionality, a step achieved by enabling 1:1 interchangeability of assets between the two networks. For example, one ERC-20 Polygon (MATIC) token on Ethereum mainnet can be exchanged for one Polygon token usable on the Polygon sidechain via the network's bridge. 

Our profiles can be accessed by the links below:

### [Polygon](https://support.metamask.io/hc/en-us/articles/4415758346267)

### [Optimism](https://support.metamask.io/hc/en-us/articles/4415758352667) (Optimistic Ethereum)

### [Arbitrum](https://support.metamask.io/hc/en-us/articles/4415758358299)

### [Palm](https://support.metamask.io/hc/en-us/articles/4415771874971)#How to find a transaction ID#
Every single transaction on the blockchain is assigned a unique **transaction ID**, also known as a _transaction hash_. Often, the terms can be found with the abbreviations _tx_ or _txn_ substituted for transaction.

Explaining the cryptography behind this number would require extensive explanation. However, for our purposes, we can simply understand this hash number as a condensed form of the transaction's data — in other words, details such as the addresses involved, the timestamp, and the quantity of tokens exchanged. 

Locating the transaction ID is straightforward, and varies depending on the platform you're using to access MetaMask:

Extension Mobile 

As soon as you submit a transaction to the network, it will appear in the _Activity_ tab of your account, detailing whether you were sending or receiving. 

Simply click on the transaction in question:

![MetaMask Find Transactions](https://support.metamask.io/hc/article_attachments/12893101219867)

This should display the interface below, at which point you will notice the convenient _**Copy Transaction ID**_ option. This will copy the ID to your clipboard, ready for however it's needed.

![MetaMask Find Transactions](https://support.metamask.io/hc/article_attachments/12893093866907)

Alternatively, and if you want to see more detail, you could also select _**View on block explorer**,_ which will take you to the appropriate block explorer page for the network you're using. Here, the transaction ID is referred to as the transaction hash. 

To access the transaction ID in mobile, first we need to be able to view the transactions. There are two ways to do this depending on how you want to narrow them down: 

### Option 1: View transactions by token type

Accessible from the wallet homepage, which displays all the token types which have previously been added or held by the wallet, this method is useful if you want to distinguish between tokens. 

From here, tap the relevant token type to bring up its transactions, and select the one you're looking for:

![MetaMask Find Transactions Mobile](https://support.metamask.io/hc/article_attachments/12893232668955)

### Option 2: Transaction history

Another way of reaching this stage is to go via the hamburger icon in the top-left to **_Activity_**, which will be more suitable if you want to review all transactions associated with the address:

![MetaMask Find Transaction ID Mobile](https://support.metamask.io/hc/article_attachments/12893470302235)

After finding the transaction you want to investigate, tap it to bring up its details. 

Whichever method you used, you'll be presented with basic information and the transaction status. At the bottom you'll see an option to **_view on Etherscan_** _—_ select this to open Etherscan within the app's native browser. You'll then be able to easily locate the transaction ID listed as 'transaction hash' on Etherscan.

As with Extension, the block explorer links will update according to the network you're using at the time — e.g. if you're using Polygon, the app will show a link to Polygonscan.#Resetting your account in the event of a stuck or pending transaction#
#### Caution!

You should only reset your account when it is suggested by a member of the MetaMask Support team or by MetaMask Activity.

Occasionally, you may come across transactions that are not completed in the time you expect. This can happen for a number of reasons, such as running out of a native token to pay gas fees, or setting a low gas limit at times of high traffic, causing your transaction to become "stale".

In other cases, it is possible there are software issues with MetaMask, and it is in these cases that you may need to reset your account. 

This is a feature that wipes your transaction history, including MetaMask's knowledge of any pending transactions. Due to the impact this can have on your account, please only reset your account when instructed to do so by a Support agent.

**See our [guide](https://support.metamask.io/hc/en-us/articles/360015488891)** for a brief run-through of how to reset your account, and some key considerations. 

Please note you should **only reset your account if your transaction is not visible on the block explorer**. Find out how to search for your transaction [here](https://support.metamask.io/hc/en-us/articles/360057536611). 

#### Reset account vs. Reset wallet?

These are different processes that should not be confused. Resetting your account essentially clears your transaction history. Resetting your wallet returns your MetaMask to the state it was in when you first installed it and created your wallet.

For more information on each of these processes, see the appropriate article:

* [Resetting your wallet](https://support.metamask.io/hc/en-us/articles/4556918516763)
* [Resetting your account](https://support.metamask.io/hc/en-us/articles/360015488891)#Transaction Insight#
Transaction Insight is a feature of MetaMask that appears during the transaction flow, or in your transaction history. It looks like this:

![Screen_Shot_2021-12-11_at_12.50.49_AM.png](https://support.metamask.io/hc/article_attachments/4412852074139/Screen_Shot_2021-12-11_at_12.50.49_AM.png)

The point of Transaction Insight is to make the information regarding your transactions readily understandable. Under the hood, it decodes the transaction data, which normally comes through as a blob of code:

![hex.png](https://support.metamask.io/hc/article_attachments/4412843784859/hex.png)

This is fine for computers, but it’s not very helpful for most humans. With Transaction Insight, by clicking on the ‘DATA’ tab, you're offered a decoding of that blob into a number of fields. Right away, you’re presented with a much better understanding of your transaction’s details. 

Keep in mind that some of the numbers are measured to a very high degree of precision, meaning the decimal point may not be in the same place as you’re expecting. This is something we’re working to clarify as soon as possible.

What’s more, you now have a set of tools to help you ensure you’re interacting with the right contract.

For example, addresses involved in the transaction will be presented in their standard format, but you can also click on them to nickname them, so that in the future you know you’re interacting with the one you mean to. That way, you're much less likely to interact with a scam address instead of the legitimate one.

![Screen_Shot_2021-12-11_at_12.49.50_AM.png](https://support.metamask.io/hc/article_attachments/4412851893787/Screen_Shot_2021-12-11_at_12.49.50_AM.png)

  
Additionally, armed with the knowledge of specific contract addresses, you can do your own research on Etherscan to make sure you understand exactly [what’s happening with the contents of your wallet](https://support.metamask.io/hc/en-us/articles/360057536611).#User Guide: Transactions and Failed Transactions#
#### New to crypto and web3?

Head to [MetaMask Learn](https://learn.metamask.io/) for a straightforward learning experience designed specifically for newcomers to web3\. It's completely free, available in multiple languages, and includes useful tools such as simulations to help you find your feet with MetaMask.

#### _This article consists of an explanation and links to resources surrounding transactions and why they fail, and further down, links to common failed transaction scenarios and how to address them:_

* [Anatomy of a blockchain transaction](#h%5F01G79J04D0EN1VD8VS7C7J7KD1)
* [Common problems](#h%5F01G79J09NWA8CGR4VYC2PT5B6Y)
* [Main fixes](#h%5F01G79J0J8JTRPM9MRB76EN1GPP)
* [Additional resources and next steps](#h%5F01G79J0RP8ZMZ1V1SKQY70TXCT)
* [FAQs](#h%5F01G79J18RBK27GZCF10CGN9GKP)

## **Anatomy of a blockchain transaction**

When we talk about 'transactions' on a public blockchain network, we're usually talking about interactions between two addresses; in other words, tokens, be they fungible or non, or other crypto-assets being 'sent' from one address to another. There are also transactions referred to as "internal transactions", which are interactions that occur between smart contracts, and for the most part fall outside of the scope of this article.

#### Want more info?

For more on blockchain networks and how they work in general, check out our [intro article here](https://metamask.zendesk.com/hc/en-us/articles/360015489611-Learn-the-basics-of-blockchains-and-Ethereum-miners-and-validators-gas-cryptocurrencies-and-NFTs-block-explorer-networks-etc-), and if you get stuck on any unfamiliar words, our [glossary is always available](https://consensys.net/knowledge-base/a-blockchain-glossary-for-beginners/).

For clarity's sake, nothing is actually being _sent_ anywhere. A smart contract-enabled blockchain network like Ethereum has a number of different components, or functions. One of these is what we would call a "computer": the Ethereum Virtual Machine, or EVM, which is capable of running programs ('smart contracts'). The backbone of the system, however, is a _distributed ledger_: **imagine a spreadsheet that contains, on one side, every single Ethereum wallet address, and each address has a column for each type of crypto-asset that it holds.** 

Let's use an example for illustration. Say that Guillaume wants to send a transaction to Dolores. Guillaume has 1.36 ETH in his account, and he plans on sending Dolores 0.5 ETH. Sounds like a good day for Dolores, even in a bear market. 

Guillaume opens up his MetaMask wallet, enters Dolores' address, configures the gas parameters that he's comfortable with paying, and hits 'send'.

At this point, the transaction enters a local temporary holding status, known as the _local memory pool,_ or _local mempool_. The transaction will then get 'picked up' by the closest node in the network; depending on Guillaume's [gas settings](https://metamask.zendesk.com/hc/en-us/articles/360022895972-Using-advanced-gas-controls), his transaction will be prioritized (**the more Guillaume is willing to pay per [unit of gas](https://metamask.zendesk.com/hc/en-us/articles/4404600179227-User-Guide-Gas), the faster his transaction will be processed**), and propagated to other nodes in the network. The nodes will do the work of verifying that Guillaume has the ETH to spend, and then will actually perform the 'transaction': **the ledger will be modified; 0.5 will be debited from Guillaume's balance, and 0.5 will be credited to Dolores'.** 

_'The moving hand, having writ, moves on':_ ETH didn't move through a network per se; it wasn't an email sent from Guillaume's computer to Dolores' MetaMask inbox or anything of the sort. Guillaume sent a request, **authenticated by his [private keys through MetaMask](https://metamask.zendesk.com/hc/en-us/articles/4404722782107-User-guide-Secret-Recovery-Phrase-password-and-private-keys)**, to the network to debit his account and credit Dolores', and after the verification process programmed into the network's protocols, this was done. 

#### _That's all there is to a transaction: a request to the ledger to reallocate something from one address to another._

## **When things go wrong**

Things can go wrong for a number of reasons. Often, they're 'software in nature': MetaMask has a bug, or something was misconfigured regarding the network you're trying to use; there was a connectivity error.

A **common issue is that the user, in an attempt to pay less for their transaction, sets a very low gas limit**, and network conditions are so congested that there isn't space in any blocks for such a "cheap" transaction, sometimes for a very long time: eventually, this transaction will become "stale" and will have to be cancelled by the user. 

**If you've sent a transaction and it hasn't been finalized**, its status will be shown as "pending" in MetaMask. 

**If you sent a transaction, and it failed, the most likely cause is a lack of gas**: you "ran out of gas", in other words, the transaction had a cost in gas that, when multiplied by the gas price, resulted in a total amount of the network's native currency that was greater than what you had in your wallet. 

#### Info

For more on calculating gas, consult our [gas guide here](https://metamask.zendesk.com/hc/en-us/articles/4404600179227-User-Guide-Gas).

This can happen for a number of reasons, but one thing to consider is what the transaction is that you're trying to carry out. Minting an NFT during peak network traffic times can be very gas-intensive; if you're trying out a new or experimental transaction, it may be worth trying on a test network before paying real live network fees.

## **Fixing the problem**

### **Key Factor #1: Local or Broadcast to Network**

As you go about diagnosing your transaction issue, especially when it comes to a pending transaction, you need to look at whether the transaction is still in your local mempool, or whether it has made it to the network and is stuck there for whatever reason. If it is just in your local mempool, the solution could be as simple as locking, and unlocking, your MetaMask wallet (**make sure you know your password and have your Secret Recovery Phrase backed up before you do**). If it's made it to the network, the solution could be more complicated.

For more on fixing these problems, see the links below.  
  
### **Key Factor #2: Nonce**

This word can mean a few different things. It's a contraction of "number only used once", and in this context, it roughly means 'transaction number', starting from the first transaction made by the sending address. You can get yourself into real trouble if, for example, you're firing two different transactions from different instances of MetaMask with the same wallet address at the same time. **Your address' transactions need to be in increasing order according to their nonce.** However, just as nonces are capable of causing a stuck transaction, they can be the key to getting a transaction unstuck.

For more on that technique, [see here](https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction).

## **Next Steps**

### _If you have a failed or pending transaction, consult the following resources for assistance._

#### [How to send tokens from your MetaMask wallet](https://metamask.zendesk.com/hc/en-us/articles/360015488931)

#### [How to speed up or cancel a pending transaction](https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction)

#### [Why did my transaction fail with an "Out of Gas" error?](https://metamask.zendesk.com/hc/en-us/articles/360038849792-Why-did-my-transaction-fail-with-an-Out-of-Gas-error-How-can-I-fix-it-)

#### [Uniswap Troubleshooting](https://metamask.zendesk.com/hc/en-us/articles/360053394291-Uniswap-support-and-troubleshooting-tips)

#### [User Guide: Gas](https://metamask.zendesk.com/hc/en-us/articles/4404600179227-User-Guide-Gas)

#### [Can I reverse an already confirmed transaction?](https://metamask.zendesk.com/hc/en-us/articles/360059957352-Can-I-reverse-an-already-confirmed-transaction-)

## **FAQs**

#### _Q: One account in my wallet has a pending or in-queue transaction. Can I start another transaction from a different account within the same wallet?_ 
A: Yes, you can. The nonce is counted per account, not per wallet.#User Guide: Troubleshooting#
If MetaMask isn't working the way you expected, there are some steps you can take on your own that often solve problems, without having to create a support ticket. Here are some of our top fixes:

* Restart your browser, or force close the mobile app and reopen.
* Restart your computer or mobile device.
* [Lock and unlock MetaMask](https://support.metamask.io/hc/en-us/articles/360053412451).
* If your problem relates to a specific transaction, check the relevant block explorer for the network you're using, such as [Etherscan](https://support.metamask.io/hc/en-us/articles/360057536611). Block explorers are a wealth of information and offer much greater detail regarding the where, when, what, and who of transactions.
* Make sure you're [running the latest version](https://support.metamask.io/hc/en-us/articles/360060268452) of MetaMask.
* Search the [Community Forums](https://community.metamask.io/) and this Knowledge Base for similar problems.
* **We do not recommend [resetting your wallet](https://support.metamask.io/hc/en-us/articles/4556918516763) or [resetting an account](https://support.metamask.io/hc/en-us/articles/360015488891) unless one of our agents advises you to.**
* Remember, [MetaMask is a self-custodial wallet](https://support.metamask.io/hc/en-us/articles/360059952212-MetaMask-is-a-non-custodial-wallet), which means we **cannot rescue compromised wallets.** We also **cannot** **reverse transactions**, as this contradicts the immutability of blockchain.
* If you're experiencing a problem with a third-party platform, like a [token swapping app](https://support.metamask.io/hc/en-us/articles/4405506066331) or blockchain videogame, **reach out to their support team first**.
* If you're looking for help, don't spam our Support team by asking the same question on multiple channels. This will only delay the reply. If you have a live conversation open, your browser will remember your history. If you have a live ticket (email correspondence) with our Technical Support team, see how to check on the status of your ticket [here](https://support.metamask.io/hc/en-us/articles/4453556284571).
* Have you waited long enough? Blockchain is fast, but not instantaneous. How low did you set your gas? Are you transacting on a layer 2 chain that requires you to wait before removing funds?
* Did you use a bridge? See our [article](https://support.metamask.io/hc/en-us/articles/4836913606683) for additional guidance.

If you still need help, open a ticket following our instructions [here](https://support.metamask.io/hc/en-us/articles/360058969391-How-to-contact-MetaMask-Support).#Tax compliance and crypto-assets#
## **Wait, what? _Taxes?_**

In many jurisdictions, transactions involving digital assets may be a taxable event. Taxation on digital assets is an evolving issue, and the rules vary depending on what jurisdiction you live in. 

**Due to this, you should be aware that you may have tax obligations, and you should consult a tax professional about your particular situation.** Below are some general informational resources **(which may not be up-to-date, given how rapidly this area is developing)** that could be applicable, depending on your location. These links are provided for background education only, and should not be relied upon. 

### **USA**

[IRS - Virtual Currencies](https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies)

[Forbes.com - How is Cryptocurrency Taxed?](https://www.forbes.com/advisor/investing/what-are-cryptocurrency-taxes/)

###   
**European Union** 

[European Business Review - Do You Have to Pay Taxes on Cryptocurrency in Europe?](https://www.europeanbusinessreview.com/do-you-have-to-pay-taxes-on-cryptocurrency-in-europe/)

### **United Kingdom**

[HM Revenue & Customs - Tax on cryptoassets](https://www.gov.uk/government/publications/tax-on-cryptoassets)

### **Philippines**

[Business Insider India - Axie Infinity players in the Philippines may have to start paying tax on trading ‘pets’](https://www.businessinsider.in/cryptocurrency/news/axie-infinity-players-in-the-philippines-may-have-to-start-paying-tax-on-trading-pets/articleshow/85618940.cms)

### **Israel**

[Coindesk - Israeli Bill Would Force Crypto Investors to Report Holdings Above $61K](https://www.coindesk.com/policy/2021/07/28/israeli-bill-would-force-crypto-investors-to-report-holdings-above-61k/)

### **Tools**

For an open-source platform that might assist in managing tax obligations, consider [Rotki](https://rotki.com/).

## **FAQs:** 

[How can I download my transaction data for manual reconciliation?](https://support.metamask.io/hc/en-us/articles/360061103031)#User Guide: Dapps#
One of MetaMask's most exciting features is its ability to connect to _decentralized applications_, or dapps (often referred to as Dapps, dApps, or Đapps). Think of dapps as traditional websites that you can access in your browser, but that have a special portal built into them that links them to a blockchain. In order to interact with the functionality of that network, you need to have a wallet connected to the dapp portion of the website. That's where MetaMask comes in.

#### Trying to figure out whether a dapp is legitimate?

You can always consult the details of projects registered at [everest.link](https://everest.link/) and verify that they match.

Also, check out our [article](https://support.metamask.io/hc/en-us/articles/10143114273563) on verifying whether smart contracts are legit. Though dapps and smart contracts are not the same thing, the former is generally powered by the latter, so it is definitely recommended to verify trustworthiness before interacting with a dapp.

Many websites that have dapp functionality will have a button somewhere on the site that says 'Connect wallet', or 'Connect to dapp' or even just 'Launch app'. Clicking the correct button should launch a set of interactions that end up with your MetaMask wallet being connected to the dapp you're on. That said, you might not want to do this your first visit to the site, and that's fine; you can always manually connect later (see instructions [here](https://support.metamask.io/hc/en-us/articles/360045901112)).

#### **Be careful about which dapps you connect to, and what permissions you give them.** 

**Certain types of transaction require granting a dapp's smart contract permission to access your funds, and, in many cases, virtually _infinite_ amounts of your funds.** 

**In fact, there are many [cases](https://consensys.net/blog/metamask/fake-mining-scams-a-familiar-foe-in-a-new-disguise/) in which smart contracts run by dapps are created specifically to defraud users and steal all of their funds once they've granted this kind of access.**

#### Warning!

Token approval scams are one of the most common methods through which web3 users are scammed, so it pays to clue up. See our [guide to token approvals](https://support.metamask.io/hc/en-us/articles/6174898326683-What-is-a-token-approval-) for more information.

Of course, _infinite access to funds is often what you want_; if you're accessing a decentralized exchange, you want to be able to deposit, swap, or transfer as many tokens as you specify. That said, here are some things to keep in mind:

* How well-known is the project? Does it have a community channel? Do your research before allowing access.
* How often do you use the dapp? If it's not something you're actively using, do you want it to have access to your wallet?
* Has the dapp or a related project recently had a security breach? It's worth searching [here](https://www.rekt.news/).

That said, tools are available to manage your existing token approvals. [Read more here](https://support.metamask.io/hc/en-us/articles/4446106184731).

Note that **[disconnecting your wallet from a dapp](https://support.metamask.io/hc/en-us/articles/360059535551) _does not_ affect token approvals**.

## FAQs and further reading

[Disconnect wallet from a dapp](https://support.metamask.io/hc/en-us/articles/360059535551)

[Manually connecting to a dapp](https://support.metamask.io/hc/en-us/articles/360045901112)

[Why am I being asked to connect to a Dapp?](https://support.metamask.io/hc/en-us/articles/360036580711)

[Can I make a list of favorite Dapps?](https://support.metamask.io/hc/en-us/articles/360059087572)

[What is a token approval?](https://support.metamask.io/hc/en-us/articles/6174898326683)

[How to revoke smart contract allowances/token approvals](https://support.metamask.io/hc/en-us/articles/4446106184731)

[How to customize token approvals/allowances with custom spend limit](https://support.metamask.io/hc/en-us/articles/6055177143579)

[How to verify if a smart contract is safe to interact with](https://support.metamask.io/hc/en-us/articles/10143114273563)#User Guide: Tokens#
### If you're new to blockchains and the decentralized web, take a read through our [primer](https://support.metamask.io/hc/en-us/articles/360015489611); the concepts outlined there will form the basis for the following discussion.

It is important to remember that **MetaMask isn't just used on the Ethereum mainnet**. It's true, that's where a lot of the most popular applications are, and as the network scales, that should continue to be the case, but from the beginning, MetaMask has been designed to be open and modifiable to the world. This means it can be used on **any Ethereum-compatible blockchain network** — and there are a **lot** of those.

With that in mind, this article will seek to give an explanation regarding tokens that acknowledges this multi-chain reality, especially given how much activity happens on non-mainnet chains through MetaMask.

One of the most basic features of blockchain technology is the ability to track assets moving between parties. For this reason it's also called _distributed ledger technology_: in the end, it's all a series of ledgers being synced across the network. How do we track those assets? Well, they need to be quantified in some way: enter **tokens.**

## **Network-Native Tokens**

Most blockchain networks, be they fully public or otherwise, utilize some sort of incentivized consensus mechanism to pay for the computing power of the network, and generally there is a default token, or "native currency", that the network uses for those payments. Ethereum mainnet uses ETH for this purpose, but each network will have its own standard. This is important for the user because **unless they hold some amount of the network's native currency, they may not be able to pay for transactions, gas fees, etc.** Sometimes network-native tokens have significant differences from other tokens on the network (more on the quirks of ETH below), but in general, they're what we call **fungible tokens:**

## 

## **Fungible tokens**

Fungible tokens are those which are not unique. They are interchangeable, just like a metallic coin or a paper bill of currency. True, on most networks they're more traceable than a paper banknote — remember, there's a ledger of what tokens go where — but they're intended to be used as a medium of exchange for one purpose or another. The network currency tokens, described above, are an example of fungible tokens.

### 

### **Fungible token standards**

#### **ERC-20 Tokens**

As blockchain networks have developed, standards have been put in place as to how tokens should be programmed; how they act, programmatically speaking. On the Ethereum network, many fungible tokens conform to a standard called ERC-20\. So, your BNB, USDT, LINK, DAI tokens, to name a few, are ERC-20 tokens.

Let's say you're on Ethereum mainnet, and you just bought yourself a few tokens of a widely-recognized and traded token. You wait for the swap to settle, and there in your MetaMask wallet, your tokens appear. Magic! ...Not quite.

MetaMask doesn't automatically catalog and load every possible token into a list just in case you buy some of them — at time of writing, there are nearly 650,000 [different ERC-20 contracts out there](https://etherscan.io/tokens). It's impossible to keep up. Instead, MetaMask keeps a list of the most popular tokens, and automatically detects those; but no worries, if you get one that's less common, you can easily [add it manually](https://support.metamask.io/hc/en-us/articles/360015489031).

### And here's the really incredible part — **you can use MetaMask on any Ethereum-compatible network, with any Ethereum-compatible token, following the same process.** 

Why? Simply put, because Ethereum has served as a roadmap and a standard-creating paradigm for blockchain networks. To put it another way, most people building networks want to make sure that their networks are compatible with Ethereum. So that ends up meaning that MetaMask will work just the same on a new network as it does on Ethereum mainnet.

### MetaMask isn't just a wallet, and it isn't just your gateway to the Ethereum network; it's your passport to the decentralized multichain multiverse.

That said, even when travelling through wormholes, you've got to do it right: [make sure you use the right bridges and portals](https://support.metamask.io/hc/en-us/articles/4404424659995). **Just because you have tokens in your MetaMask wallet on a different blockchain doesn't mean you can just send them to your MetaMask wallet on the Ethereum blockchain**. If you do, **you can lose them forever.** We have a few helpful guides to bridging tokens between specific networks in our [Network Profiles section](https://support.metamask.io/hc/en-us/sections/4442278744475-Network-Profiles). 

#### **ERC-777 Tokens**

This alternate standard was offered as an improvement over ERC-20 tokens, in that it has greater capabilities, particularly the ability to notify smart contracts or wallets when an ERC-777 token is transferred to such an entity. Of course, this means that the receiving entity has to be programmed to receive and work with that notification, which many are not. There are a number of ERC-777 tokens out there, but the ERC-20 standard by far holds predominance.

#### **Wrapped Tokens**

While these standards have existed for some time, they did not exist at the inception of Ethereum. As such, ETH itself, Ether, the native currency of the Ethereum mainnet, is not ERC-20 compliant. This oddity has led to the creation of Wrapped Ether, or WETH: an ERC-20 token that holds an equivalent value of the ETH for which it is swapped, but with ERC-20 functionality.

The wrappers don't stop there, though: wrapping a token is a way of bringing a token from one network to another, like wrapped Bitcoin or MATIC tokens on Ethereum mainnet. 

#### **Stablecoins**

One prominent class of ERC-20 tokens are so-called 'stablecoins', that is, fungible tokens whose value per token is pegged to some external value. Many are pegged to fiat currencies, or commodity markets, or high-value items like gold.

Stablecoins have some considerable nuances and complexities associated with them, due to the fact that in many jurisdictions, they are required to be collateralized; in other words, if you're issuing a coin that is pegged to the US Dollar, you may need to hold in reserve one US Dollar for every coin you issue. Due to these requirements, some stablecoins are controlled by more centralized entities.

Another approach to collateralizing a stablecoins is through depositing value in other cryptocurrencies. This represent a more decentralized option, which some consider closer to the ethos of Web3\. Due to the volatility of cryptocurrencies, a crypto-collateralized stablecoin may need to hold in deposit a higher amount of value as collateral than a fiat-backed stablecoin.

#### **Reflection tokens**

Most users get into DeFi to grow their bags — often through staking, yield farming, liquidity mining, and other complex mechanisms. Reflection tokens are set up to scratch this itch for passive income without the holder ever having to engage in any DeFi activities: you're simply awarded ever more tokens just for having them in your wallet. 

These payments — orchestrated by a smart contract — are proportional to the quantity of tokens the user holds, and are financed through what amounts to taxation on transactions. The advantages are obvious: as the incentive to hold is so strong, the token is protected from large-scale sell-offs. You're also free to use the token in DeFi if you want to, generating yields on top of the redistributive payments. 

Reflection tokens are a novel concept, with many current examples having been around for too short a time to derive any conclusions about their long-term sustainability or viability. As always with new crypto projects, DYOR and stay safe. 

#### 

#### **Elastic supply / Rebase / Algorithmic tokens**

A fascinating and emerging technology, elastic supply financial products seek to eliminate price volatility. Instead, these products experience supply volatility.

Like a stablecoin, many (not all) elastic supply tokens have a 'target price' that references some external value, such as a fiat currency. But instead of being pegged 1:1 in _quantity_ with that external value point, the quantity of tokens expands and shrinks to maintain each holder's _value._ In theory, this fluctuation manages changes in demand, or changes to an external price (a fiat currency, for example) on which the value of the asset is based.

More simply: **an elastic supply token will adjust, or rebase, the number of tokens allocated to each holder** depending on market demand for the token as well as the market value of the fixed external value, in theory, maintaining a steady value.

**_If you hold rebase or elastic supply tokens, you may see the quantity of that token go up and down in your wallet._** 

At least, that's the idea; it doesn't always work that way. **E** **lastic supply products are complex financial instruments in which you should only invest if you truly understand how they might behave.**

Many elastic supply tokens are designed to be non-collateralized stablecoins, thus offering a more decentralized, yet stable, option. However, other elastic supply tokens are designed specifically to offer compounded gains on positive rebases, but the reverse will also be true: under a negative rebase, your losses would also be compounded.

_To give you a made-up example: you buy 100 tokens, and demand grows; your 100 tokens are rebased to 120 tokens, and what's more, the value of them is greater because there's more demand; you've experienced a 30% return on your investment--at least, temporarily. Now the flip side: if lots of holders of your elastic token are selling, maybe your 100 tokens are rebased to 80, and the value has dropped; you've suffered a 30% loss._ 

**This information is offered by way of example and education, and, as always with MetaMask resources, in no way constitutes investment advice. Do your own research and understand the projects in which you are participating.**

## **Non-fungible tokens (NFTs)**

What's an NFT, you ask? Well, it's there in the name. In contrast with ERC-20, network currency, or other fungible, currency-like tokens, non-fungible tokens are meant to be unique. There may be a series of them, but they are not interchangeable, one for another; each one is different. For this reason, they have been the subject of amazing innovation and creativity since the inception of Ethereum mainnet; one of the first big surges of usage and adoption of Ethereum was through [CryptoKitties](https://www.cryptokitties.co/), an NFT-based videogame in which players breed and collect unique cats, each one of them tokenized as an NFT.

###   
**Non-fungible token standards** 

#### **ERC-721 Tokens**

Similar to the dynamic between ERC-20 and ERC-721, there are two main NFT standards, and the first and older of the two is more dominant—although there are plenty of ERC-1155 tokens out there as well. This is the standard that's been used to create CryptoKitties, the Ethereum Name Service (ENS), CryptoPunks, Cool Cats (so many cats)—the list goes on.

#### **ERC-1155 Tokens**

Developed subsequently to the 721 standard, the ERC-1155 standard is incredibly powerful and while used in NFT collections, may come to be used in much more complex and nuanced ways. A smart contract that is coded according to ERC-1155 can issue a number of both fungible and non-fungible contracts. This could be particularly useful in developing a video game, for example: imagine a video game world where the users need life tokens, or currency tokens to spend in the game, which would be fungible; however, the characters themselves could be represented by non-fungible tokens, each one of them unique. With ERC-1155, all of this could be possible with a single smart contract.

#### **Side note: POAPs**

As you spend more time in Web3, you may hear about POAPs, especially if you attend events related to the ecosystem (in person or virtually). POAP is an acronym that stands for Proof Of Attendance Protocol; it's essentially an NFT that is deployed as a sort of badge, showing that you attended a given event. In other words, in addition to any value they may have in monetary terms, they carry bragging rights, too.

If you're interested in using POAPs at your own event, ConsenSys' own Clemens Wan has written [an excellent walkthrough.](https://clemens-wan.medium.com/end-to-end-poap-guide-for-enterprises-e63ec22734fb)

## **Summary**

Remember, all the types outlined above are the Ethereum-native standards. Other networks, if they develop tokens that use Ethereum standards as a blueprint, may refer to them in similar, but different ways, for example keeping the numbers but changing the letters: XYZ-20 tokens, ABC-721 tokens.

Tokens can store an incredible amount of real-world value. Read more about how to keep that value safe [here](https://support.metamask.io/hc/en-us/articles/4403988839451).

# **FAQs:**

[NFT tokens in your MetaMask wallet](https://support.metamask.io/hc/en-us/articles/360058238591)

[How to find a token contract address](https://support.metamask.io/hc/en-us/articles/360059683451)

[How to display tokens in MetaMask](https://support.metamask.io/hc/en-us/articles/360015489031)

[Adding and sharing ENS / .eth address tokens in MetaMask](https://support.metamask.io/hc/en-us/articles/4404063526043)

[How to remove a token](https://support.metamask.io/hc/en-us/articles/360058451852)

[A token is missing from my wallet](https://support.metamask.io/hc/en-us/articles/360059232852)

[How to check my wallet activity on the blockchain explorer](https://support.metamask.io/hc/en-us/articles/360057536611)#User Guide: Swaps#
**MetaMask Swaps** is a MetaMask feature that allows you to do exactly that: swap one cryptocurrency token for another (for more on ERC-20 tokens and the difference between these and NFTs, see our [user guide](https://support.metamask.io/hc/en-us/articles/4405497827355-User-guide-Tokens)). It's super convenient and straightforward, and drastically reduces the number of steps needed, and the amount of exposure to third-party smart contracts, in order to obtain tokens that interest you.

MetaMask Swaps is currently available on:

* Ethereum mainnet
* BNB Smart Chain
* Avalanche C-Chain
* Polygon
* Optimism
* Arbitrum.

![MetaMask user guide swaps](https://support.metamask.io/hc/article_attachments/10023187570331)

###   
**Things to know before swapping:** 

* Even if a token complies with the ERC-20 standard, **you shouldn't buy or obtain a token without** **researching it first.** One of the novelties of cryptocurrencies and decentralized finance is their programmatic nature; a token isn't necessarily a static asset; it may have functions that can affect how it is used, or how it affects your wallet — like [this](https://www.reddit.com/r/CryptoCurrency/comments/owkokz/scam%5Falert%5Fvera%5Ftokens/), for example. Of course, there are other less malicious caveats: for example, some tokens you can acquire, but to gain the utility intended from them, you need to stake them on a specific platform.
* **Slippage** is the amount of change between the price you click on and the final transaction price that MetaMask Swaps will tolerate. Given the highly liquid and fluctuating nature of decentralized finance and cryptocurrencies, prices can change from second to second. This is why Swaps allows a little bit of a difference between the price you agree on and the final price, to ensure your transaction goes through — but not too much, in order to protect you from sudden spikes or drops.

![MetaMask user guide swaps slippage](https://support.metamask.io/hc/article_attachments/10023248340123)

* **Custom tokens** is what MetaMask calls tokens that aren't common or widespread enough to be in MetaMask's standard list of tokens, which are detected by default when you have Ethereum mainnet ([and a handful of other popular networks](https://support.metamask.io/hc/en-us/articles/360015489031)) selected as your network in MetaMask. If you swap some tokens into your wallet, but don't see them (after a few minutes — remember, blockchain is fast, but it's **not instantaneous**), [try adding the tokens manually](https://support.metamask.io/hc/en-us/articles/360015489031).
* **Our support articles are for MetaMask Swaps only**. In other words, MetaMask provides support for the swaps that happen through the use of the MetaMask Swaps button. If you are performing swaps directly on a different platform or another DEX, MetaMask may provide some general orientation or guidance, but **it should not be considered definitive**; reach out to the support team or community for the exchange or platform where you are swapping for assistance.

#### Remember: MetaMask is only an intermediary in your swap!

When you use MetaMask Swaps, bear in mind that MetaMask is acting as an aggregator or intermediary: we pull together quotes and offer you the most advantageous one. From there, you can decide whether or not to proceed with the transaction with the platform/liquidity provider at hand. MetaMask does not provide the liquidity, execute the trade, or sell you tokens.

### Ready to dive in?

It doesn't matter whether you're on MetaMask Extension or Mobile, getting the tokens you want is only a few clicks—or taps—away. 

On the main MetaMask screen, look for a button with some arrows in a rectangular shape, marked 'Swap'. Smash that button!

You'll be presented with the main Swap screen.

![MetaMask user guide swaps amount](https://support.metamask.io/hc/article_attachments/10023293831451)

#### **Preparing your Swap**

* First, choose the token that you have, that you're willing to 'spend', using the drop-down menu at the top.
* Further down, choose the token you're interested in acquiring using the second drop-down menu.
* Adjust the amount of the first token up or down until you're comfortable with the amount you're spending, and the amount you're acquiring.
* At the bottom of the screen, there's a "Get quotes" button. Smash that button!

You'll see the app go through a process of searching for the best price. **This process is the secret ingredient in making MetaMask Swaps the cheapest and best swapping service out there**. There's a lot going on behind the scenes while you're watching Swaps search.

First of all, Swaps is searching across decentralized token exchanges and token swapping protocols to find you the most advantageous exchange rate.

At the same time, it's running test transactions, checking to make sure that if you do end up submitting a transaction, that it's likely to go through — and if not, those options are filtered out. **MetaMask is saving users here from the pain of a failed transaction**: with Ethereum mainnet gas fees and the complexity of token smart contracts, a failed transaction adds a significant financial injury to the insult of an incomprehensible error code. Swap's failure rate is very low, and improvements are in the works to make it almost nonexistent.

Some eagle-eyed users will have noticed on the previous screen, in the lower left-hand corner, a mention of "3% slippage". Slippage is yet another parameter that Swaps is using in your favor, and it's explained in more detail up above.

So with that DeFi number-crunching done, you get the quote screen:

### 

#### **Executing your Swap**

There's kind of a lot going on here, but don't be alarmed. First of all, up at the top, you'll see that Swaps is continuing to do all the work that we mentioned previously on an ongoing basis, ensuring that you're getting the **most up-to-date price and availability**.

The main feature is in the middle of the screen: **the amount of tokens that you are going to acquire** (keeping in mind slippage) **as of the last quote**. You can see details such as the exchange rate, and optionally you can dive into how the quote got calculated, as well as advanced gas settings. That's a whole topic in and of itself (start [here](https://support.metamask.io/hc/en-us/articles/4404600179227)), but that's the amount the network is going to charge, plus MetaMask's fee.  
**If you're ready to go, smash that Swap swiper across the screen!**

#### Why haven't my swapped tokens shown up in my wallet?

As with all blockchain transactions, it's not instantaneous, but you should see your tokens in your wallet soon. If they're uncommon tokens, or for whatever reason they're not showing up in your wallet, follow our instructions [here](https://support.metamask.io/hc/en-us/articles/360015489031) to add them.

####   
  
**Enter the SwapVerse** 

One of the truly incredible things about MetaMask, and one of the reasons that it can offer you such an unparalleled token-swapping experience, is that it is **built to be network-agnostic**: as long as the blockchain network you're connecting to is Ethereum-compatible, you can configure MetaMask to work on it. So what?

So **you can use MetaMask swaps on other networks, too**. You don't have to be on Ethereum mainnet; **you can use Swaps on Polygon, for example**. As other sidechains and custom networks come online, try it out. Swaps enables you to trade tokens on any Ethereum-compatible network, right from your wallet, without having to interface directly with third-party platforms, thus lessening your exposure to potentially hackable or malicious smart contracts.

You even have the ability, through Swaps, to acquire non-Ethereum tokens _on mainnet_. But remember: **always navigate the multiverse [through bridges and portals](https://support.metamask.io/hc/en-us/articles/4404424659995).**

### **FAQs**

[**Why are some tokens missing from MetaMask Swaps?**](https://support.metamask.io/hc/en-us/articles/360059004712)

[**How do I see the price at time of purchase for tokens bought through MetaMask Swaps**](https://support.metamask.io/hc/en-us/articles/360058615371)

[**Why did my MetaMask swap fail?**](https://support.metamask.io/hc/en-us/articles/360058994872)

[**How do I cancel a pending swap?**](https://support.metamask.io/hc/en-us/articles/360060419011)

[**Why is the MetaMask Swap button unavailable / greyed out?**](https://support.metamask.io/hc/en-us/articles/360059410511)

**[I did a swap, but received fewer tokens or less fiat value than I expected. Why? ](https://support.metamask.io/hc/en-us/articles/360059421651)**

[**Error fetching quote**](https://support.metamask.io/hc/en-us/articles/360060329612)

[**Uniswap support and troubleshooting tips**](https://support.metamask.io/hc/en-us/articles/360053394291)

**[User guide: custom networks and sidechains](https://support.metamask.io/hc/en-us/articles/4404424659995)**#User Guide: Gas#
#### New to crypto and web3?

Head to [MetaMask Learn](https://learn.metamask.io/) for a straightforward learning experience designed specifically for newcomers to web3\. It's completely free, available in multiple languages, and includes useful tools such as simulations to help you find your feet with MetaMask.

Gas is the unit of measure for how much computational work is required to process transactions and smart contracts. Essentially a transaction fee, the term originates from Ethereum, in which context it refers to computation undertaken on the Ethereum Virtual Machine (EVM). Since Ethereum was founded, numerous EVM-compatible (and non-EVM-compatible!) networks have emerged and adopted similar models. 

The term is analogous to the gas that powers a car engine: it's the fluctuating, occasionally expensive cost of operation. More complex smart contracts require more gas to power their computation, just as a bigger, more powerful car takes more gas to run.

The method for calculating gas fees varies depending on the network. For example, calculating gas on Ethereum used to be very complicated, but was considerably simplified with the implementation of Ethereum Improvement Protocol **(EIP) 1559** in August 2021 (also known as the London Upgrade). Essentially, you pay a **base fee** for every unit of gas, which is **_burned_** (read: it is deleted, and disappears) upon successful completion of the transaction. On top of the base fee, you add a **priority fee**, again per unit of gas, the value of which depends on how quickly you want the transaction to go through. 

Across the broad range of EVM-compatible networks available, gas, or similarly-functioning alternatives, have essentially become the standard method of calculating transaction costs. Fees are paid in the network's native token: for example, any transaction on Ethereum requires ETH; using BSC requires BNB; using Polygon requires MATIC. Some networks have adopted Ethereum's EIP-1559 model wholesale, such as Polygon, whilst others have made adjustments, including Avalanche, for their C-Chain (which [burns both the base fee and priority fee](https://docs.avax.network/learn/platform-overview/transaction-fees/#c-chain-fees), rather than just the former). 

If you want to read a more in-depth look at how gas works on Ethereum, see [here](https://ethereum.org/en/developers/docs/gas/). 

Here are some **essential details for dealing with gas** **in MetaMask**:

#### **The gas limit (units of gas used)**

The _gas limit_ is the **maximum number of units of gas you are willing to pay for** in order to carry out a transaction or EVM operation. Different operations demand different quantities of gas units. A normal transaction sending ETH or a token normally costs **21,000** gas, whereas an ERC-20 token approval requires 45,000. Many networks, such as EVM-compatible blockchain Harmony, use an identical model in which standard transactions also cost 21,000 gas. 

#### Do I need to edit gas limit?

No! MetaMask automatically sets your gas limit depending on the transaction you're trying to execute. In the vast majority of cases, this will be adequate to complete your transaction. If you want to check or edit it, make sure you have [advanced gas controls](https://support.metamask.io/hc/en-us/articles/360022895972) turned on and hit the button next to the gas information on the transaction confirmation screen that reads 'Market', 'Low', or 'Aggressive'.

#### **The base fee**

Every block on the Ethereum network has a base fee determined by network demand: the base fee is based on the block size of the block before it, compared against a target block size (where size refers to the total amount of gas used for all the transactions the block includes). If the size of the previous block exceeds the target, the base fee for the next block increases by 12.5%, leaving you, the user (or your wallet), with absolute certainty as to the base fee of the upcoming block. Your total gas fee must meet this price as a minimum in order to be considered for inclusion in the block. 

#### **The priority fee**

The _priority fee_, also referred to as the "miner tip", incentivizes the miner to prioritize your transaction. 

Naturally, whether this does actually go to a miner depends on the [consensus mechanism](https://support.metamask.io/hc/en-us/articles/360015489611-Learn-the-basics-of-blockchains-and-Ethereum-miners-and-validators-gas-cryptocurrencies-and-NFTs-block-explorer-networks-etc-) they use: Ethereum mainnet became a Proof of Stake network following the Merge in September 2022, so the priority fee goes to validators instead of miners. 

#### **The max fee**

The max fee is the total, global amount paid for your transaction. It is calculated as: **(** **base fee + priority fee) x units of gas used.** MetaMask initially sets this amount based on the previous block’s history. However, users can edit this amount through custom settings (see below). The difference between max fee per gas and (base fee + max priority fee per gas) is “refunded” to the user.

### **Additional Concepts**

#### **Gwei**

Gwei is a unit of ether, the smallest denomination, which stands for [gigawei](https://ethgasstation.info/blog/gwei/) (or 1,000,000,000). [Gwei](https://www.investopedia.com/terms/g/gwei-ethereum.asp) is used for gas fees, or rather payments made by users to compensate for the computing energy required to process and validate transactions on the Ethereum blockchain. 

Other networks also tend to calculate costs using gwei — for example, Fantom, Harmony and Avalanche.

#### **Slippage**

Slippage is the expected percentage difference between a quoted and an executed price.

#### **Gas fee**

Gas _fee_ refers to the transaction fee on the Ethereum blockchain. It is what users pay to get their transaction validated, or completed. 

#### **Base fee**

Generated by the protocol. Represents the minimum 'gasUsed' multiplier required for a transaction to be included in a block (i.e. for a transaction to be completed). This is the part of the transaction fee that is burnt.

### **Advanced Gas Controls**

If you want to get into the nitty-gritty of your gas controls (this can be helpful if you're testing a dapp, for example), MetaMask can do that! See the full article [here](https://support.metamask.io/hc/en-us/articles/360022895972).

### **FAQ**

[Why did I pay gas fees for a failed transaction?](https://support.metamask.io/hc/en-us/articles/360045439051)

[Can you refund my gas fees?](https://support.metamask.io/hc/en-us/articles/360058370012)

[How do I speed up or cancel a pending transaction?](https://support.metamask.io/hc/en-us/articles/360015489251)

[How to estimate the gas fee](https://support.metamask.io/hc/en-us/articles/360059562111)

[Why are my gas fees so high?](https://support.metamask.io/hc/en-us/articles/360058751211-Why-my-gas-fees-are-so-high-)

[Error: \[ethjs-query\] while formatting outputs from RPC (transaction underpriced error)](https://support.metamask.io/hc/en-us/articles/4402538041869)

[How to fix "insufficient funds" error or greyed-out confirm button](https://support.metamask.io/hc/en-us/articles/360044703372)#User Guide: Custom networks and sidechains#
#### New to crypto and web3?

Head to [MetaMask Learn](https://learn.metamask.io/) for a straightforward learning experience designed specifically for newcomers to web3\. It's completely free, available in multiple languages, and includes useful tools such as simulations to help you find your feet with MetaMask.

As the Ethereum ecosystem grows, a very popular option for building new technologies is to build a **custom network**, or a _**sidechain** —_ in other words, another blockchain or network that is compatible with Ethereum — and then allow users to transfer tokens, or value of some kind, between the networks.

There are many [prominent examples](https://support.metamask.io/hc/en-us/articles/4415750833691), and as Ethereum [scales](https://ethereum.org/en/developers/docs/scaling/), they will no doubt grow and evolve. MetaMask has been, and continues to be, a crucial linchpin allowing users to move more or less seamlessly between networks.

That said, **there are some significant, and common, pitfalls when dealing with sidechains** that you **_want to avoid_** **.** The present article is written to be a non-definitive guide to best practices when dealing with EVM-compatible chains. We can't hope to capture all the nuances of dealing with every instance of every sidechain; the following are general guidelines. **Troubleshooting tips are further down.**

## Best practices

   1. ### Do your due diligence  
         * **Not all networks are safe.** In order to offer e.g. cheaper and faster transactions, custom networks usually have different security and reliability guarantees than mainnet. Try to understand the risks before moving significant value to a custom network.  
         * **Make sure you trust the network provider.** A malicious network provider can lie about the state of the blockchain, withhold transactions, and record your network activity and IP address.
   2. ### Ensure accurate and correct custom network information  
         * **Find the network on <https://chainlist.wtf/> to add it to MetaMask automatically.** You can also add custom networks to MetaMask manually using a few other methods: see our instructions [here.](https://support.metamask.io/hc/en-us/articles/360043227612)  
         * **Always verify custom network information.** When a website asks you to add a custom network, how do you know that you can trust the information? We have some recommendations in our [verification guide](https://support.metamask.io/hc/en-us/articles/360057142392).
   3. ### Always use established bridges or portals to move tokens between networks  
         * **MetaMask cannot track transactions between networks.** You are responsible for understanding how any cross-network transactions or deposits work. Make sure you trust the network operator and any Ethereum address you send funds to.
   4. ### NEVER send tokens directly from one network to another  
         * If you attempt to send cryptoassets directly from one network or chain to another, this will most likely result in **permanent and irreversible asset loss**  
         * **Although a custom network may be Ethereum-compatible, they are not the same as the Ethereum Mainnet.** You may have the same Ethereum addresses on all networks, but your assets and transactions are specific to each network, unless the custom network provider allows you to move funds in to and out of it.  
         * **This means you probably have to use a bridge to move assets from one chain or another**. Read more about [bridges](https://support.metamask.io/hc/en-us/articles/4836913606683) here.
   5. ### Be aware of the limitations of technical support  
   MetaMask is a powerful tool that is open to the world to build upon. That means that many other networks and dapps have, and will, use MetaMask as the link between their dapp and you, the user. That does not mean that MetaMask offers technical support for all of those products and protocols. If you are interacting with a non-ConsenSys, non-MetaMask third party, seek technical assistance from them first unless you are sure that what you're experiencing is a problem with MetaMask.  
   Additionally, some popular decentralized exchanges and dapps are, as mentioned, _protocols_ — that is, they are smart contracts, software programs that live on the Ethereum blockchain and do not have any centralized authority who _runs_ them the way a traditional website or service is run. They are purely peer-to-peer interaction. **This means they may not offer technical support** beyond a users' forum, Slack, or Discord channel. Again, see point #1 above.
   6. ### Understand how gas works on different networks  
   When using or interacting with a sidechain or non-Ethereum mainnet network, please keep in mind that **transaction fees are always paid in the native token currency of the network**, for example:  
         * You need BNB to pay gas fees on Binance  
         * On Polygon you would use MATIC  
   Make sure you have enough native tokens if you planning to perform send or swap transactions.

## FAQs  

### [Bridging assets to Arbitrum using MetaMask ](https://consensys.net/blog/metamask/how-to-bridge-your-assets-to-arbitrum-using-metamask/)

### [How to use the Optimism Bridge ](https://consensys.net/blog/metamask/how-to-bridge-tokens-from-ethereum-to-optimism-with-metamask/)

### [Sending assets to Binance (BNB Smart Chain)](https://support.metamask.io/hc/en-us/articles/360059408871)

### [How to send tokens from BSC to Ethereum or other chains](https://support.metamask.io/hc/en-us/articles/4404464724635)

### [Does MetaMask support Polkadot?](https://support.metamask.io/hc/en-us/articles/360060861011)

### [Tips for using MetaMask and Ronin wallets successfully](https://support.metamask.io/hc/en-us/articles/4403684463899-Tips-for-using-MetaMask-and-Ronin-wallets-successfully)

### [Initializing and funding a Ronin wallet with MetaMask](https://support.metamask.io/hc/en-us/articles/4403685858203-Initializing-and-funding-a-Ronin-wallet-with-MetaMask)

## Troubleshooting

**I can't see my tokens on \[name of network\].**

* Are you connected to the correct network in MetaMask? If you don't see the one you need, add it using these [one of these methods](https://support.metamask.io/hc/en-us/articles/360043227612).
* Did you transfer the tokens correctly? (See points 2 & 3 above)
* Have you [added the token](https://support.metamask.io/hc/en-us/articles/360015489031) to MetaMask?

**How do I get ETH on mainnet?**

See [here](https://support.metamask.io/hc/en-us/articles/360058239311).

**How do I get \[custom network token\] on \[mainnet or custom network\]? How do I move them between chains?**

* This is a big topic, with lots of nuances. Certain sidechain tokens, such as MATIC (Polygon network), can be purchased on Ethereum mainnet through MetaMask Swaps.
* Keep in mind that regardless of where you buy a token, **you may still have to move the tokens through a bridge or portal to move them between mainnet and the sidechain.**

**I'm getting the "Internal JSON-RPC error". What do I do?**

See [here](https://support.metamask.io/hc/en-us/articles/360059289871).#Sending (or receiving) a transaction with ENS#
**So what is this ENS thing anyway?**

The [Ethereum Name Service](https://ens.domains/) (or ENS) is, in their words:

"...a distributed, open, and extensible naming system based on the Ethereum blockchain.

ENS’s job is to map human-readable names like ‘alice.eth’ to machine-readable identifiers such as Ethereum addresses, other cryptocurrency addresses, content hashes, and metadata." ([source](https://docs.ens.domains/))

In other words, the ENS seeks to be for the decentralized web what [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) is for the traditional internet (and hopefully, not too much like [what DNS has been for the traditional internet](https://www.cscdbs.com/blog/why-dns-is-the-biggest-single-point-of-failure/)): an infrastructure through which human-readable names can resolve to machine-readable addresses, including Ethereum addresses.

### So what can I do with it?

Well, instead of having to remember that crazy long cryptographic hash address, you can, for a modest fee, [reserve a human-readable .eth username](https://app.ens.domains/). (Or you can splurge a bit if you're looking for an exclusive three-letter address.) Next time you need someone to send you tokens, they can just type your .eth name into MetaMask, and your address should appear:

![mceclip1.png](https://support.metamask.io/hc/article_attachments/4404037310491/mceclip1.png)

Keep in mind that, just like traditional Internet domain names, your .eth domain will have to be renewed periodically, otherwise it can be reserved by someone else. Additionally, just like traditional Internet domain names, .eth domains can be reserved, and then traded -- the only difference being that this is the decentralized web, and those .eth domains can be traded as NFTs directly from MetaMask (currently just Mobile) or on marketplaces such as [opensea.io](https://opensea.io/). For instructions on how to see and share your ENS tokens in MetaMask, [see here.](https://support.metamask.io/hc/en-us/articles/4404063526043) #Switching accounts in MetaMask#
If you have multiple accounts in MetaMask and need to switch from one to another, please follow this procedure:

Extension Mobile 

Click on the round favicon icon in the top right corner. You will find a list of accounts; click on each of them for details.

![Switching accounts in MetaMask](https://support.metamask.io/hc/article_attachments/8858687402779/Switching_accounts_in_MetaMask.gif)

It can be useful to [rename](https://support.metamask.io/hc/en-us/articles/360058033872-How-do-I-change-my-account-name-) them in order to avoid confusion.

Click on the 3 horizontal lines icon on top left of the app. Click on the drop down arrow next to "Account", and choose from the list of accounts the one you would like to use.

![Switching accounts in MetaMask Mobile.gif](https://support.metamask.io/hc/article_attachments/8859620720283/Switching_accounts_in_MetaMask_Mobile.gif)

It can be useful to [rename](https://support.metamask.io/hc/en-us/articles/360058033872-How-do-I-change-my-account-name-) them in order to avoid confusion.#How to suggest a feature or improvement#
We are always interested in hearing how our users would like to use and improve MetaMask.

Please post your request to our [Community forum](http://community.metamask.io/). You can also access this in-app if you're using MetaMask Mobile. Simply tap the hamburger icon in the top left to bring up the menu, and then select 'Request a Feature' at the bottom.

![How to suggest a feature or improvement Mobile](https://support.metamask.io/hc/article_attachments/8971391019163/How_to_suggest_a_feature_or_improvement_Mobile.gif)

Before you submit a new request, have a look to see if someone else hasn't already suggested it — in this case, it's better to upvote theirs rather than add another.

Rest assured there's a lot of behind-the-scenes development that goes on at MetaMask, but we're keen to hear and integrate user requests wherever feasible. Posts on the Community requests page are regularly considered by our developers.#How to run your own Ethereum node and use it with MetaMask#
If you are interested in learning more about how to run your own Ethereum node, the official [ethereum.org instructions](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/) are a good starting point. 

Once you have your node up and running, consult our article [here](https://support.metamask.io/hc/en-us/articles/360015290012) on how to connect MetaMask to it.#Reconciling and keeping track of your accounts#
### Many users find it useful to perform a manual analysis of their accounts, checking to make sure the transactions align with what they intended.

It can be useful to see how much you spent on gas fees, how your balances rose and fell over time, etc. In accounting, **this is referred to as 'reconciliation'**.

MetaMask doesn't yet have this feature built-in. Instead, given the nature of blockchain technology, it's transparently available on blockchain explorers, such as [Etherscan](https://etherscan.io/) or [BscScan](https://bscscan.com/) (as most block explorers are very similar under the hood, this method also applies to those of other EVM-compatible chains, such as Avalanche's Snowtrace). 

## **Method 1: Block explorer balance checkers**

Both these platforms have a built-in balance checker (click for the [Etherscan version](https://etherscan.io/balancecheck-tool), or the [BscScan version](https://bscscan.com/balancecheck-tool)), which allows you to request a snapshot of your wallet's contents at any point in the past. These services **only support checks on your ETH and BNB** balances, respectively, so will not be applicable if you're investigating other token balances. Other networks' block explorers are likely to have similar services, however.

You can narrow down the snapshot by date, or, for even more precision (down to ca. 10-15 second timeframes), by block number: 

![Reconciling_and_keeping_track_of_your_accounts_balance_checker.png](https://support.metamask.io/hc/article_attachments/12769694722843)

The results will look like the below — detailing the block or date, the quantity of ETH held at that time, and how that quantity compares to the current holdings in your wallet.

![Reconciling_and_keeping_track_of_your_accounts_balance_checker_2.png](https://support.metamask.io/hc/article_attachments/12769694708251)

**If you need help locating the block number** you want to search, see the methods below (applicable to Ethereum, using Etherscan). Similar routes will also apply to other EVM-compatible networks, such as BSC.

Go via the account route:

1. Locate the MetaMask account whose history you want to search. In Extension, click the three vertical dots to 'View Account on Etherscan':

![Reconciling_and_keeping_track_of_your_accounts_view_on_Etherscan_1.png](https://support.metamask.io/hc/article_attachments/12769694976667)

On Mobile, hit the hamburger icon in the top left and select 'View on Etherscan':

![Reconciling_and_keeping_track_of_your_accounts_view_on_Etherscan_2.png](https://support.metamask.io/hc/article_attachments/12769695117979)

1. Find the transaction in your account's list. Its block number will be listed in the same row.

Or go via the transaction route:

1. Locate the transaction:  
   * Extension: Access the 'Activity' tab and click on the relevant transaction.  
   * Mobile: Tap the hamburger icon and either select 'Transaction History', or select the token on your wallet landing page to view all its transactions.
2. Click/tap on the transaction and select 'View on Etherscan' (Mobile) or 'View on block explorer' (Extension).
3. The block will be listed on the Etherscan transaction page.

## **Method 2: Downloading a spreadsheet (.csv) history of your wallet transactions**

(for Ethereum mainnet)

* Navigate to [Etherscan](https://etherscan.io/) and search for your [wallet address](https://support.metamask.io/hc/en-us/articles/360015289512).
* Scroll down to the bottom of the page, past all your transactions.
* In the lower right-hand corner, there should be a link to "Download CSV Export":

![Reconciling_and_keeping_track_of_your_accounts_CSV_1.png](https://support.metamask.io/hc/article_attachments/12769694768411)

* Click on this; you should be presented with a dialogue that allows you to specify the date range you're interested in looking at:

![Reconciling_and_keeping_track_of_your_accounts_CSV_2.png](https://support.metamask.io/hc/article_attachments/12769686806299)

* Fill out the dates and the captcha and click 'Download'.
* You should have in your downloads location a file titled "export-" plus your wallet address. This file should have a complete listing of all transactions involving your wallet (except for internal transactions) for the timeframe you requested.

See also our [article regarding tax compliance.](https://support.metamask.io/hc/en-us/articles/4406001678747)#Tax reporting feature#
## The information in this article is out-of-date. Please see current information [here](https://support.metamask.io/hc/en-us/articles/4406001678747).

We do not have a tax reporting feature, this is your responsibility to manage and we recommend you speak to a local tax accountant or search online for a tax reporting tool.  
  
Some popular crypto tax reporting sites are:

* [Rotki](https://rotki.com/)
* [bitcoin.tax](https://bitcoin.tax/)
* [Cointracking](https://cointracking.info/)#Importing a seed phrase from another wallet software: derivation path#
When importing a Secret Recovery Phrase (seed phrase), **MetaMask only supports the default BIP-44 derivation path (m/44'/60'/0'/0)**. For more information, see the technical specification [here](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki).

Currently, you can only use Ledger's derivation paths when connecting a Ledger hardware wallet (you get options for Legacy derivation MEW/MyCrypto, Ledger Live, or BIP44). The MetaMask team is looking at adding more options and customization; for example, custom networks may use different derivation paths.

At this time, Trezor hardware wallet integration only supports the BIP44 derivation path.#How to update the version of MetaMask#
To find your wallet's version please navigate to **Settings > About**.

Extension Mobile 

MetaMask **Extension automatically updates when you lock and then unlock the app**. To do this, click on the jazzicon or blockie in the upper right hand corner, and click on 'Lock'.

Enter your password and unlock MetaMask.

If this doesn't work, you can also try forcing an update:

1. Right-click on the MetaMask icon in your toolbar. Click 'Manage extension'.

![How to update the version of MetaMask](https://support.metamask.io/hc/article_attachments/9471016901147)

1. You'll now be looking at a page with much more information about the extension itself. On Chrome-based browsers, flick the toggle in the top right to turn on developer mode.
2. From here you can:

**Chrome-based browsers:** Click the 'Update' button in the additional toolbar that appears when you turn on developer mode.

![How to update the version of MetaMask Chrome](https://support.metamask.io/hc/article_attachments/9471246796827)

**Firefox:** Click on the settings icon at the top, and then on 'Check for updates'. If there is a new update, you'll be able to manually install it from here.

![How to update the version of MetaMask Firefox](https://support.metamask.io/hc/article_attachments/9471259969563)

Check your app store for your current version. Based on the mobile device, this could be the **App Store** for iOS, or **Google Play** for Android. Look for the MetaMask app and update accordingly.#Accidentally deleted my wallet#
Firstly: **it is impossible to delete the accounts in your wallet**. Once they are created, they exist on the blockchain forever. See [here](https://support.metamask.io/hc/en-us/articles/360042515731-How-can-I-delete-my-MetaMask-wallet-).

However, it _is_ possible to delete the MetaMask extension in your browser, or remove the mobile app. If you do this, you'll need to redownload it, and then follow one of these two options: 

* Restore your wallet [using the Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360015289612-How-to-restore-your-MetaMask-account-from-seed-phrase).
* If you don't have your Secret Recovery Phrase, you may be able to retrieve it if you still have access to the device on which you were using MetaMask. See [here](https://support.metamask.io/hc/en-us/articles/13112366068251).#Stuck or pending transactions#
## This article is out of date.  
For general information on pending or failed transactions, [see here](https://support.metamask.io/hc/en-us/articles/4410741657499-User-Guide-Transactions).  
For instructions to resolve a stuck or pending transaction, [see here](https://support.metamask.io/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction).

The Ethereum network's usage and gas fees can fluctuate greatly. Transactions can take a very long time depending on network usage and your gas choices.

The first thing to do is to check the transaction on a blockchain explorer, and check to see if the transaction has made it to the explorer. If you're on Ethereum mainnet, head to [ethplorer](https://ethplorer.io/) or [etherscan](https://etherscan.io/). For more information on how to find your wallet's information on a block explorer, follow the instructions in **[this article.](https://support.metamask.io/hc/en-us/articles/360057536611-How-to-check-my-wallet-activity-on-the-blockchain-explorer)** 

#### **If the transaction is present on the explorer with the same pending status, you can try to [speed up or cancel](https://support.metamask.io/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction) the transaction.**

**Do not reset your wallet if you still see the transaction pending on the blockchain explorer!** Instead, try [speeding it up or cancelling it](https://support.metamask.io/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction).#Can I reverse an already confirmed transaction?#
Decentralized blockchains are immutable, meaning the data they contain cannot be changed. When the transaction is confirmed and shows as successful, **there is nothing we can do to revert/cancel it.** Usually, when the transaction is confirmed, it's final, and is added to the next block. 

**You can only cancel a transaction while it is still pending.** 

**We cannot revert a transaction that is already completed.**

What you can do is to check with the receiver or receiving app to see if they could do anything on their side (i.e. return your funds via a new transaction).

_For more on transactions in general, [see here.](https://support.metamask.io/hc/en-us/articles/4410741657499-User-Guide-Transactions)_

_For instructions as to how to cancel or speed up a pending transaction, [see here](https://support.metamask.io/hc/en-us/articles/360015489251-How-to-speed-up-or-cancel-a-pending-transaction)._#How to find and manage your MetaMask Extension on Chrome and Firefox#
When you download the browser extension from MetaMask's [official website](https://metamask.io/download.html), please check your browser's extensions. Depending on the browser you are on, the steps are as follows:

Chrome Firefox 

You will see your extensions under this icon. Clicking on it will bring down the dropdown where you can pin your MetaMask extension:

![Manage MetaMask Extension Chrome](https://support.metamask.io/hc/article_attachments/9420403587227)

You can find details about your extension in the _Manage Extensions_ section: chrome://extensions/ or by clicking the 3 dots menu on the right next to the extension you would like to manage.

Click this menu in the browser where you will see **Add-ons and Themes,** or navigate to **about:addons.**

![Manage MetaMask Extension Firefox](https://support.metamask.io/hc/article_attachments/9420457812507)

On the next screen, click on 'Extensions' on the left-hand side:

![Manage MetaMask Extension Firefox](https://support.metamask.io/hc/article_attachments/9420493498779)  
  
To make your extension visible on Firefox, enable it by switching the tab slider.#How to find a token contract address#
_Depending on the method you use, finding a token contract address is one step in the process of adding a custom token to MetaMask. To find out more about adding tokens, head to our [article](https://support.metamask.io/hc/en-us/articles/360015489031) on the subject to see several different methods._ 

## **What is a token address?** 

As you may be aware, tokens on Ethereum mainnet generally conform to the [ERC-20 standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/#top). This is a set of requirements for any _fungible_ token on Ethereum — meaning one token has to have an identical value as other tokens of the same type, just like how one US dollar = one US dollar. The ERC-20 standard makes it considerably easier for wallets such as MetaMask, dapps, and other platforms to integrate existing and new tokens into their functions. For example, you can add any ERC-20 token to MetaMask. This wouldn't be possible if they didn't all adhere to the same standard.

Every ERC-20 token is created by inputting some details into a template smart contract which then controls and manages the token. In addition to basic functions such as the symbol and name, token creators must also determine total supply and methods for managing the balances of all token holders — one of its core responsibilites. 

When the originator first _deploys_ the token's contract on the network, an address is generated that looks similar to the public addresses of Ethereum accounts. This is because the same [cryptographic method](https://en.wikipedia.org/wiki/Ethereum#:~:text=the%20blockchain.%5B66%5D-,Addresses,they%20are%20determined%20by%20sender%20and%20creation%20transaction%20nonce.%5B26%5D,-Virtual%20machine) is used in both situations (with slight nuances). 

Think of it this way: if you want to send or receive from your account, you'd use your public address. Similarly, if you want to send or receive a specific ERC-20 token, you have to do it by interacting with the token's address.

#### ERC-20 on other networks

Outside of Ethereum mainnet, ERC-20 tokens are handled differently depending on the network you're using, and it can quickly get confusing.

Some networks have their own, parallel token standards which essentially equate to ERC-20\. BNB Chain/BSC and its [BEP-20](https://academy.binance.com/en/glossary/bep-20) standard is the most prominent example. The equivalence between the two standard means ERC-20 tokens on Ethereum and BEP-20 tokens on BNB Chain are interchangeable. If you transfer 10 ERC-20 tokens to a wallet on BNB Chain, you'll have 10 of the same token on BNB Chain, but in BEP-20 form and 'pegged' to the value of the ERC-20 original.

In other cases, such as Polygon, you can simply use the Polygon bridge (available [here](https://wallet.polygon.technology/) once you connect a wallet) to move tokens across, provided there are smart contracts deployed on both networks. 

**If you want to move ERC-20 tokens across different networks, always do your research to make sure you don't lose funds**, and consider using test transactions before sending large sums.

## **Where do I find a token's contract address?**

There are two main ways to do this:

Block explorer Token listing site 

Block explorers such as [Etherscan](https://etherscan.io/), [BscScan](https://bscscan.com/), or [Polygonscan](https://polygonscan.com/) hold data on ERC-20 tokens and their equivalents on their respective networks.

To find a token contract address, simply head to the block explorer and search for your desired token. The contract address will be clearly indicated on its page. See below for an example from Etherscan:

![Find_contact_address_block_explorer_desktop.png](https://support.metamask.io/hc/article_attachments/10108723196443)

On a desktop browser, you will see the copy to clipboard icon appear when you mouse over. On mobile, it should already be visible (though please note the exact presentation of the contract address will vary depending on the block explorer you're using). 

![Find_contact_address_block_explorer_desktop2.png](https://support.metamask.io/hc/article_attachments/10108707416603)

Most block explorers have a similar format, and all provide information in the same categories -- just specific to their network.

They will also display the same information on a mobile browser as they do on desktop -- so this method applies equally to both MetaMask Extension and Mobile users.

Token listing sites such [Coingecko](https://www.coingecko.com) and CoinMarketCap hold a registry of all existing ERC-20 tokens. Both of these two main options offer the same functions detailed below.

As an example, we've taken the Uniswap (UNI) token page from Coingecko. From the token's page, its contract address is easy to find, although it differs slightly between MetaMask Extension and Mobile.

## Extension

**Find the 'Contract' category on the right**. By default this automatically displays the token's address on Ethereum mainnet, but you can access others by clicking the three dots.

![Find contact address coin listing site desktop](https://support.metamask.io/hc/article_attachments/10108529565083)

Click the copy button (the overlapping squares/sheets of paper) to copy the displayed address to your clipboard, ready to be pasted into MetaMask.

## Mobile

Open the in-app browser by tapping the hamburger icon in the top left of the homepage, or just open your usual browser, such as Safari on iOS.

Once you're in the browser, find your way to Coingecko, or your preferred alternative. To do this in-app, use the search icon at the bottom of the screen. Search on Coingecko for the name or symbol of the token you're looking to add.

The token page should look like below, with the token address visible in its own category near the bottom:

![Find contact address coin listing site mobile](https://support.metamask.io/hc/article_attachments/10108545523355)

Like on the desktop browser, you can also click the three dots to see the address for different networks:

![Find contact address coin listing site mobile](https://support.metamask.io/hc/article_attachments/10108545532443)

Tap the copy icon next to an address to add it to your clipboard, ready to be added to MetaMask.

Once you have the token contract address, you're ready to add the token to MetaMask. Head to our [article](https://support.metamask.io/hc/en-us/articles/360015489031) on this for more information. #Disconnect wallet from a dapp#
Looking to disconnect your wallet from a dapp?

Below are the methods for both MetaMask Extension and MetaMask Mobile. For more detailed information about permissions surrounding dapps, see our User Guide [here](https://support.metamask.io/hc/en-us/articles/4405506066331), our [token approvals explainer](https://support.metamask.io/hc/en-us/articles/6174898326683) or this [blog post](https://consensys.net/blog/metamask/the-seal-of-approval-know-what-youre-consenting-to-with-permissions-and-approvals-in-metamask/). 

#### Disconnecting vs. revoking approvals: **not the same thing** 

Following the steps below will only disconnect your wallet from the dapp. Depending on what it originally requested, this will prevent it from viewing your public address, wallet contents, transaction history, and even the ability to initiate transactions.

It **will not revoke any [token approvals](https://support.metamask.io/hc/en-us/articles/6174898326683)** that you have in place with that dapp, meaning that **even if you disconnect the dapp, it may still be able to access and move your tokens**. For more information on revoking approvals, see [this article](https://support.metamask.io/hc/en-us/articles/4446106184731), or [our Twitter thread](https://twitter.com/MetaMask/status/1499848000549515265). 

Extension Mobile 

1. Within the Account view, click on the 3 dots button on the top right-hand corner.
2. In the expanded menu, click on **Connected Sites.**  
![MetaMask extension find connected accounts](https://support.metamask.io/hc/article_attachments/13110573424795)
3. Click on the **Disconnect** next to any sites you wish to disconnect from:  
![MetaMask extension disconnect dapp](https://support.metamask.io/hc/article_attachments/13110550119067)  
If you have multiple accounts connected to the same site, the option to remove connections from all of your accounts will appear when you click disconnect:  
![MetaMask extension disconnect all accounts](https://support.metamask.io/hc/article_attachments/13110564370587)

With version 6.0 of the app, we've improved how you manage dapp connections. You can now alter them specifically for each dapp, rather than erasing them all simultaneously. However, if you still want to disconnect from all sites simultaneously, click [here](#h%5F01GSW5SQX6XQZ515AM3DTC8NHY) or scroll down.

1. Open the browser and use the search bar or type the URL of the site whose permissions you want to manage:  
![MetaMask mobile navigate to uniswap](https://support.metamask.io/hc/article_attachments/13110849683739)
2. Once on the site, tap the account icon in the top right-hand corner:  
![MetaMask mobile browser find permissions](https://support.metamask.io/hc/article_attachments/13110636315803)
3. This will display which of your accounts are currently connected to the dapp. To manage this, tap 'Permissions' next to the site's URL.
4. Tap 'Revoke' if you want to remove the connection between the dapp and a specific account, or 'Revoke all' to disconnect all of your accounts:  
![MetaMask mobile revoke permissions](https://support.metamask.io/hc/article_attachments/13110866625691)

To use these dapps in future, you must connect your account(s) again.

### Disconnecting from all dapps simultaneously

Head to **Settings > Security & Privacy > Clear privacy data** to remove, with one tap, any dapp connections/permissions in place for the currently selected account:

![MetaMask mobile clear privacy data](https://support.metamask.io/hc/article_attachments/13110873161243)

**See also:**

[Manually connecting to a Dapp](https://support.metamask.io/hc/en-us/articles/360045901112/)#I am trying to pay the gas fee for OpenSea in order to sell my NFTs#
In order to pay for transactions on OpenSea, Rarible, or any other Ethereum mainnet NFT trading platform, you need to have enough ETH in your wallet to [pay for gas](https://support.metamask.io/hc/en-us/articles/4404600179227/preview/eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NDQwNDYwMDE3OTIyNywiZXhwIjoxNjI4MTA1MTE4fQ.XdtusXXEe7XNKJ79xgMfxknuAXklY5-RlItIsb2t%5FB0). That said, there are certain circumstances where a platform, such as OpenSea, **will require you to pay in WETH**, which stands for "Wrapped ETH". It is a different form of ETH, created to be more compatible with newer smart contract functionality. **Please consult OpenSea's documentation** [here](https://support.opensea.io/hc/en-us/articles/1500006315941-What-are-gas-fees-on-OpenSea-) for more information on paying gas fees on the platform.

**For more information on how to send and receive NFTs, see [here](https://support.metamask.io/hc/en-us/articles/360058961911).** 
  
For more general information on how the Ethereum network operates, see [here](https://support.metamask.io/hc/en-us/articles/360015489611).#Can I import my Coinbase Wallet account to MetaMask?#
Coinbase has two forms of wallet, and the answer to this question depends on which you're using:

* **Coinbase Wallet** is a self-custodial wallet that gives you complete control over your assets, and responsibility for your own seed phrase.
* **Coinbase Exchange account(s)** are the addresses that your purchased crypto gets deposited into when you buy on Coinbase. These accounts are custodial, meaning you do not have access to or control over your private key.

#### Further information

If you want to learn more about this distinction, see [this Coinbase help center article](https://help.coinbase.com/en/wallet/getting-started/what-s-the-difference-between-coinbase-com-and-wallet).

**If you're using Coinbase Wallet, you can import your account into MetaMask**. **You cannot import a Coinbase.com (exchange) account into MetaMask**, since you would need access to the private key, which is something you don't have, as the Coinbase exchange accounts are custodial. 

If you want to import your Coinbase Wallet account into MetaMask, you'll need to locate the private key, and then follow the instructions [here](https://support.metamask.io/hc/en-us/articles/360015489331). #How to check my wallet activity on the blockchain explorer#
[Etherscan](https://etherscan.io/) allows you to search and track the Ethereum blockchain for **transactions, addresses, tokens, prices,** and other activities taking place on the Ethereum blockchain. For links to the block explorers **for other networks, scroll to the bottom**. However, they all function very similarly, so the guidance below will probably also apply to whichever site you access.

To check your account details on **Ethereum Mainnet**, please enter your [public address](https://support.metamask.io/hc/en-us/articles/360015488791) into the search bar on etherscan.io, and you will see all of your account activity and transaction details.

![check_wallet_activity_1.png](https://support.metamask.io/hc/article_attachments/12770187074331)

  
After you enter your MetaMask public address, which is on **Ethereum mainnet,** you will see the ETH balance in native value, today's fiat value and a separate total balance of all your custom ERC-20 tokens. You will also see all the up-to-date transactions in your wallet.   
  
![check_wallet_activity_2.png](https://support.metamask.io/hc/article_attachments/12770187040283)  
  
This balance should reflect in your MetaMask wallet. If you don't see your custom token, you need to add it manually following [this article.](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-View-See-Your-Tokens-and-Custom-Tokens-in-Metamask) If you're still having issues finding the tokens or your Ether balance isn't the same in your MetaMask wallet, see [this article](https://support.metamask.io/hc/en-us/articles/360028059272-What-to-do-when-your-balance-of-ETH-and-or-ERC20-tokens-is-incorrect-inaccurate).

**Note**: if you deposit/send your token on a non-Ethereum Mainnet network you can check your balance and transactions on a different explorer:

* Binance Smart Chain (BSC): [BscScan](https://bscscan.com/)
* Polygon: [PolygonScan](https://polygonscan.com/)
* Avalanche C-Chain: [Snowtrace](https://snowtrace.io/)
* Arbitrum: [Arbiscan ](https://arbiscan.io/)
* Optimism: [Optimistic Ethereum Explorer](https://optimistic.etherscan.io/)
* Harmony: [Harmony Block Explorer](https://explorer.harmony.one/)
* Fantom: [FTMScan](https://ftmscan.com/)

**Learn more about sidechains and custom networks [here](https://support.metamask.io/hc/en-us/articles/4404424659995).**#Basic Safety and Security Tips for MetaMask#
#### New to crypto and web3?

Head to [MetaMask Learn](https://learn.metamask.io/) for a straightforward learning experience designed specifically for newcomers to web3\. It's completely free, available in multiple languages, and includes useful tools such as simulations to help you find your feet with MetaMask.

## What is a Secret Recovery Phrase and how do I back it up?

The use of a seed phrase, or Secret Recovery Phrase, is a standard most crypto wallets use. It's generated randomly when you create your MetaMask wallet, and provides access to all the accounts (addresses) within your wallet.

You receive the 12-word Secret Recovery Phrase when you first create your wallet. MetaMask does not control any of your personal or private data on our servers. Everything is encrypted in your browser and protected via your MetaMask password. So, when you lose your MetaMask accounts and need to restore them, you can only do that with your Secret Recovery Phrase.

When you restore your MetaMask wallet using your Secret Recovery Phrase, it [restores MetaMask accounts](https://metamask.zendesk.com/hc/en-us/articles/360015489271) too, in certain circumstances. If you have[ imported accounts](https://metamask.zendesk.com/hc/en-us/articles/360015289932-What-are-imported-accounts-), you will have to [import them](https://metamask.zendesk.com/hc/en-us/articles/360015489331) again.

## Why you need to store your Secret Recovery Phrase

MetaMask is not a cloud-based solution. If your device breaks, is lost, stolen, or has data corruption, there is no way for the MetaMask Support team to recover this for you. **This Secret Recovery Phrase is the only way to recover your MetaMask accounts.**

## Don’t share your Secret Recovery Phrase and private keys

Anyone who has your Secret Recovery Phrase or private keys can control your assets, and therefore send tokens out of your accounts. Never share them with anyone, including the MetaMask team or anyone claiming to represent us. **We will never ask you to provide your Secret Recovery Phrase.** If someone claims that we do, insist on not sharing. If you encounter someone who claims to be a MetaMask or MetaMask Support team member, or asks for your Secret Recovery Phrase and/or private keys, report them by [getting in touch with Support](https://metamask.zendesk.com/hc/en-us/articles/360058969391).

**If you have a large value of tokens in your account(s), consider getting a hardware wallet.**

Hardware wallets are commonly thought to be the safest way to store your tokens. They are often referred to as 'cold' wallets, since they're disconnected from the internet most or all of the time. This approach means your private keys are never reachable by bad actors online, with the hardware wallet itself required to sign (authorize) any transactions. 

There is no such thing as too much safety. The basic guide here is by no means comprehensive. Always learn how to better protect your tokens, by learning from the community, informative materials or discussion channels.

### Here are some additional resources on how to keep your computer safe:

* Windows - [Keep your computer secure at home](https://support.microsoft.com/en-us/windows/keep-your-computer-secure-at-home-c348f24f-a4f0-de5d-9e4a-e0fc156ab221)
* Mac - [Set up your Mac to be secure](https://support.apple.com/en-in/guide/mac-help/flvlt003/mac)
* Linux - [Protect your person linux/unix computer](https://safecomputing.umich.edu/protect-yourself/secure-your-devices/personal-computer/linuxunix)#Getting started with MetaMask#
![mceclip0.png](https://support.metamask.io/hc/article_attachments/4406122968091/mceclip0.png)

# **What is MetaMask?**

**Public blockchains like Ethereum are the next evolution of Internet databases, and MetaMask is the next evolution of the browser.**

MetaMask is a web browser extension and mobile app that allows you to manage your Ethereum private keys. By doing so, it serves as a wallet for Ether and other tokens, and allows you to interact with decentralized applications, or _dapps_. Unlike some wallets, MetaMask keeps no information on you: not your email address, not your password, and not your Secret Recovery Phrase or other private keys. You retain all power over your crypto-identity.

#### New to crypto and web3?

Head to [MetaMask Learn](https://learn.metamask.io/) for a straightforward learning experience designed specifically for newcomers to web3\. It's completely free, available in multiple languages, and includes useful tools such as simulations to help you find your feet with MetaMask.

### **For detailed information on specific topics such as blockchain technology, tokens, swaps, Layer 2 networks and the rest, scroll down to "Next Steps".**

## 

## **How to install MetaMask:**

Browser extension Mobile app 

**Chrome**

1. Visit <https://metamask.io/>
2. Hit "Download" in the menu bar.
3. Click “Install MetaMask for Chrome”. You will be directed to the Chrome Web Store.

![Install MetaMask Chrome](https://support.metamask.io/hc/article_attachments/9914368739099)

1. Click “Add to Chrome”.
2. On the pop up, click “Add extension”.

![Install MetaMask Chrome](https://support.metamask.io/hc/article_attachments/9914368713115)

After adding MetaMask Extension, MetaMask will automatically open. You can also make sure it's easily accessible in your toolbar by clicking the jigsaw icon in the top-right of the screen, and hitting the pin icon. 

**Firefox**

1. Visit <https://metamask.io/>
2. Click on "Download"
3. Hit "Install MetaMask for Firefox".
4. In the new window that opens, click on "Add to Firefox"

![Install MetaMask Firefox](https://support.metamask.io/hc/article_attachments/9914790810139)

1. On the pop up, click “Add”

![Install MetaMask Firefox](https://support.metamask.io/hc/article_attachments/9914739324187)

**NOTE: Don't be alarmed by the fact that the Firefox plugin is listed as being published by "danfinlay, kumavis" -- they're a couple of the main minds behind MetaMask!**

After adding MetaMask Extension, you’ll return to your browser page. MetaMask will appear on your browser; click on it to open MetaMask.

**Edge**

1. Visit <https://metamask.io/>
2. Click on "Download".
3. Hit "Install MetaMask for Edge".
4. In the new window that opens, click "Get".

![Install MetaMask Edge](https://support.metamask.io/hc/article_attachments/9915320203291)

1. On the pop up, click "Add Extension".

![Install MetaMask Edge](https://support.metamask.io/hc/article_attachments/9915303914395)

After adding MetaMask Extension, MetaMask will automatically open. You can also make sure it's easily accessible in your toolbar by clicking the jigsaw icon in the top-right of the screen, clicking on the 3 dots next to the MetaMask extension, and selecting "Show in Toolbar".

**Brave**

1. Visit <https://metamask.io/>
2. Click “Download".
3. Click on "Install MetaMask for Chrome". Ignore the alarm bells that are ringing: the reason it says "Chrome" here is because Brave is a Chromium-based browser and shares the Web Store with Chrome itself.
4. In the Chrome Store that opens, click 'Add to Brave'.

![Install MetaMask Brave](https://support.metamask.io/hc/article_attachments/9914849811483)

1. In the popup that appears, click 'Add extension'.

![Install MetaMask Brave](https://support.metamask.io/hc/article_attachments/9914911337499)

After adding MetaMask Extension, you’ll return to your browser page. MetaMask will appear on your browser. You may click on it to open MetaMask.

Firstly: **do not download MetaMask from anywhere other than the official app store** appropriate to your device/OS. Cloned versions of MetaMask are out there that are programmed to record your Secret Recoverty Phrase as soon as it's generated. To avoid falling victim to these scams, make sure you download the official MetaMask app from the app store on your device, and not from any other source.

**iOS**

1. Open the App Store and hit the search button in the bottom right. Input MetaMask into the search bar.

![Install MetaMask iOS](https://support.metamask.io/hc/article_attachments/9915602462491)

1. Either click 'Get' or tap on the name of the app to see more details. Complete the usual App Store download confirmation process.
2. Once installed, open the app and follow the prompts to create your wallet.
3. Back up your Secret Recovery Phrase somewhere safe and offline!

**Android**

1. Open the Play Store and search for "MetaMask". **The official MetaMask app looks like the screenshot below. Be VERY CAREFUL that you don't install a fake MetaMask app! Look for the one with 10M+ downloads.**

![Install MetaMask Android](https://support.metamask.io/hc/article_attachments/9915891139227)

1. Tap 'Install' and wait for the process to finish.
2. Once installed, open the app and follow the prompts to create your wallet.
3. Back up your Secret Recovery Phrase somewhere safe and offline!

Alternatively, you could also access each browser's extension store and search for MetaMask. Whatever you prefer! 

## Configuring your privacy settings

When installing the MetaMask extension, you'll be able to adjust privacy settings one-by-one to ensure the app is set up according to your privacy preferences. 

To do this, simply hit the 'Advanced configuration' button in the wallet set-up process. Here you can toggle/configure settings including:

* Phishing detection
* Incoming transactions
* Additional token price information from third-party sources
* The [default RPC provider](https://metamask.zendesk.com/hc/en-us/articles/5378119120667)
* Token autodetect
* Batch account requests
* Custom IPFS gateway.

![MetaMask_Advanced_Configuration.gif](https://support.metamask.io/hc/article_attachments/12334331680539)

Don't worry if you're unsure during setup: once your wallet is up and running, you can access the same settings at any time in _Settings > Security & Privacy_. 

### **Extension permissions**

When adding MetaMask to your browser, you may ask why you’d have to approve an extension to **“read and change all your data on the websites you visit”**. Get ready, the answer is technical:

In order to enable dapps (decentralized applications) to access the blockchain, MetaMask needs to inject a [Web3](https://web3js.readthedocs.io/en/1.0/) JavaScript object into each page. By doing so, **it will not change the website**, but merely allows it to access the network. For a fuller explanation of this, see [here](https://metamask.zendesk.com/hc/en-us/articles/12412707939611). 

If you are still not convinced, a good way to experiment and manage your browser is to sandbox your [MetaMask](https://support.metamask.io/hc/en-us/articles/360015289672-Sandboxing-MetaMask): create a [separate browser profile](https://metamask.zendesk.com/hc/en-us/articles/12174759849371) so that MetaMask is only installed there. This will let you get used to MetaMask and Web3 in an environment that's separate from your existing web identity.

That said, MetaMask is safe for browsing. Welcome — you're joining over 30 million MetaMask users all over the world!

#### 

## **Next Steps**

### [**Learn the basics of blockchain and Ethereum**](https://metamask.zendesk.com/hc/en-us/articles/360015489611)

### **[User Guide: Secret Recovery Phrase](https://metamask.zendesk.com/hc/en-us/articles/4404722782107)**

### **[User Guide: Gas](https://metamask.zendesk.com/hc/en-us/articles/4404600179227)**

### **[User guide: Dapps](https://metamask.zendesk.com/hc/en-us/articles/4405506066331)**

### **[User guide: Swaps](https://metamask.zendesk.com/hc/en-us/articles/4405093054363)**

### **[User guide: Tokens](https://metamask.zendesk.com/hc/en-us/articles/4405497827355)**

### **[User Guide: Custom networks and sidechains](https://metamask.zendesk.com/hc/en-us/articles/4404424659995)**

### **[User Guide: Troubleshooting](https://metamask.zendesk.com/hc/en-us/articles/4406430256539)**

### **[Field Guide to Bridges](https://metamask.zendesk.com/hc/en-us/articles/4836913606683-Field-Guide-to-Bridges)**

### **[Hardware Wallet Hub](https://metamask.zendesk.com/hc/en-us/articles/4408552261275)**#How to speed up or cancel a pending transaction#
#### Have you tried MetaMask Activity?

MetaMask Activity is a new tool that can analyze your transactions and automatically suggest possible resolutions, and it has a built-in function dedicated to pending transactions. Why not try it out? See [here](https://support.metamask.io/hc/en-us/articles/13460965279003) for more information.

When you submit a transaction on Ethereum or a compatible network, part of the gas you pay is a bid to the network to process your transaction sooner — this element is known as the priority fee. Although MetaMask will assist you by calculating a total gas fee that is likely to have your transaction picked up, you can end up waiting a long time if you submit with a low gas price. For advice on what gas prices will result in a transaction being finalized in a reasonable amount of time, please refer to sources such as [Etherscan's gas tracker](https://etherscan.io/gastracker), or a similar tracker for whichever network you're using.

Additionally, there are sometimes circumstances where something goes wrong, and a transaction is just stuck, or pending for a very long time.

No matter how you got to this point, there are a few different ways to address it.

### Before you take any further action, your first step should be to exit and close your browser completely, reopen it, and unlock MetaMask (on mobile, just close the app and reopen it). If that doesn't solve the problem, continue with the following:

## **Speeding up a transaction**

![MetaMask speed up transaction](https://support.metamask.io/hc/article_attachments/12927043481371)

Try one of the options below:

* Wait until the network is willing to process transactions at this price
* If you haven't done so already, click that button that says **Speed Up**. This will let you re-submit the same transaction, but with a higher gas fee that should allow the transaction to be processed faster. Since this process re-uses the same nonce as the original, you do not need to pay for gas twice.

Bear in mind that **speeding up the transaction will increase the amount you're spending for the transaction**.

## **Cancelling a transaction - Method 1: In-app cancellation**

If you haven't done this already, to cancel the transaction, simply select **Cancel**, as in the screenshot above. Please note, **a cancellation can only be _attempted_ if the transaction is still pending on the network.** Transactions that have already been confirmed cannot be reversed.

## **Cancelling a transaction - Method 2: Custom nonce**

This process involves sending a new transaction with the same nonce (an identifying number for every transaction, derived from the phrase 'number only used once'). The transaction does not actually have to have any value — e.g. you could send 0 ETH. What matters is that you pay enough gas for the network to prioritize it. 

When using this method, **you will need to work backwards from the oldest pending transaction in the queue that you want to cancel**. For example, you cannot attempt to cancel a transaction with a nonce of 10 before cancelling nonce 9\. 

_The screenshots below were taken at different times, so the gas fees shown in them can vary, even from step to step. Don't let this put you off! When you do this yourself, MetaMask will automatically update in real time to show market rates._

Extension Mobile 

1. In advanced settings, turn on **Customize transaction nonce** and **Advanced gas controls.** The latter will allow you to manipulate the gas you pay and make sure your cancellation transaction is processed before the original you want to cancel.  
![MetaMask advanced settings](https://support.metamask.io/hc/article_attachments/12927064113947)
2. **Send a new transaction**. In the new transaction, send **TO** yourself, meaning your MetaMask public address. **Fill in 'Custom Nonce' with the same nonce as the transaction that is still pending**:  
![Metamask custom transaction nonce Extension](https://support.metamask.io/hc/article_attachments/13556903584795)
3. Next to the displayed gas fee on the transaction confirmation screen, you'll see a button that reads 'Market' (it can also read 'Low' or 'Aggressive' depending on your last used setting). Click it, and then click 'Advanced' at the bottom:  
![MetaMask advanced gas controls find](https://support.metamask.io/hc/article_attachments/13556957025819)  
To make sure your cancellation request is picked up as a priority, and before the original, **you will need to pay more for gas**. On this screen, edit the Follow these instructions:  
   * Set your **gas limit** _comparable to or slightly higher_ than your original transaction.  
   * Set your **priority fee** to _at least 10% higher_ (in Gwei) than the gas fee of the original (pending) transaction (e.g. if that transaction had a gas fee of 30 Gwei, set the max priority fee in the replacement/cancellation transaction to 33-35 Gwei).  
   * Make sure your **max fee** is at least 30% higher than the max fee of the transaction you're replacing. For example, if your previous fee was 150 Gwei, choose something nearer 200 Gwei this time.  
Check a gas tracker such as [Etherscan's](https://etherscan.io/gastracker) or [ETH Gas Station](https://ethgasstation.info/) for guidance on recommended max fees.

1. **In Settings > Advanced, turn on 'Customize transaction nonce'.**
2. **Send a new transaction.** In the new transaction, send TO yourself, meaning your MetaMask public address. **Fill in 'Custom Nonce' with the same nonce as the transaction that is still pending**.  
To find the custom nonce setting in the app, get to the transaction confirmation screen, which appears after you've entered the token quantity and recipient. Hit 'Edit' to change it:  
![MetaMask custom transaction nonce Mobile](https://support.metamask.io/hc/article_attachments/12927068442907)
3. Now you need to make sure your gas settings are configured so that your replacement transaction is processed. From the transaction confirmation screen, tap the highlighted gas value:  
![MetaMask advanced gas controls mobile](https://support.metamask.io/hc/article_attachments/12927041593755)  
Now access 'Advanced options' from the menu that appears.
4. From here, you can precisely adjust gas to make sure your transaction is picked up. You'll now be looking at a screen that looks like this:  
![MetaMask advanced gas controls mobile](https://support.metamask.io/hc/article_attachments/12927063201691)  
From here, adjust the gas settings. Follow these instructions to make sure your transaction is picked up:  
   * Set your **gas limit** _comparable to or slightly higher_ than your original transaction.  
   * Set your **max priority fee** to _at least 10% higher_ (in Gwei) than the gas fee of the original (pending) transaction (e.g. if that transaction had a gas fee of 30 Gwei, set the max priority fee in the replacement/cancellation transaction to 33-35 Gwei).  
   * Make sure your **max fee** is _at least 30% higher_ than the max fee of the transaction you're replacing. For example, if your previous fee was 150 Gwei, choose something nearer 200 Gwei this time.  
Check a gas tracker such as [Etherscan's](https://etherscan.io/gastracker) or [ETH Gas Station](https://ethgasstation.info/) for guidance on recommended max fees.#Address poisoning scams#
### Contents

* [How address poisoning works](#h%5F01GPGR9YPJAXM3MBVAV6ZS85GR)
* [How you can stay safe](#h%5F01GPGRA3FYCA7EEKVJT3ZEGEQY)
* [Summary](#h%5F01GPGRA8SQJZ1GA7X05TE6S9ZW)

**Address poisoning** is an attack vector that, in contrast to other scams — which often use methods that have served many scammers so well, such as unlimited token approvals, phishing for your Secret Recovery Phrase, etc. — **relies on user carelessness and haste above all else**. 

On the one hand, this method is rather innocuous compared to other scam types. However, it can just as easily result in a loss of funds. Let's investigate how this scam is usually structured.

## How does address poisoning work?

If you didn't know already, your wallet includes one or more _accounts_, each of which has its own [cryptographically-generated **address**](https://metamask.zendesk.com/hc/en-us/articles/4702972178459). These are long hexadecimal numbers, meaning they use both numerical _and_ (a few) alphabetical characters. This is a trait that makes them unintelligible to most people, and — critically — very, **very difficult to remember**. 

This is why, supported by most web3 software, you have most likely come to rely on **copying and pasting addresses**, rather than memorizing them and typing them out. This saves a lot of time and ensures, generally, you don't make any mistakes, and that your funds always go to the right address. MetaMask falls into this category of facilitating copy-and-paste: you can [copy your address with one click/tap](https://metamask.zendesk.com/hc/en-us/articles/360015289512). 

**Address poisoning speculatively exploits this copy-and-paste tendency**. Here's how:

1. You send a regular, everyday, _nothing-to-see-here_ transaction to a friend, or to another account you control.
2. The scammer, who has software that monitors transfers of certain tokens (usually stablecoins), notices. **They use a 'vanity' address generator (there are many accessible with a quick web search) to create an address that closely matches yours** (sometimes, it'll match your friend's).  
Since they're so long, crypto wallet addresses are typically shortened. You might see the first lot of characters only, or sometimes you may see the initial 5-10 or so and the final 5-10 or so, skipping the middle. This is how most people recognize addresses: not by knowing every single character, but by becoming familiar with the start and finish. This is the tendency that address poisoning preys on.  
![Address_Poisoning_1.png](https://support.metamask.io/hc/article_attachments/12273457489947)
3. **The scammer sends you a transaction of negligible value from the dummy account they created** — the 'vanity' address that mimics yours or that of your contact. Usually these are transfers of zero tokens. With this, they've **poisoned** that wallet. (Though, to be clear: this doesn't actually have any negative impacts in itself.)

![Address_Poisoning_2.png](https://support.metamask.io/hc/article_attachments/12273434617243)

1. Since their dummy address looks so similar to yours, it's entirely possible that, the next time you need your address, **you might inadvertently copy their address from your transaction history and paste it elsewhere.** Naturally, if you paste their address by accident, you'll send funds to them and not yourself/the intended recipient. And since on-chain transactions like this are immutable (cannot be altered once confirmed), the lost funds will be irretrievable.

![Address_Poisoning_3.png](https://support.metamask.io/hc/article_attachments/12273457822363)

And that's it: all they're hoping for is that you copy the wrong address from your transaction history in your wallet.

## How can I protect myself?

First off: **there's no way of stopping people — including scammers — from sending transactions to your address**. These are _public_ blockchains we're interacting with, so anyone, anywhere can do as they please. 

What we can help, though, is whether we fall victim to the scam by copying the address. This is a tricky one, and awareness is important: even those who consider themselves relatively thorough — and double-check the start and/or end of an address before they copy it — can become victims here.

Here's what we recommend:

* **Above all: check and double-check addresses before you send**. This is self-explanatory. Although it's relevant for any transaction, make particularly sure the address is correct if the assets you're sending have considerable value to you. **Checking every single character** is the only way to be completely safe.
* **Avoid copying addresses from your transaction history,** **and, if you do, check them very carefully**. This goes for both transaction history in your wallet, such as MetaMask, as well as for history shown on the block explorer. Equally, this advice applies to your own address (e.g. if you're moving funds from a centralized exchange to your MetaMask, and need to copy your MetaMask address) as much as it does the addresses of others to whom you may be sending funds.
* **Use a hardware wallet**. Hardware wallets generally require you to check and confirm any address you're sending to before allowing you to complete a transaction. Though it's possible to fall victim to this scam regardless even with this feature, this prompt may help you develop a habit of continual scrutiny of any address you use.
* **Add frequently used addresses to your address book**. In MetaMask, you can find this in Settings > Contacts. If you have a contact's address saved here, you can be confident it's the right one, and won't have to rely on copying and pasting every time you need it.
* **Consider using test transactions**. This involves sending a nominal amount of funds to an address to confirm it's correct before you proceed with a larger transaction. Naturally, this requires gas fees to be paid for two transactions, so depending on the gas price at the time, it may not be appealing.

## Summary 

* Address poisoning involves scammers sending transactions of no value to your account from an address that's very similar to your own.
* Their hope is that you will then absent-mindedly copy this address from your transaction history in future. You or whoever you're passing your address onto will then send tokens directly to them, and not to the correct address.
* Develop a habit of thoroughly checking **every single character** of an address before you send a transaction. This is the only way to be completely sure you're sending to the right place.

If you have any questions about this subject, feel free to head to the [MetaMask Community](https://community.metamask.io/) or get in touch with Support via the 'Start a Conversation' button on the homepage of this site. #How are bridge fees calculated?#
Fees vary considerably depending on the transaction. This is not due to dynamic pricing on our part, but is because each bridge works slightly differently and consumes varying levels of network resource (i.e. the computation of transactions on the blockchain).

To simplify this, we present you with a ‘return’ figure that reflects how much you’ll receive _minus_ all fees. If you want to view the itemized fee list, you can click the drop-down button in the top-right of your selected quote. 

The return figure accounts for the following (which are subtracted from the amount you receive on the destination network):

* The MetaMask transaction fee of 0.875%
* Gas on the destination network, which is generally covered by the bridge provider
* Fees to liquidity providers and validators, who relay transactions across networks
* [Price impact](https://consensys.net/blog/metamask/price-impact-the-first-gotcha-of-defi-markets/), which relates to available liquidity and how the bridge will affect it.

Separately, you will pay for gas on the source network when you sign the transaction. These gas fees can also vary depending on how the bridge is designed, and we’ve included estimates for gas costs in each quote. This means your **total fees paid will be the items in the return figure list above** **_plus_ gas fees on the source network.**#How to import a token in Portfolio#
#### Want to add a token to MetaMask?

This article is specifically about adding tokens to your portfolio in the Portfolio Dapp at [portfolio.metamask.io](https://portfolio.metamask.io/). If you're looking to add tokens to your MetaMask wallet, see [here](https://support.metamask.io/hc/en-us/articles/360015489031).

When you add your accounts to the dapp, most tokens will be detected automatically and will be reflected in the list of assets on the portfolio page. 

If you hold a token in one of your accounts and it doesn't automatically show up in your portfolio, you can add it manually. 

Search for a token Custom token 

Hit the three vertical dots next to the 'Assets' heading:

![Import token MetaMask portfolio dapp](https://support.metamask.io/hc/article_attachments/10135363696411)

This will bring up a menu that lets you search for the token:

![Import token MetaMask portfolio.png](https://support.metamask.io/hc/article_attachments/11264698535579)

Input its name and click on it, and then follow the prompts to add it to your assets list.

You won't be able to add a token unless you hold it in one of your connected accounts. 

Hit the three vertical dots next to the 'Assets' heading:

![Import token MetaMask portfolio dapp](https://support.metamask.io/hc/article_attachments/10135363696411)

From here, select the "Custom Token" tab and insert the details of the token you're looking for. If you need to find the details, head to the block explorer of the relevant network and search for the token by its name or symbol.

![Import token MetaMask portfolio dapp](https://support.metamask.io/hc/article_attachments/11264698528155)#The risks of connecting to an unknown network#
#### You should always think twice before you connect your wallet to a new blockchain network: be deliberate and think this through.

### Privacy 

One of the core principles underlying public blockchain networks is a focus on a different model of ownership: rather than the websites you visit—or have accounts with—owning your data, you and you alone hold your data through your private keys.

This does **not** mean that everything you do is private.

This does **not** mean that no one can track your transactions.

This does **not** mean that governmental authorities or other parties can't associate you with your crypto-assets.

### Technology

Parts of interacting with blockchain technology are extremely secure and encrypted: your private keys, as long as you keep them private, are extremely brute force hack-resistant. Other parts of the ecosystem can be just as traceable as Web2 technology. Are you signing up for a community project with your email? Even if you're not, are you using a VPN? What sorts of privacy measures are you taking in your internet browsing? 

And there are the gray areas that a lot of us might not think about on a daily basis. Do you have popular social network apps installed on your phone? If so, have you considered that they may be gathering extensive data on your activities, storing it and reselling it? And—is that the same phone that you're using MetaMask Mobile on? 

How careful are you about new apps you install on your phone and computer? Are you taking measures to ensure you're not installing spyware? As crypto-technologies become more and more mainstream and valuable, scammers and thieves have more and more incentive to install these malicious payloads in commonly-installed products to gain remote access to our systems and extract our private keys.

### The bottom line

Before you connect to a new blockchain network, keep in mind that a malicious network provider can: 

* Lie about the state of the blockchain
* Withhold transactions
* Record your network activity
* Record your IP address and associate it with your network activity

### At MetaMask, we believe that you should be empowered and enabled to own your data, and the first step on that path is becoming informed. For a beginner's overview of blockchain technologies, [start here](https://support.metamask.io/hc/en-us/articles/360015489611-Learn-the-basics-of-blockchains-and-Ethereum-miners-and-validators-gas-cryptocurrencies-and-NFTs-block-explorer-networks-etc-).#Network profile: BNB Smart Chain (BNB)#
Network name

BNB Smart Chain

Token

BNB

RPC

<https://bsc-dataseed.binance.org/>

Chain ID

0x38 (or 56 in decimal, or if 0x38 doesn't work)

Block explorer

[BscScan](https://bscscan.com)

Website

[binance.org](https://www.binance.org/en)

#### BSC -> BNB Chain

Binance rebranded BSC as the BNB Chain in February 2022\. For most users, the change does not result in any difference. In this article, we'll continue to use the initialism BSC — reflecting its continued widespread usage.

For more information on the change, see the [Binance announcement](https://www.binance.com/en/support/announcement/854415cf3d214371a7b60cf01ead0918).

Binance is one of the giants of the crypto and Web3 world. Amongst its many products and initiatives are its market-dominating centralized exchange, various wallets, and--last but not least--its own blockchains and their ecosystems.

This pair comprises the BNB Chain and BNB Smart Chain — to use their updated names — which coexist. Binance Chain (which became BNB Chain) went live in 2019, and is primarily used for storing and trading assets, especially on the company's own decentralized exchange, and using its token BNB. Its sibling, Binance Smart Chain (BSC) (later BNB Smart Chain), was released in late 2020 specifically to facilitate **smart contracts**. In doing so, it widened the scope of the Binance ecosystem far beyond the limitations of Binance Chain, which does not support smart contracts. **BNB Smart Chain also uses BNB** as its native token. 

BNB Smart Chain is a [hard fork](https://www.coinbase.com/learn/crypto-basics/what-is-a-fork#:~:text=Hard%20fork%3A%20A,via%20hard%20fork.%C2%A0) of the Go Ethereum (Geth) protocol, which is one of the three original implementations of Ethereum, using the [Go](https://en.wikipedia.org/wiki/Go%5F%28programming%5Flanguage%29) programming language. This means it is fundamentally similar to Ethereum, and enables it to be EVM-compatible. However, to optimise transaction costs and speed, BSC uses a different consensus mechanism: **Proof of Staked Authority (PoSA)**.

Combining elements of [delegated proof-of-stake](https://academy.binance.com/en/articles/delegated-proof-of-stake-explained) (stakers ceding their block validation obligations to nominated third parties) and [proof-of-authority](https://academy.binance.com/en/articles/proof-of-authority-explained) (where validators are vetted by a responsible body and must be trustworthy to remain a validator), PoSA significantly improves the network's scalability. There are a maximum of 21 validators on BNB Smart Chain, elected from a list of Binance-vetted candidates according to votes from delegators (those staking BNB), with voting rights proportional to staked amounts. 

Since its release, BNB Smart Chain has grown to become one of the most heavily-used EVM-compatible networks; its active address count and daily transactions far exceed Ethereum mainnet. Cheaper transactions have proven a huge draw for newcomers to Web3, and BSC has absorbed much of this demand since its launch. 

## **Using BNB Smart Chain**

**Can I use MetaMask on BSC?**

Yes; MetaMask can be used with all EVM-compatible networks. You can use your wallet to access the majority of dapps on BSC.

To do so, make sure you have added the BSC network to your wallet (see below), and that you've selected it.

**How do I add BSC to MetaMask?**

BNB Smart Chain is already configured as a popular network in MetaMask, so adding it is straightforward. Click 'Add network' and head to the 'Add popular networks' area (instructions [here](https://support.metamask.io/hc/en-us/articles/360043227612)). From here, adding it to MetaMask should only take a few clicks or taps.

The necessary network details, also displayed at the top of this page, are:

**Name**: Binance Smart Chain

**New RPC URL**: <https://bsc-dataseed.binance.org/> 

**ChainID**: 0x38 (or 56)

**Symbol**: BNB

**Block explorer URL**: <https://bscscan.com> 

For further information, see the Binance [guide](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain) to this process. This is, in general, a great primer if you're new to BSC. 

**How do I switch to the BSC network?**

When you use MetaMask on BSC, you need to make sure you've selected the network. The selected network will automatically switch over to BSC after you add it, but if you need to switch back to it, simply follow the steps below:

* **Mobile**: On the wallet page, find where it says 'Wallet' at the top of the screen. Immediately below the text it should display which network you're on. Tap to access your connected networks and switch between them.
* **Extension**: Centrally, at the top of the app, your current network is displayed. Click to access a menu of your connected networks and select the one you want.

If the network is not present in these lists, you will need to add it to your wallet. See 'How do I add BSC to MetaMask' above.

**How do I pay for transactions on BSC?**

**You'll need BNB, Binance's native token, to pay for transactions**. If you have too little, you won't be able to make any transactions. Transaction costs function similarly to Ethereum.

Firstly, your transaction needs you to pay for **gas**. Specific actions have a fixed cost in units of gas; transactions cost 21,000, for example. It is the **gas price** which varies depending on network traffic: at peak times, it's higher (you can also specify the gas price you want to pay in order to have your transaction processed sooner). A transaction will cost 21,000x the gas price at the moment it's sent. Gas prices are measured in gwei. On BSC, one gwei equals 0.000000001 BNB (mirroring Ethereum, where one gwei is 0.000000001 ETH). 

(Gas price \* gas cost) is added to a **transaction fee** to arrive at the total transaction cost. Fees are fixed at specific levels depending on the type of action you're taking. All of these details will be displayed when you confirm a transaction.

You can check the [BSC average gas price tracker](https://bscscan.com/chart/gasprice) on BscScan for an idea of what typical costs are: for example, for most of 2021 and into 2022 transactions have cost less than 7 gwei. At the time of writing, this means a normal transaction will cost $0.03 -- not bad. 

For more information on gas, see our [guide](https://support.metamask.io/hc/en-us/articles/4404600179227-User-Guide-Gas) (the contents of which apply to BSC, although written focussing on Ethereum) or the [Binance guide](https://academy.binance.com/en/articles/what-are-blockchain-transaction-fees#:~:text=How%20are%20Binance%20Smart%20Chain%20transaction%20fees%20calculated%3F). 

**Moving tokens to and from BSC**

To get your tokens onto BSC and off again, you will need to bridge them across.

Bridging involves moving tokens from one blockchain to another. Even though you can use MetaMask on BSC, this does _not_ mean that the assets in your MetaMask wallet on Ethereum (or any other network) will be available for use on BSC. 

**Never send tokens to an address on a different network**. You will probably lose them forever. That being said, it may be possible to retrieve them. See [here](https://academy.binance.com/en/articles/how-to-recover-crypto-transferred-to-the-wrong-network-on-binance) for Binance's explanation of this issue, or see the section below. 

As the official Binance Bridge was taken down in November 2021, to move assets across blockchains you can either:

* Move them to a Binance Exchange wallet and then withdraw them to a network of your choice.
* Use a bridge to move them. Binance has a list of bridges that support BSC in its docs, [here](https://docs.binance.org/smart-chain/guides/cross-chain.html).

See [here](https://www.binance.org/en/bridge) for Binance's recommended instructions. 

**I sent tokens from BSC to the wrong address/network. Can I get them back?**

This depends on the circumstances. We recommend you read [this Binance article](https://academy.binance.com/en/articles/how-to-recover-crypto-transferred-to-the-wrong-network-on-binance) first for an overview of methods for retrieving your coins. In summary: 

* **If you do not have access to the wallet you sent the transaction to, you cannot get your coins back** \-- unless you can somehow contact the owner and ask them to.
* If you sent tokens to a wallet that supports **_both_** **BSC and Ethereum** (such as MetaMask, or Binance Wallet) all you need to do is log in and switch to the correct network.
* If you sent tokens to a wallet that only supports _**one of**_ **BSC or Ethereum**, you will need to import that wallet's private key into a wallet that supports both. If you want to do this in MetaMask, see [here](https://support.metamask.io/hc/en-us/articles/360015489331-How-to-import-an-Account).

**Binance tokens: what are BEP-2 and BEP-20? Why do they matter?**

As you'll remember, Binance has two blockchains: the Binance Chain and Binance Smart Chain/BSC. Since BSC is specifically designed to be EVM-compatible and support dapps and their smart contracts, its token standard mirrors ERC-20 (the dominant token type on Ethereum). The original Binance Chain, meanwhile, does not have this requirement.

This means BNB is a different token type on each platform. BEP-2 on Binance Chain, and BEP-20 on BSC. If you have BNB on Binance Chain, for example, you'll need to do a cross-chain transfer to shift it to BSC. To move your BNB or other tokens cross-chain, [Binance recommends](https://www.binance.org/en/bridge) either:

* Moving them to a Binance Exchange wallet and then withdrawing them to a network of your choice.
* Use a bridge to move them. Binance lists [AnySwap](https://anyswap.exchange/#/router) (now rebranded to Multichain) as one option. Bridging requires you to be using a wallet that supports both networks.

**Moving tokens off the Binance Exchange to MetaMask**

Please see [this](https://www.binance.com/en/support/faq/85a1c394ac1d489fb0bfac0ef2fceafd) Binance guide to withdrawing tokens, or [our guide](https://support.metamask.io/hc/en-us/articles/4416069050011-Receiving-funds-from-Binance). The process differs depending on whether you're accessing on the app or desktop. 

Essentially, you need to grab your wallet address from MetaMask (see [here](https://support.metamask.io/hc/en-us/articles/360015289512-How-to-copy-your-MetaMask-account-public-address-)), then paste this in as the receiving address when withdrawing. Make sure you select BSC as the network and that your withdrawal is in BEP-20 format.

**Is my MetaMask BSC address the same as my Ethereum address?**

Yes. 

As BSC is EVM-compatible, MetaMask is able to access both networks using the same wallet. You simply need to change networks in MetaMask to switch between them, allowing you to view your tokens or issue transactions. 

To how to switch networks: 

**Mobile**: Find the current network at the top of the screen and tap it to select another.

![IMG_4139.PNG](https://support.metamask.io/hc/article_attachments/4427634325915/IMG_4139.PNG)

**Extension**: Click on the current network at the top of the app and select the one you want.

![Screenshot_2022-02-04_at_15.53.04.png](https://support.metamask.io/hc/article_attachments/4417727036827/Screenshot_2022-02-04_at_15.53.04.png)

**Error: "Transaction decoding is not available for chainId 56"**

This error message is generally encountered whilst transferring tokens to destinations that don't fully support the network they sent from. 

'ChainId 56' refers to BSC itself. BSC does not support transaction decoding, which is a process the destination uses to derive human-readable information from raw data. 

## 

## **Relevant support articles**

[Understanding BSC, Binance, and MetaMask](https://support.metamask.io/hc/en-us/articles/4412308177691-Understanding-BSC-Binance-and-MetaMask) (read this first, before accessing our other articles)

[User Guide: Custom networks and sidechains](https://support.metamask.io/hc/en-us/articles/4404424659995-User-Guide-Custom-networks-and-sidechains) 

[Receiving funds from Binance](https://support.metamask.io/hc/en-us/articles/4416069050011-Receiving-funds-from-Binance)

[How to send tokens from BSC to Ethereum or other chains](https://support.metamask.io/hc/en-us/articles/4404464724635-How-to-send-tokens-from-BSC-to-Ethereum-or-other-chains) 

[Sending funds to the Binance Network (BSC)](https://support.metamask.io/hc/en-us/articles/360059408871-Sending-funds-to-the-Binance-Network-BSC-)

[Transferring assets to the Binance Exchange](https://support.metamask.io/hc/en-us/articles/4411972525851)

## **Useful resources** 

[Binance Academy](https://academy.binance.com/en) (go to Topics -> Binance for articles relating to BSC)

[Binance Help Center](https://www.binance.com/en/support/)

[Binance MetaMask-specific documentation](https://docs.bnbchain.org/docs/wallet/metamask) #Third-party swaps platforms#
While MetaMask has [its own built-in Swaps tool](https://support.metamask.io/hc/en-us/articles/4405093054363-User-guide-Swaps), there's a whole ecosystem out there of third-party token swapping platforms. This article aims to point out some frequent issues that users have when swapping tokens, and serve as a **non-definitive** directory to third-party swap platform support services. _MetaMask is not affiliated with any of these organizations._

#### Keep in mind that some popular exchanges are not companies in the traditional sense, and may not offer official customer support. **Exercise extreme caution** if you are engaging with a product through a channel such as Discord or Twitter. 

#### **Most importantly: NEVER GIVE ANYONE YOUR [SECRET RECOVERY PHRASE](https://support.metamask.io/hc/en-us/articles/360060826432).**

## Third-Party Swap Support Services

* [Uniswap](https://help.uniswap.org/en/)
* [Binance](https://www.binance.com/en/support)
* [1inch](https://blog.1inch.io/academy/home)
* [SushiSwap](https://help.sushidocs.com/faqs/faqs)
* [PancakeSwap](https://docs.pancakeswap.finance/)
* [Gate.io](https://www.gate.io/help)
* [Crypto.com](https://help.crypto.com/en)
* [Kucoin](https://www.kucoin.com/support)
* [Bittrex](https://bittrex.zendesk.com/hc/en-us)
* [Kraken](https://support.kraken.com/hc/en-us)
* [Huobi](https://www.huobilearn.com/en-us/)
* [FTX](https://help.ftx.us/hc/en-us)
* [Bybit](https://help.bybit.com/hc/en-us/categories/360002714833)
* [Okex](https://www.okex.com/support-center.html)
* [WhiteBit](https://whitebit.com/faq)
* [Bitpanda](https://support.bitpanda.com/hc/en-us)
* [Hotbit](https://hotbit.zendesk.com/hc/en-us)

## DEXs vs CEXs

Decentralized Exchanges, or DEXs, are closer to something like a public service than a business. The question of "how decentralized" they are is a subject of debate, but the core reality is: a DEX is an open software project, whose code lives "in the open" on the blockchain, and with which users can interact in a dependable way, based on how the protocol is programmed. Examples of DEXs include Uniswap, Quickswap and SushiSwap, amongst many, many others.

A Centralized Exchange, on the other hand, is something more akin to an investment bank. A CEX often serves as a "fiat onramp/offramp", integrating with a nationally-issued fiat currency, and allowing users to interact with cryptocurrencies in a more traditional, bank-like environment. CEXs often report users' account and balance information to tax authorities, whereas while interacting with a DEX, this may be left to the responsibility of the user; for more information on tax responsibility, [see here](https://support.metamask.io/hc/en-us/articles/4406001678747).

## Price Impact

Price impact is a phenomenon often experienced by users participating in DeFi. For more details, [see here](https://consensys.net/blog/metamask/price-impact-the-first-gotcha-of-defi-markets/).

## Impermanent Loss

Impermanent loss is another commonly-experienced phenomenon, especially when participating in liquidity pools. For an in-depth explanation, see [our article](https://consensys.net/blog/metamask/impermanent-loss-defi-markets-gotcha-number-two/) or watch this [Finematics video](https://finematics.com/impermanent-loss-explained/).#Token safety practices#
### Keep the following token safety practices in mind on the decentralized web:

* **Anyone can mint a token and name it any way they like.** This means there are many malicious tokens disguised as popular tokens, so double-check that the token you're about to swap is the one you mean to swap. One way to ensure this is to [verify the token address.](https://support.metamask.io/hc/en-us/articles/360059683451)
* **Risk of loss:** token prices fluctuate, so the value of a token could drop dramatically after you acquire it. This means that before you acquire a token, you need to do some research. One thing to consider is the longevity of the project or asset: has it been around for a significant amount of time, or is it something that appeared out of nowhere and is skyrocketing in value?

#### Scammer Spotlight: Rugpulls

Traditional scams such as pyramid schemes have made their way into the decentralized economy, and are often referred to as [**rugpulls**](https://support.metamask.io/hc/en-us/articles/4407169552667): when the creator(s) of a token hype up their project and quickly invest a lot of liquidity into the token in order to create eye-catching growth, only to pull all value out of the token once they reach their goal value, leaving investors who didn't know the "dump" was coming with nothing. Simply put, **do your due diligence and only invest in projects that you trust.** 

* Some projects **do not have customer support.** This is due to the decentralized nature of the ecosystem: if a project runs based on a set of programmatic protocols, there may be no one keeping track of user accounts, problems, etc. In such cases, look to see if the project has a community on GitHub, Discord, Slack or another platform where you may be able to find more information.
* **A common practice in the ecosystem is _airdropping._** Again, this often happens around the launch of a project, when the project's proponents are trying to generate interest — the 'airdrop' itself consists of gifting any number of tokens to any number of Ethereum wallet addresses. This means you could end up with tokens that you don't know about; even in this case, exercise due caution if you intend on transferring, spending, or cashing out the tokens. Just because you didn't pay for a token, and someone dropped them into your wallet, doesn't mean you should blindly use them. Make sure you understand the token and what you're going to do with it.

#### Featured Phishers: Airdrop Scams

Airdrops have been around for a long time (in blockchain time, that is), and while they have plenty of legitimate uses, they can be used to artificially create interest in a non-meritorious project (see the **Rugpulls** section above) or, more nefariously, can be used to phish unwary users.

If you see some tokens in your wallet that you didn't buy, [say on Etherscan](https://support.metamask.io/hc/en-us/articles/360057536611), don't immediately jump to swap them; do some research first. A common setup for an airdrop scam is that the tokens won't swap — instead, the token will reroute the user to a website where they have to enter personal information, even their Secret Recovery Phrase, in order to allegedly cash out their tokens.

**Don't give your Secret Recovery Phrase to anyone or any website, even one that is promising you tokens or cryptocurrency in return.** 

_For an example of how one of these scams works, [here's a helpful video](https://www.youtube.com/watch?v=M4rwlfzYskw)._ 

We recommend you keep a close eye on the tokens associated with your account(s); for more information on adding tokens, and managing them, see [here](https://support.metamask.io/hc/en-us/articles/360015489031). **If you do have scam tokens airdropped to your account, just leave them there**; as we've indicated, often it's trying to do something with the tokens that ends up hurting you.

We have a more in-depth article on rugpulls and airdrop scams [available here](https://support.metamask.io/hc/en-us/articles/4407169552667-Scammers-and-Phishers-Rugpulls-and-airdrop-scams).#Marking dapps as 'favorites' in MetaMask Mobile#
In MetaMask Mobile, you can add dapps to a 'favorites' list. Start by tapping the three vertical dots in the lower right, and selecting a 'New tab':

![MetaMask_Mobile_mark_favorites_1.gif](https://support.metamask.io/hc/article_attachments/13240798751643)

Upon opening a new tab, you will be redirected to the Browse window where you can search for the dapp that you want to favorite. When you've found the dapp, tap on the 3 dots menu at the bottom right again; you should see an option to **Add to Favorites:** 

* Tap on Add to Favorites:

![MetaMask_Mobile_mark_favorites_2.gif](https://support.metamask.io/hc/article_attachments/13240798771611)

* Update / add a name
* Tap Add:

![MetaMask_Mobile_mark_favorites_3.png](https://support.metamask.io/hc/article_attachments/13240777484827)  
  
Please note, to find your Favorites, you would need to tap on the 3 dot menu at the bottom right, and tap on **New Tab,** as described earlier.#Does MetaMask support ERC-1155?#
#### NFTs in the Portfolio Dapp

Have you heard about the MetaMask Portfolio Dapp? It displays all your NFTs in a consolidated portfolio view, and may mean you don't need to add them to MetaMask at all.

Give it a try at [portfolio.metamask.io](https://portfolio.metamask.io/) or click the link from MetaMask Extension.

**ERC-1155 tokens are supported by MetaMask Mobile and Extension**, meaning your wallet can receive and store assets aligned with this token standard.

Images associated with these assets are also **visible on Mobile**, and we are working on extending this functionality to Extension. 

**MetaMask does not yet support sending your ERC-1155 tokens**, although we're working to implement this feature soon. In the meantime, we recommend you use a platform that supports ERC-1155 transfers, such as OpenSea. #What to do when your balance of tokens is incorrect#
#### Tokens not showing up at all?

See our guide to troubleshooting this issue [here](https://support.metamask.io/hc/en-us/articles/360059232852).

First of all, verify the token balances shown on the block explorer and compare with MetaMask. You do this by copying your wallet address and pasting it into the block explorer corresponding to the network you're on — Etherscan for Ethereum mainnet, Arbiscan for Arbitrum, etc. For detailed instructions, see [here](https://support.metamask.io/hc/en-us/articles/360057536611).

Extension Mobile 

If your MetaMask Extension is displaying the incorrect or inaccurate balance for ETH or other tokens, try the steps below one by one until you see your balance correctly.

**Before proceeding, make sure that you have your [Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/4404722782107-User-Guide-Secret-Recovery-Phrase-password-and-private-keys) backed up in a safe place.**

1. Check that your internet connection is strong and stable. If not, MetaMask may be unable to load the correct balances.
2. Close down your browser where you have the MetaMask extension installed and open it again.
3. Try switching off any ad blockers you have installed, or, if you're using a VPN, try using MetaMask with it turned off.
4. Switch to a different network and back again. To do this, click on your current network at the top of the app. Select a different network, and then switch back to your original network again.
5. Make sure you're not experiencing a [browser permissions issue](https://support.metamask.io/hc/en-us/articles/360038139452-MetaMask-states-Balance-may-be-outdated-displays-in-orange-or-ETH-not-added-to-balance).
6. Try a different RPC URL, if there is more than one available for the network you're using. You can edit the RPC URL by going to Settings > Network, and then clicking the network in question. See our [article on adding networks](https://support.metamask.io/hc/en-us/articles/360043227612) for more information.
7. Install MetaMask using another supported browser (Firefox, Chrome, Brave, Edge) from our official website [https://metamask.io](https://metamask.io/) , and then try restoring your wallet using the 12-word Secret Recovery Phrase in case the issue is only present in the browser you are currently using.

Once you've verified on Etherscan that the amount of tokens being displayed in MetaMask Mobile is incorrect, follow these steps:

1. Make sure your internet connection is strong and stable. If it isn't, token values may not be up to date.
2. Change to a different network and then switch back again.
3. Change the RPC URL of the network you're on to an alternative, where possible. See our [article on adding networks](https://support.metamask.io/hc/en-us/articles/360043227612) for more information.
4. Hide the token, following instructions [here](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask#h%5F01FWH499MRDT5QC4R3KNPQNRWB), and then re-add the token, following instructions [here](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask).
**If the token in question is a network native token for a network other than Ethereum** (BNB, AVAX, MATIC, etc), try [deleting the network](https://support.metamask.io/hc/en-us/articles/4502810252059-How-to-remove-networks) and then [re-adding it](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC).  
  
**If the token in question is ETH, then make sure that your [Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/4404722782107-User-Guide-Secret-Recovery-Phrase-password-and-private-keys) is backed up in a safe place**, and reinstall the app.

If you're still encountering issues after trying these steps, please get in touch with us via the 'Start a Conversation' button on our [support page](https://support.metamask.io/hc/en-us).

#### Does the token have built-in mechanisms that affect supply or value?

Ethereum and EVM-compatible chains are home to an enormous variety of tokens with different utilities. Some tokens are designed to dynamically change supply or value according to various conditions:

* [Rebase tokens](https://support.metamask.io/hc/en-us/articles/4405497827355-User-Guide-Tokens#:~:text=Elastic%20supply%20/%20Rebase%20/%20Algorithmic%20tokens), where token supply is adjusted
* Tokens with 'taxes' applied to transactions of different kinds (e.g. simple transfer, swap, sell, etc.). These are sometimes referred to as 'fee on transfer' tokens.

Before you conclude that your balance is incorrect, check whether any similar conditions apply to your token. You can usually find this information by checking the project's white paper or documentation.#Using advanced gas controls#
Advanced gas controls are an optional feature that gives you more control over the gas you pay in MetaMask. For more information on gas, see our [guide](https://support.metamask.io/hc/en-us/articles/4404600179227-User-Guide-Gas). 

The methods for turning on and using advanced gas controls vary depending on whether you're using MetaMask Extension or Mobile. Regardless, keep these details in mind:

The gas limit

The _gas limit_ is the **maximum amount of gas units you are willing to pay for** in order to carry out a transaction or EVM operation.

The max priority fee

The _max priority fee_ goes to the validator, and incentivizes them to prioritize your transaction.

The max fee

The max fee is the total, global amount paid for your transaction: **base fee + priority fee.** 

Remember that **gas you pay is not charged or collected by MetaMask**, and not something we can control. 

Extension Mobile 

Click on your account icon, then find 'Advanced gas controls' under 'Advanced' in the settings menu: 

![MetaMask advanced gas controls](https://support.metamask.io/hc/article_attachments/12771182155419)

Once you've flicked this switch, you'll see an icon above your gas details when you next attempt a transaction. This will likely read 'Low', 'Market, or 'Aggressive' depending on the last setting you used: 

![MetaMask_Advanced_gas_market.png](https://support.metamask.io/hc/article_attachments/13074858261659)

Clicking on this button will allow you to choose between one of these three options. These describe the amount of gas you're choosing to pay, and have these main implications:

* '**Low**' allows you to wait a bit longer and save money if you choose.
* '**Market**' reflects the current market rates for gas.
* '**Aggressive**' enables you to be more forceful with your transaction, and have it completed as soon as possible.

![MetaMask edit gas fee](https://support.metamask.io/hc/article_attachments/12771583771035)

**MetaMask Mobile already has the ability to precisely configure gas built-in**; you do not need to enable it in settings.

When you get to the final screen before sending your transaction, you will see an "**Estimated gas fee**". To the right, the fee will appear underlined in blue:

![MetaMask advanced gas controls mobile](https://support.metamask.io/hc/article_attachments/12771126658459)

Click on the fee, and a menu will appear with a slider, and another option to click on "Advanced Options". When you do, this menu will open and you will have the opportunity to customize your gas fully:

![MetaMask advanced gas controls mobile](https://support.metamask.io/hc/article_attachments/12771177715995)#Learn the basics of blockchains and Ethereum (miners and validators, gas, cryptocurrencies and NFTs, block explorer, networks, etc.)#
#### New to crypto and web3?

Head to [MetaMask Learn](https://learn.metamask.io/) for a straightforward learning experience designed specifically for newcomers to web3\. It's completely free, available in multiple languages, and includes useful tools such as simulations to help you find your feet with MetaMask.

### What is a blockchain?

#### A blockchain is a type of _**distributed ledger technology.**_ Let's break that down.

Traditionally, a digital database is kept in a specialized computer called a server. This server would be accessed by people who are granted permission to do so; it could be made public, or private, or somewhere in between, but everyone is accessing that same database—it's **_centralized._**

What's more, it's probably controlled by a certain set of people, and at the end of the day, we have to trust that the data is being kept safe and is accurate (and not being used for purposes that go against our own interests!). The downside to this is, of course, what if someone isn't acting in good faith? What if someone hacks the database and changes things, or steals information for their own purposes (or sells it as part of their business model)?

A blockchain—and in particular, a **_public_ blockchain**—is, at its core, a different kind of database. The word _ledger_ is used to describe it. Like a ledger, a blockchain is very good at keeping track of assets coming and going, but it can store lots of different kinds of information. However, rather than having this ledger all in one computer (centralized), it's synced across a number of different computers known as **_nodes_**: it's **_decentralized_** or, as it's often called, **_distributed_**.

All of those nodes are constantly syncing information between each other about transactions on the ledger: assets moving from one _address_, or account, on the network to another. These transactions are checked against the ledger's history to ensure that they're valid. Once enough nodes have verified a new transaction, it gets confirmed and becomes _final_. After a certain amount of time, or every certain number of transactions, the network will bundle up all those finalized transactions and seal them, using cryptographic software tools, into a **_block_**. This block is identified with a _hash_ produced by those cryptographic tools: this encrypts details about the block into a long hexadecimal number. The next block will use the previous block's hash as a starting point, and so the entire history of the ledger, and therefore of the network, is linked together in a _chain_ of _blocks_ containing _transactions_: **the blockchain.**

### What is Ethereum?

[Ethereum](https://www.ethereum.org/) is a public blockchain network with a vast vision. Ethereum's designers realized that if you built a public blockchain network, you could do a lot more than just track digital currency: you could run a **global public computer**, always available and open to the world. And that's what Ethereum is: it's a global network that is capable of running programs on the [Ethereum Virtual Machine](https://ethereum.org/en/developers/docs/evm/), or **EVM.** Programs are written for the EVM in a language called [Solidity](https://soliditylang.org/), and the network uses a cryptocurrency, called **ether** (or **ETH**, pronounced "eeth") to compensate the people that maintain the network—and also as a token of value for transactions carried out on the network. 

### 

### So, how do you coordinate all that?

As mentioned previously, an essential function of a blockchain network is coordinating the process of agreement between all the nodes in the network regarding whether a transaction is valid or not. The agreement is referred to as _consensus_, and the process by which it occurs is called a _**consensus mechanism**,_ or _consensus protocol_. Two different consensus mechanisms are relevant for Ethereum, the first being **Proof of Work (PoW)** and the second **Proof of Stake (PoS)**. PoW was replaced by PoS on Ethereum mainnet in 2022.

In both mechanisms, computers are provided to do the work of verifying the validity of the transactions, and agreeing on them.

### What are miners? And is a validator the same thing?

Under **PoW consensus**, actors known as '**miners**' carry the responsibility of verifying the transactions, creating the blocks, and maintaining the chain. In exchange, these miners are given a reward (in ETH) each time their node is the first to finalize, or mine, a new block; this also incentivizes miners having good-quality equipment and connection speeds, which in turn helps the network.

However, there exists the possibility for enough miners to band together—at least 51% of the network—and subvert control of the network to their own ends, rewriting the transaction history, stealing tokens, etc. In order to prevent this and other security problems, the mining is made intentionally difficult, that is, computationally complex (often called "expensive") in order to make it virtually impossible for any rogue actor(s) to carry out a so-called '51% attack'.

This design—made to keep the network safe—has side effects, in particular environmental and real-world economic ones; the economic model on the blockchain is also inefficient. The constant incentive to mine blocks faster means that miners have a real motivation to buy new computers, even specialized ones that do nothing other than mine on blockchains. And big, powerful computers use a lot of electricity, and generate a lot of heat. This environmentally-unfriendly, inefficient arms race is difficult to justify, on a number of points.

Enter **PoS consensus**: instead of miners, **validators** are the actors ensuring transaction validity and network integrity. In place of costly number-crunching as a security measure, each validator must have **_staked_** 32 ETH; that is, deposited it in a **_smart contract_,** a kind of computer program that lives on the Ethereum blockchain, with the promise that they will operate their validator according to the rules. If they act in bad faith, or try to subvert or attack the network, or just don't maintain enough connectivity, their staked currency will be **_slashed_**, or taken from them. If they do what they're supposed to do, maintain connectivity and confirm transactions, they will be rewarded with ETH, the same as miners. For more on PoS, see [here](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/).

### PoS vs. PoW: which does Ethereum use? 

Ethereum currently uses PoS, which means the mainnet (i.e. the current single blockchain in use) relies on special nodes called validators to create and confirm the validity of blocks, and also to secure the ongoing integrity of the network. Ethereum switched from PoW to PoS on September 15, 2022, representing a reduction in a 99% reduction in energy expenditure.

### What is gas, and why do I have to use it?

_Gas_ is the unit of measure for how much computational work is required to process transactions and smart contracts on the Ethereum Virtual Machine (EVM). More complex smart contracts, and code, will require more gas to execute, in the same way that a bigger, more powerful car takes more gas to run.

Calculating gas used to be very complicated, but as of the implementation of Ethereum Improvement Protocol **(EIP) 1559** on August 4, 2021, it was greatly simplified. Essentially, you pay a **base fee** for every unit of gas, which is _**burned**_, or disappears, upon successful completion of the transaction. On top of the base fee, you add a **priority fee**, again per unit of gas, the value of which depends on how quickly you want the transaction to go through.

Here are some essential details for dealing with gas **in MetaMask:**

#### **The gas limit**

The _gas limit_ is the **maximum number of units of gas you are willing to pay for** in order to carry out a transaction or EVM operation. A standard transaction sending ETH normally costs **21,000 gas**.

#### **The max priority fee**

The _max priority fee_, also referred to as the "miner tip", goes to the miner or validator, and incentivizes them to prioritize your transaction. Most often, the value you put in for "max priority fee" will be the amount you pay.

#### **The max fee**

The max fee is the total, global amount paid for your transaction. It is calculated as: (**base fee + priority fee) x units of gas used.** The difference between max fee per gas and base fee + max priority fee per gas is “refunded” to the user.

**Want to know more about gas? Start [here](https://metamask.zendesk.com/hc/en-us/articles/4404600179227).**

### Tokens

Aside from ether, the _native currency_ of the Ethereum network, there are two main types of tokens that get used on Ethereum: [ERC-20](https://eips.ethereum.org/EIPS/eip-20), which are "fungible" tokens and correspond to what people call "**cryptocurrencies**", and [ERC-721](https://eips.ethereum.org/EIPS/eip-721) and [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155), the "non-fungible tokens", the origin of the acronym [**NFT**](https://ethereum.org/en/nft/#gatsby-focus-wrapper). 

The difference between the two is, of course, highly technical, but it boils down to the difference in the name. ERC-20 tokens are designed specifically to be fully interchangeable and liquid, the way a traditional fiat currency is. Like a dollar, for example, every single ERC-20 token of the same type has the exact same value: this is what "fungible" means.

ERC-721 and ERC-1155 tokens, on the other hand, are specifically designed to be unique and non-replicable, but of course can be transferred between parties, [often for significant value](https://www.nytimes.com/2021/03/11/arts/design/nft-auction-christies-beeple.html). ERC-721 is the _OG_ NFT standard on Ethereum, and provides a blueprint for "minting" (creating) one-off, distinct NFTs. ERC-1155 came a little later, and standardizes a way for minting multiple NFTs (and indeed fungible tokens) simultaneously.

### How do I access Ethereum?

Because a blockchain network is a separate network, different and distinct from traditional Internet connections, specific software is necessary to access the network and show the data being recorded on the blockchain. This is possible through an Ethereum **_client_**, which is standalone software, often command-line interface only, and is the tool of choice for many developers. Additionally, the Ethereum community has developed a number of resources that allow connections between the traditional Internet and the Ethereum network.

The backbone of these efforts has been [MetaMask](https://metamask.io/), a trailblazing browser plugin and mobile app that provides users with a custodial (user-controlled and owned) Ethereum wallet and access to **_dapps_**, or decentralized apps, that allow you to interact with the Ethereum blockchain.

### What is a block explorer?

When you want to go deeper and see details of individual transactions or take a bird's eye view of the Ethereum network, a block explorer is required. A block explorer is a website that provides an interface to navigate and examine the information contained on the network. Prominent examples include [Etherscan](https://etherscan.io/) and [Ethplorer](https://ethplorer.io/), and other networks related to Ethereum ("EVM-compatible") have their own variants.

### 

### Ethereum mainnet, testnets, sidechains and the rest

As you venture forth into the decentralized web, or **_Web3_** as it's often called, you will learn that Ethereum is, in fact, not just one network. The Ethereum blockchain and the EVM live and operate on the _Ethereum mainnet_, and there exist a number of [_testnets_](https://metamask.zendesk.com/hc/en-us/articles/360059213492) for Ethereum that are exactly what they sound like, sandboxed versions of the mainnet where ETH has no real value except to test out applications. 

That's just the beginning, though; there are many Ethereum-compatible _sidechains_ that have been developed, offering users the option to carry out transactions on a separate blockchain, in that chain's native currency, in order to avoid the sometimes-costly EVM and Ethereum mainnet transaction fees. Some of these chains are designed specifically for a use case, such as a video game or DeFi; others are general-purpose "scaling networks", called Layer 2s or L2s, for the purpose of increasing the volume and capacity of Ethereum.

Users often end up with tokens and NFTs on these sidechains that they can bring back onto Ethereum mainnet through [bridges](https://metamask.zendesk.com/hc/en-us/articles/4836913606683-Field-Guide-to-Bridges); the NFTs can be kept, displayed, sold on marketplaces; the tokens can be swapped for others, redeemed for ETH, staked, borrowed, lent, used in other dapps, transferred to other sidechains and used in videogames, or [videogame-investment engine hybrids](https://aavegotchi.com/), or, well... the future is still being written.#How to adjust MetaMask privacy settings (Extension)#
At MetaMask we take user privacy seriously, and continually work to give you the options to configure data usage in a way you're comfortable with. 

Head to Settings > Privacy & Security to view your privacy settings. Here you can configure:

* **Incoming** **transactions**: We use your account address to retrieve data from Etherscan about transactions such as airdrops or others sent to your address. If this is turned off, you'll only see confirmed transactions. Please note this feature only works with Ethereum mainnet and the Goerli and Sepolia testnets.
* **Phishing detection**: This setting allows MetaMask to identify the site you're visiting and display a warning message if it matches our lists of known and suspected phishing sites. Read more about this mechanism [here](https://support.metamask.io/hc/en-us/articles/4428045875483).
* **MetaMetrics**: If you have this turned on, you're allowing us to gather non-sensitive details about your MetaMask usage to help inform how we improve the app. Read more about MetaMetrics [here](https://support.metamask.io/hc/en-us/articles/6921789658523).
* **Batch account balance requests**: As the description suggests, if this is turned on, you're allowing us to fetch account balances from the network for _all_ of your accounts, even those that aren't active. _Active_, in this context, means you have the account selected in MetaMask. If you turn this setting off, balances are only updated when you access (switch to) each account in MetaMask.#What happens when I initiate a transfer on a bridge?#
1. If you’re transferring an ERC-20 token, you’ll need to sign a [token approval](https://support.metamask.io/hc/en-us/articles/6174898326683-What-is-a-token-approval-) from your wallet, enabling the bridge to access the tokens on the source network.
2. **Source network transaction**: You sign a transaction to deposit your tokens into the bridge on the source network. The cost of the transaction—which is the only one you’ll need to sign in the bridging process—is: transfer amount + bridge provider fees + gas fees + the MetaMask fee (for more on fees, see [here](https://support.metamask.io/hc/en-us/articles/10056707767963)).
3. **Destination network transaction**: The bridge provider will initiate the transaction on the destination network once the transaction in step 2 has been validated. You don’t need to pay for this step, as its costs are usually covered by the fees you’ve paid in step 2.

You’ll be able to track the status of each bridge within our platform.#How to remove an account from Portfolio#
#### Looking for how to remove an account in MetaMask?

This article is about removing accounts from the Portfolio Dapp, at [portfolio.metamask.io](https://portfolio.metamask.io/). For information on removing accounts in MetaMask, see [here](https://support.metamask.io/hc/en-us/articles/360057435092).

![How_to_remove_an_account_from_Portfolio.gif](https://support.metamask.io/hc/article_attachments/11994182420891)

Head to the account menu at the top of the page. 

Now find the account you want to remove and click the three vertical dots next to it to access the 'More actions' menu.

In this menu, simply hit 'Remove account'. You'll be prompted to confirm. When you do, it'll be removed from your portfolio. #"Deceptive site ahead" when trying to connect to a site#
This warning message appears when you attempt to connect your wallet to a site that may be a phishing scam. It will look like this: 

![MetaMask_phishing_detection_screen.png](https://support.metamask.io/hc/article_attachments/13921484870939)

**We recommend you don't connect your wallet to sites that trigger this message**.

If you're the owner of the site and believe it has been wrongly marked as a potential scam, please log your case here: <https://github.com/metamask/eth-phishing-detect/issues> 

One of our team will then review your case as soon as feasible and may whitelist your site depending on their findings. 

You can also use [this utility](https://metamask.github.io/eth-phishing-detect/) to check why your domain was blocked, and see [here](https://github.com/MetaMask/eth-phishing-detect) for the rationale behind blocklisted sites. #What is Infura, and why does MetaMask use it?#
## What is Infura?

[Infura](https://infura.io/) is the service provider that MetaMask uses to get information on and off of blockchains.   
  
### How does it work?

Ethereum and other blockchains use a different combination of protocols and technology than your traditional Internet network. Yes, it still uses the same physical conduits as traditional Internet, but in terms of the software, it's a separate network; there's no URL you can go to that "gets you onto Ethereum" in the way we're used to. 

To access these networks natively and see the data being passed across them, you would have to install what's known as a _client_. This is generally a fairly small program that runs as a command-line interface. In other words: no graphics, just text.

That's not very useful for a lot of people, and it's certainly not as fun as a rich Web-like experience. And besides that, sometimes for development purposes, it's much more useful to be able to build a program in a different environment that then communicates with the blockchain "remotely", without running a client at the same time.

So most public blockchain networks, Ethereum included, build what's called an API. If you're not familiar with the technology, think of it as a kind of menu: programmers can ask the blockchain for certain data or record data to the blockchain, using specifically-formulated requests. And if the information they're looking to request or record isn't on the menu, well, they can [make a proposal to the community to change the menu](https://eips.ethereum.org/). 

### OK, but what's Infura's part in all that?

Infura provides what are called _endpoints_ to Ethereum's API. If we're thinking in terms of a menu at a restaurant, then Infura is like a server, or a cashier: the person who takes your order and rings you up. Infura provides an endpoint that your code can 'point to', so that your requests to receive or record information can always get to the network. And, of course, they return to you the information you've requested.

Like a restaurant, Infura does charge for this service, but only after you've made a _lot_ of requests in one month. For developers who are just testing something out, it's free to start and easy to set up an account.

### Why does MetaMask use Infura?

MetaMask has always used Infura as an endpoint provider due to their second-to-none reliability and availability.

As blockchain traffic scales, MetaMask users need to be able to submit requests to the blockchain, no matter where they are, what they're asking to do on-chain, and how many people are doing it at once. There are, of course, limiting factors to this: the more on-chain activity there is, the more congested the network is, and gas fees will be affected, and at the end of the day, only so many transactions can go into each block. But at no point should your endpoint provider be the bottleneck in that scenario. That's when Infura's capacity for traffic shines, no matter which NFT is dropping.

More recently, Infura and MetaMask have both become part of ConsenSys Software, which is enabling the teams to work together more tightly and ensure this kind of quality experience continues.

Additionally, Infura offers endpoints for more blockchains than just Ethereum, and as we move into a world of many blockchains, this kind of reliable support for multiple chains will be essential.

### Do I have to use Infura?

No! MetaMask always has been and always will be a tool that empowers its users, and users can change the RPC (the protocol that most blockchain APIs use) endpoint.

If you had an alternative Ethereum endpoint—for example, if you're running a local node—you could add that provider to your MetaMask wallet under the name "Private Ethereum endpoint" by following [these steps](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC).#Network profile: Polygon (MATIC)#
Network name

Polygon Mainnet

Token

MATIC

RPC

https://polygon-rpc.com/

Chain ID

137

Block explorer

[Polygonscan](https://polygonscan.com/)

Website

[polygon.technology](https://polygon.technology/)

Polygon styles itself as "Ethereum's internet of blockchains". In short, Polygon is a collection of tools and features which improve the scalability of Ethereum and connect [EVM-compatible](https://support.metamask.io/hc/en-us/articles/360015489611-Learn-the-basics-of-blockchains-and-Ethereum-miners-and-validators-gas-cryptocurrencies-and-NFTs-block-explorer-networks-etc-#:~:text=Ethereum%27s%20designers%20realized,Machine%2C%20or%20EVM.) networks. 

Recognising that high demand for Ethereum mainnet has increased transaction fees and congestion, Polygon's solutions are intended to expand capacity and dramatically reduce transaction costs for users. Founded as Matic Network in 2017, the project completed a rebrand in February 2021 to its current name, although keeping the name of its token, MATIC, consistent throughout. 

From a user perspective, the main element of the Polygon project is likely to be the **Polygon Proof of Stake (PoS) network**. This is a **sidechain**: its own network, distinct from Ethereum mainnet, although accessible via **bridges** (see _Using bridges_ below). 

In addition to the PoS, the Polygon team is also working on several layer 2 (L2) networks, which are in varying stages of development, and which you can find under the 'Solutions' tab on their homepage. It also has a highly active ecosystem of dapps, including DeFi, gaming, and NFTs — all recorded at [awesomepolygon](https://awesomepolygon.com/dapps/). 

## **Using Polygon**

**MetaMask is Polygon-compatible**

Polygon is an EVM-compatible network, which means you can use your MetaMask wallet to access dapps on Polygon. You will have the same address, and simply need to [make sure you have Polygon added as a network in MetaMask](https://support.metamask.io/hc/en-us/articles/360043227612), and switch between Ethereum and Polygon as appropriate. 

**ERC-20 MATIC vs. MATIC on Polygon**

The most important thing to bear in mind when using Polygon is the form taken by its native token, MATIC.

MATIC is commonly bought/traded on both centralized and decentralized exchanges as an [**ERC-20 token**](https://support.metamask.io/hc/en-us/articles/4405497827355-User-guide-Tokens#:~:text=ERC%2D20%20Tokens,add%20it%20manually.), i.e. a token usable on Ethereum. If you want to use these ERC-20 tokens on Polygon itself, **you will need to use a bridge to swap your ERC-20 MATIC 1:1 for Polygon network MATIC** (see below). 

For example, when you buy on a centralized exchange (e.g. Binance, Coinbase, Kraken), your ERC-20 MATIC will go straight into your exchange wallet. **Do not** send this straight to the wallet you intend to use on Polygon -- you may lose the tokens. This is the because the **exchange's wallet is unlikely to support Polygon**. Theoretically, these funds could be retrieved by importing that wallet's private key into another wallet, such as MetaMask. However, as wallets generated by centralized exchanges are typically custodial, you would need to be able to obtain the wallet's private key through customer support routes -- which might not be possible.

Generally:

* ERC-20 MATIC on Ethereum is more useful for [staking](https://wallet.polygon.technology/staking/) or delegation.
* MATIC on Polygon is more useful if you want to make transactions on Polygon mainnet. This includes interacting with dapps.

**Can I send MATIC from one MetaMask wallet to another without bridging?** 

**If you send MATIC from one MetaMask wallet to another without bridging, you will not lose the tokens.** This is because MetaMask supports both networks. Just make sure you have the right network selected and that you[ have the token added](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask), and your tokens will be visible.

#### For example:

Let's say you have two MetaMask addresses -- wallet A and wallet B. Wallet A holds 100 MATIC on the Polygon network. If you send 10 MATIC to wallet B without bridging, all you need to do to access those tokens is switch wallet B to the Polygon network, and they will be there (assuming the transaction is complete and that the tokens have been added)

However, if you wish to transfer your MATIC from Polygon to Ethereum (convert them into ERC-20) or vice versa, you will need to use a bridge.

**Using bridges**

The [Polygon bridge](https://wallet.polygon.technology/) lets you exchange ERC-20 (Ethereum network) MATIC for MATIC that you can use on Polygon, and vice versa. Simply connect your MetaMask wallet, and you will be able to choose how much you want to deposit. 

The [Polygon bridging FAQ](https://docs.polygon.technology/docs/faq/wallet-bridge-faq/#:~:text=How%20do%20I%20bridge,do%20your%20own%20research) also details several other bridges available. 

**Does Polygon use my normal MetaMask address?**

Yes. Polygon is EVM-compatible, so an Ethereum wallet address (such as the one your MetaMask uses) can be used as an address on Polygon. 

**Can I buy non-ERC-20 MATIC tokens?**

If you want to bypass ERC-20 MATIC and go straight to MATIC usable on Polygon, you could:

* [Buy directly on Polygon](https://wallet.polygon.technology/on-ramp/). Read more about these methods [here](https://blog.polygon.technology/polygon-deploys-fiat-on-ramps-via-alchemy-pay-enabling-direct-fiat-payments-for-defi/).
* Buy MATIC from an exchange which supports Polygon mainnet, such as Binance.com (n.b.: not Binance.us) or Crypto.com. When withdrawing to the wallet you want to use for transactions on Polygon, make sure you select Polygon as the network (if there is an option).

**I sent Polygon network MATIC to a wallet that does not support the tokens. Can I get them back?**

If the wallet is EVM-compatible, see if you can export your private key. 

Once you have it, [import the wallet into MetaMask](https://support.metamask.io/hc/en-us/articles/360015489331-How-to-import-an-Account). Once the import is complete, you should be able to add the Polygon network to that account and view the tokens. 

However, if you sent the tokens to a wallet you do not control--e.g. by inputting the wrong address--you cannot use this method to get the tokens back.

## 

## **Relevant support articles**

[How to send tokens from your MetaMask wallet](https://support.metamask.io/hc/en-us/articles/360015488931-How-to-send-ETH-and-ERC-20-tokens-from-your-MetaMask-wallet)

[User guide: Tokens](https://support.metamask.io/hc/en-us/articles/4405497827355-User-guide-Tokens)

[User Guide: Custom networks and sidechains](https://support.metamask.io/hc/en-us/articles/4404424659995)

[Using MetaMask Swaps to buy Polygon tokens on Ethereum mainnet ](https://support.metamask.io/hc/en-us/articles/4404417979035-Using-MetaMask-Swaps-to-buy-Polygon-tokens-on-Ethereum-mainnet)

## **Useful resources**

[Analyzing Polygon's Proof of Stake Network](https://consensys.net/blog/blockchain-explained/analyzing-polygons-proof-of-stake-network/) (ConsenSys Blog)

[Polygon wallet and bridging FAQ](https://docs.polygon.technology/docs/faq/wallet-bridge-faq/)

[awesomepolygon](https://awesomepolygon.com/) (register of Polygon dapps)#How to use Liquidity Pool (LP) tokens#
### Several of the most powerful decentralized finance (DeFi) tools involve depositing tokens into _liquidity pools_. In exchange, the depositor is given _Liquidity Pool Tokens_. These can be put to use — **but if you misuse them, you can lose all your value.** 

Liquidity Pool tokens are an interesting token type, as they can be minted in a variety of ways. Uniswap currently mints them as ERC-721 tokens, whereas SushiSwap mints them as (often fractions of) ERC-20 tokens. What's really crucial to understand is not just what they're made of, but **_what they represent_, and what this means about what you can do with them.**

Let's say you deposit $2000 USD in stablecoins and 0.5 ETH into a liquidity pool. You've put (at today's prices) about $4K USD into that pool. Let's say that, in exchange, you're given 200 liquidity pool tokens. Each one of those tokens represents a proportional part of your deposit, in this case $10 USD and 0.0025 ETH (at the time of deposit; price fluctuations can and will change this, this is another topic, known as '[impermanent loss](https://consensys.net/blog/metamask/impermanent-loss-defi-markets-gotcha-number-two/)'). **_Within the liquidity platform_, you will be able to add and remove liquidity in this proportional manner, converting LP tokens to the underlying tokens and vice versa.** 

**If you try to swap these LP tokens directly for another currency (ETH, BNB, etc) via MetaMask Swaps tool or a third-party swap platform, the following is likely to happen:** 

* You may be given a **very low quote** for your tokens
* If swapping on MetaMask Swaps, **you may be presented with a warning that a price is not available**, due to the fact that not many people are trading these tokens
* If you go through with the trade, **you are likely to end up with a very, very small fraction of the value** you initially put into the liquidity pool
* **This will be irreversible**; the blockchain cannot reverse any transactions, including these
* **You can't go back and remove your liquidity**; you've traded away your proof of ownership

Let's look at another scenario, where, like on Uniswap, the platform gives you an ERC-721 in exchange for your liquidity pool deposit. Let's suppose, as above, that you've put in $2000 USD in stablecoins and 0.5 ETH. Then, instead of withdrawing the liquidity through the same platform as you started with, you decide to swap your LP token for ETH. What happens?

* All the above possibilities apply
* Additionally, the recipient of the LP token has the ability to go back to the platform and withdraw the liquidity the way it's meant to be withdrawn; you've effectively transferred your holdings to someone else. If you're trading on a platform where someone has access to the traded assets, they could do that; if it's a DEX, however, those funds might simply be lost forever.
* You will, most likely, not be able to recover those funds.

### So what do I do to make sure this doesn't happen to me?

DeFi platforms can be a confusing experience; they're often very exciting websites with minimalist UI and little context for users.

* So first of all, try to find some support or guides as to how to use the product. If you can't find anything like that, maybe reconsider using the product.
* If you deposit tokens into a liquidity pool, **only handle them the way the LP platform says you should, and never try to swap LP tokens directly for a single token.**
* If you've got multiple layers of pooling or staking going on, and you wish to withdraw, again follow the platform's instructions, but think in terms of undoing every step you did to set up your 'stack' in the first place#How to externally verify that your balance is correct#
## Feel like your ETH balance is wrong? Do you think you should have more or fewer tokens?

### Here is a process to verify your balances outside of MetaMask.

Etherscan, an Ethereum block explorer, has tools to help you visualize and confirm when your balances changed, and how much. This article will focus on two of those tools: the [**ETH Balance Checker**](https://etherscan.io/balancecheck-tool), and the [**Token Balance Checker**](https://etherscan.io/tokencheck-tool). The process is the same for both tools, so choose the appropriate one from the links below. If you're confused about the difference between ETH and tokens, check out [our guide](https://support.metamask.io/hc/en-us/articles/4405497827355).

Most block explorers for other EVM-compatible networks, such as [Polygonscan](https://polygonscan.com/tokencheck-tool) or [Snowtrace](https://snowtrace.io/tokencheck-tool), will have similar functions.

### Etherscan Balance Checker Tools

If you're concerned about your ETH balance, Etherscan's ETH Balance Checker is [here](https://etherscan.io/balancecheck-tool). If it's a different token, use [this one](https://etherscan.io/tokencheck-tool).

For example, let's say you received some ETH, and looking at your balance, you feel like it's not right. Well, [copy your MetaMask wallet address](https://support.metamask.io/hc/en-us/articles/360015289512) and paste it into the checker, enter today's date, and click "Lookup".

_For the token checker, you'll need some additional information: the [contract address of the token](https://support.metamask.io/hc/en-us/articles/360059683451), and you'll have to choose whether you're looking for the balance of that token held by a particular address, or if you're just interested in the global supply of that token (in which case you won't be able to enter a wallet address)._

You will be presented with a few pieces of information. First of all, you will have "snapshot" information regarding your balance today, and underneath that, there will be a historical graph showing you the changes in your balance over time. **Moving your mouse along that graph, and looking at the different balances at different points in time, might be enough to allow you to see what happened.** Notice that in the upper left-hand corner of the graph, you can adjust the length of time represented.

Try this, though: again, let's suppose the transaction you're investigating happened today. Well, put in yesterday's date. You'll see a very helpful comparison on the right side of the "snapshots", titled "QUANTITY CHANGED". This value is a **'Comparison of your latest ETH value** (in other words, how much ETH you have right now) **versus the selected block or date'.** Does that number match up with the amount that you expected to be going in or out of your account?

It should be noted that if you need to get really granular with this tool, you can, by looking up block number, rather than date. This could be helpful if you made more than one transaction on the same day.#User Guide: Secret Recovery Phrase, password, and private keys#
#### New to crypto and web3?

Head to [MetaMask Learn](https://learn.metamask.io/) for a straightforward learning experience designed specifically for newcomers to web3\. It's completely free, available in multiple languages, and includes useful tools such as simulations to help you find your feet with MetaMask.

### In this article:

* [How MetaMask's security differs from traditional web accounts](#h%5F01FYVAXCSH95CQ08Q0P2VJA5HV)
* [What is a Secret Recovery Phrase?](#h%5F01FYVAXJQT914HCHEYFPNMEJEA)
* [Secret Recovery Phrase Dos and Don'ts](#h%5F01FYVAXSE5C9E4YBCSWT2F2RBQ)
* [Secret Recovery Phrase FAQs](#h%5F01FYVAXZYWJENFWG9K9CJTQFK7)
* [Passwords and MetaMask](#h%5F01FYVAY5K22PX6926537V8B4SX)
* [Private keys FAQs](#h%5F01FYVAYH3ZZ8VW8BPDDADWRC8E)

## 

## **MetaMask: a different model of account** **security** 

[Public blockchain technology](https://support.metamask.io/hc/en-us/articles/360015489611) uses a very different set of tools to secure user data, compared to traditional online technologies. Most of us are used to creating an account with an app, or service and being able to, for example, write to support to reset our password or username. We're used to the app keeping our data, presumably on some sort of computer that belongs to the company.

Well... MetaMask doesn't work like that. MetaMask has three different types of **secret** that are used in different ways to keep your wallet, and your accounts, private and safe: The Secret Recovery Phrase, the password, and private keys. We'll walk you through these secrets one at a time.

## **Intro to Secret Recovery Phrases**

One of the key (you'll see what I did there) technologies underlying MetaMask, and most user account-related tools in the crypto space is the _seed phrase,_ or as it's referred to in MetaMask, your _Secret Recovery Phrase_. 

#### **All of your accounts are mathematically derived from your Secret Recovery Phrase. You can think of the SRP like a keyring, and it holds as many private keys as you could want: and each one of those keys controls an account.**

Now, if you want a technical explanation: Seed phrases as we know them today were codified for usage in Bitcoin, according to a standard referred to as Bitcoin Improvement Proposal 39, or [BIP-39](https://en.bitcoin.it/wiki/BIP%5F0039). In simple terms, a series of words are selected with a high level of randomness from a specific [list of words](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt). In MetaMask and many other Ethereum-compatible technologies, there are 12 words in a seed phrase. Some older seeds generated by the Brave browser, and some hardware wallets, use 24-word phrases.

Each one of these words corresponds to a series of numbers, and when placed in **a specific order**, represent a much more user-friendly way to remember a very, very long number. That number is then used to _deterministically_ generate your accounts, and you may hear people refer to deterministic wallets. In computer science, deterministic is used to describe a process (usually an algorithm of some kind) that will _always_ generate the same result. In other words, **your Secret Recovery Phrase will always generate the same set of accounts derived from it**. 

### There are a number of important features to note here:

* The **Secret Recovery Phrase is the secret that controls the wallet**. If someone has this secret, they have complete access to the wallet. **MetaMask does not keep your SRP:** **[you are the custodian of your wallet.](https://support.metamask.io/hc/en-us/articles/360059952212)** MetaMask representatives will **never** ask for your Secret Recovery Phrase, even in a customer support scenario. If someone does ask for it, they are likely trying to scam you or steal your funds.
* Your SRP is **used locally to derive private keys**, one per account/address. Accounts are stored on the blockchain, and these private keys unlock those accounts.
* **If you uninstall the app** or the extension, then the local version of the data is gone (the notable exception being the [vault](https://support.metamask.io/hc/en-us/articles/360018766351)), but any transactions you performed with that local version of MetaMask will have been recorded on the blockchain. Therefore, the transactions should be reflected both on a [block explorer](https://support.metamask.io/hc/en-us/articles/360057536611), and in another instance of MetaMask, so long as you [restore using the same Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360015289612) (**with the words in the same order**). This means that so long as you have your Secret Recovery Phrase, you will always be able to uninstall MetaMask and restore your wallet.
* **Within your wallet, you can have a very large number of separate accounts.** When MetaMask creates or restores your wallet from the Secret Recovery Phrase, it initially produces only the first account. However, any [additional accounts you create can be re-created](https://support.metamask.io/hc/en-us/articles/360015489271) in a future instance of MetaMask. **As the wallet is _deterministic_, it will always re-create the same accounts, in the same order. For more on this issue, see the FAQs below.** Note, however, that the additional accounts (beyond the first, automatically labelled 'Account 1') will **_not_** be automatically re-added to your account in all circumstances. See our explanation [here](https://support.metamask.io/hc/en-us/articles/360015489271-How-to-add-missing-accounts-after-restoring-with-Secret-Recovery-Phrase#:~:text=If%20you%20have,automatically%20re%2Dadded.) for more information.
* **It is possible to [import accounts](https://support.metamask.io/hc/en-us/articles/360015489331) from other Ethereum-compatible technologies into a MetaMask wallet.** To do so, the _private key_ of that specific account is used. However, **this account will not be automatically restored by MetaMask in another instance; you will have to manually re-add it**. Therefore, if you have manually imported accounts, **make note of their private keys, in the same way you did your seed phrase**, in order to be able to re-import them in the future.

## **MetaMask Secret Recovery Phrase: Dos and Don'ts**

**Do:**

* **Write down your Secret Recovery Phrase somewhere safe**. We can't tell you precisely where, as that depends on your circumstances.  
   * The importance of handwriting your Secret Recovery Phrase is that it cannot be stolen online. If you store it in a file in an internet-linked cloud storage folder, for example, it could theoretically be stolen.
* Double-check your spelling and that you wrote down every word in the same order they were given.
* Reach out to MetaMask Support's [official channels](https://support.metamask.io/hc/en-us/articles/360058230211) if you need help.

**Don't:**

* Keep it in an easily discovered or easily hacked location; e.g. in a cloud-saved document or email titled "Seed Phrase"; on a post-it note stuck to your computer.
* Provide your seed phrase to anyone, even if they say they're from MetaMask Support.
* Change the order of the words.

## **Secret Recovery Phrases: FAQs**

### My seed phrase restored a different account! 

Please consult the knowledge base article on this topic [here](https://support.metamask.io/hc/en-us/articles/360058120992). In addition, see the Community thread [here](https://community.metamask.io/t/restored-metamask-no-coins-are-showing/878/107?u=jacob.cantele) for more context and background information.

### Other Secret Recovery Phrase FAQs:

[How to reveal your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360015290032)

[How do I access my accounts without my Secret Recovery Phrase?](https://support.metamask.io/hc/en-us/articles/13112366068251)

[Importing a seed phrase from another wallet software: derivation path](https://support.metamask.io/hc/en-us/articles/360060331752)

[Wallet Migration Guide](https://support.metamask.io/hc/en-us/articles/4867408571803)

[How to import an account](https://support.metamask.io/hc/en-us/articles/360015489331)

[How to check my wallet activity on the blockchain explorer](https://support.metamask.io/hc/en-us/articles/360057536611)

[What is a Secret Recovery Phrase and how do I keep my wallet safe?](https://support.metamask.io/hc/en-us/articles/360060826432)

## **Passwords and MetaMask**

MetaMask uses passwords for a single purpose: to secure the app itself; in other words, to open the app, be it the Mobile app or the in-browser Extension. Once you've restored or created your wallet from your Secret Recovery Phrase, you won't need it regularly (**although you should keep it backed up and safe**), and you will use your password (or more commonly on Mobile, biometric authentication such as facial recognition or your fingerprint) to unlock the app. For more details, see our article [here](https://support.metamask.io/hc/en-us/articles/4405451730331).

## **Private keys**

While a Secret Recovery Phrase is used to create and restore your entire MetaMask Wallet, including all accounts created in that wallet, each account has its own _private key_. This key can be used to import that account, and that account only, into a different wallet. Similarly, single accounts from other crypto technologies can be imported to your MetaMask wallet. 

### Private keys FAQs:

[What are imported accounts?](https://support.metamask.io/hc/en-us/articles/360015289932)

[How to import an account](https://support.metamask.io/hc/en-us/articles/360015489331)

[How to export an account's private key](https://support.metamask.io/hc/en-us/articles/360015289632)

[Can I import Coinbase wallet account to my MetaMask wallet?](https://support.metamask.io/hc/en-us/articles/360058485292)#My token is missing a price or fiat value#
Currently, MetaMask may not have prices (fiat values) for all tokens. Check Coingecko or Coinmarketcap to verify whether your token is currently being traded, or if there is a fiat value for it.

If you don't see a fiat value next to your token, this does not impact your ability to send the token to any destination of your choosing, nor does it impact your ability to swap the token (assuming there are markets with liquidity for the pair you are trying to trade). Please check the "markets" tab for the token on Coingecko or Coinmarketcap if you are unsure about where the token is traded.

Regardless of the token's fiat pricing or lack thereof, you still own these tokens and they are yours to do with what you wish. #How to restore your MetaMask wallet from Secret Recovery Phrase#
**Use this article if:** 

* **You have your Secret Recovery Phrase**
* **You want to import that Secret Recovery Phrase/wallet into MetaMask**

#### Warning:

Importing a Secret Recovery Phrase into MetaMask will REMOVE all existing user data from MetaMask. In other words, if you are using one SRP in MetaMask, and you import another one, all data relating to the first SRP will no longer be accessible through the application.

Before proceeding, make sure you have your Secret Recovery Phrase _and_ any private keys (from hardware wallets or imported accounts)[ backed up](https://support.metamask.io/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase), and your accounts will be safe.

If you have unintentionally done this, and need to recover an SRP that you previously used in MetaMask, you may still be able to. See [this article](https://support.metamask.io/hc/en-us/articles/13112366068251) for guidance.

New Installation Existing Installation 

**Extension**

1. Whilst setting up a fresh install of MetaMask, click 'Import an existing wallet':  
![MetaMask SRP recovery desktop](https://support.metamask.io/hc/article_attachments/13174191781275)
2. Follow the prompts to enter your Secret Recovery Phrase. Enter each word in a separate box, making sure you type each word lower case, and without any spaces.  
![MetaMask SRP recovery desktop](https://support.metamask.io/hc/article_attachments/13174140779035)

**Mobile**

1. When you install MetaMask, click on the 'Import using Secret Recovery Phrase' button:  
![MetaMask SRP recovery mobile](https://support.metamask.io/hc/article_attachments/13312657792539)
2. Enter the entire phrase in one text field. Type all 12 words in the correct order, in lower case, and with one space between each word. Do not leave an extra space after the final word. Here's how it looks:  
![MetaMask SRP recovery mobile](https://support.metamask.io/hc/article_attachments/13074718803995)

For an existing MetaMask install, **you will need to [reset your wallet](https://support.metamask.io/hc/en-us/articles/4556918516763-How-to-reset-your-wallet)** to access the button that enables you to restore from a Secret Recovery Phrase.

### What about restoring multiple accounts?

If you have **multiple accounts** created under one Secret Recovery Phrase, they will only be automatically restored in certain circumstances. Please note **this does not apply to imported accounts or hardware wallets**, which must always be manually re-added. 

MetaMask will attempt to add your additional accounts where possible (assuming they were not imported) by checking your previous accounts in ascending order. Accounts are added if they have a non-zero balance of ETH on Ethereum mainnet. However, when it encounters an account with 0 ETH, this process ends, and any beyond that will not be added.

However, even if they aren't automatically added, you can easily get them back by [re-adding accounts](https://support.metamask.io/hc/en-us/articles/360015489271) until you reach the one you're looking for. **For each old account that you had in your original installation, you must add it by "creating" a new account.**

If you do not see the addresses you are looking for, you either have the wrong Secret Recovery Phrase or have an external JSON or private key that you still need to reimport.

#### You will need to add your tokens after restoring

Since restoring your wallet essentially means starting from scratch on that MetaMask instance (although, of course, leaving on-chain history completely unaltered), you will need to re-add tokens.

**To restore and view tokens**, please see **[this guide](https://support.metamask.io/hc/en-us/articles/360015489031).**#How to enable automatic security checks (Mobile)#
On MetaMask's mobile app, you can choose to have the app automatically let you know when there is an essential update available. We're calling this feature **automatic security checks.** 

Since security is the bedrock of enjoying web3, we're always working to identify ways to make your experience simpler and safer; this is one of the reasons why we regularly update MetaMask to address bugs. By enabling automatic security checks, you're opting into receiving notifications in the MetaMask app when an update is recommended for security reasons.

To enable automatic security checks, head to Settings > Security & Privacy and scroll to the bottom. You'll see the _Automatic security checks_ there.

![MetaMask Mobile enable automatic security checks](https://support.metamask.io/hc/article_attachments/13308102405531)

#### Why isn't this enabled by default?

We want to be as transparent as possible with our users about how and where any personal information is used. Automatic security checks, once turned on, will expose your IP address to GitHub servers (unless you use a VPN or similar; see below for further explanation). We deliberately give you a choice so that you can configure MetaMask to use your personal information in a way you're comfortable with.

### Will turning this on expose my personal information?

Next to the toggle in Settings, you'll see this message:

> Automatically checking for updates may expose your IP address to GitHub servers. This only indicates that your IP address is using MetaMask. No other information or account addresses are exposed.

Due to the way automatic security checks are configured on the backend, **we need to use your IP address to check your MetaMask version against the current minimum version** – the oldest version of the app that we recommend is safe to use. We perform this check using code hosted on GitHub, where MetaMask code is stored and managed.

If you use a tool that masks your IP address, such as a VPN, your IP address won’t be exposed when you have automatic security checks turned on – this is why, in the message above, we say that the setting may expose your IP address. Automatic security checks will still work regardless of whether you have a VPN operating.

**If you’re not comfortable with your IP address being used in this way, you can leave automatic security checks turned off, or use a VPN.**

For more information about how MetaMask and its default RPC endpoint uses IP addresses and wallet addresses, please read [here](https://consensys.net/blog/news/consensys-data-retention-update/).#How to connect your account(s) to Portfolio#
#### Looking for how to import accounts into MetaMask?

This article is specifically about _connecting_ accounts to the Portfolio Dapp, at [portfolio.metamask.io](https://portfolio.metamask.io/). To learn how to import (add) accounts to MetaMask, see [here](https://support.metamask.io/hc/en-us/articles/360015489331).

Connecting your accounts is simple, but the exact flow depends on whether it's the first time you've used the platform, or whether you already have an account (or several) connected.

## If you're a new user:

The first time you access the dapp, you'll see the option to add your MetaMask account(s) in the centre of the page. Click 'Connect MetaMask':

![Metamask Connect Portfolio Dapp](https://support.metamask.io/hc/article_attachments/12506506618523)

Follow the prompts to open MetaMask and confirm which accounts you'd like to connect: 

![Metamask Connect Portfolio Dapp](https://support.metamask.io/hc/article_attachments/12506506544539)

Once you confirm, the dapp will refresh after a brief pause, and you'll see your full crypto portfolio, encompassing the accounts you connected. You can view and manage your connected accounts at any time by heading to the account menu at the top of the page:

![Metamask Connect Portfolio Dapp](https://support.metamask.io/hc/article_attachments/12506521566491)

## If you already have one or more accounts connected:

From the main portfolio view, find the account selector, located next to 'Portfolio' at the top of the screen. When you click, you'll see a list of the accounts you've already added. To add another, click the button at the bottom of this list:

![Metamask Connect Portfolio Dapp](https://support.metamask.io/hc/article_attachments/12506521461915)

Now you'll be prompted to connect your MetaMask or simply input the public address or ENS name of a wallet you want to watch:

![Metamask Connect Portfolio Dapp](https://support.metamask.io/hc/article_attachments/12506521461403)

Follow the prompts to complete this process.#Receiving funds from Binance#
If you have sent funds from your Binance exchange account to MetaMask and cannot see them in your wallet, we recommend you follow these steps:

## **Step 1: Check the transaction on a blockchain explorer**

First you will need to check which network Binance used to complete the transaction. You can do that by checking the withdrawal details on Binance:  
![mceclip0.png](https://support.metamask.io/hc/article_attachments/4416068979483/mceclip0.png)

Then you will need to go to the network’s explorer. Here are a few examples:

* [Etherscan](https://etherscan.io/) for Ethereum mainnet
* [Bscscan](https://bscscan.com/) for BSC (Binance Smart Chain)
* [Polygonscan](https://polygonscan.com/) for Polygon
* [Snowtrace](https://snowtrace.io/) for Avalanche

Once on the blockchain explorer, either search for your MetaMask address or for the [transaction ID](https://support.metamask.io/hc/en-us/articles/4413442094235) to call up the transaction's details and confirm that it has been completed. 

![mceclip1.png](https://support.metamask.io/hc/article_attachments/4416075037595/mceclip1.png)

On the overview section of your account's page in the block explorer, you will be able to see your token balances. If the token is the native token (BNB, ETH, MATIC, AVAX) it will appear in the balance section (as in the screenshot above).

If it is not the native token, it will appear in the dropdown menu in the 'Token' section.

## **Step 2: Add the network to MetaMask and display the token if required**

In order to add a network, please check our guide to adding using [Chainlist](https://support.metamask.io/hc/en-us/articles/360058992772-Add-a-network-using-Chainlist-Extension-or-Mobile-), or our [article on adding a custom network](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC).

After adding the network, if your token is not the native token of that network, you will have to [display it as a custom token](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask). 

On the block explorer, go to the token section and click on the token you received: 

![mceclip2.png](https://support.metamask.io/hc/article_attachments/4416075047451/mceclip2.png)

In order to add the custom token to MetaMask you will need to:

1. Copy the token’s contract address. See [here](https://support.metamask.io/hc/en-us/articles/360015488811-What-is-a-Token-Contract-Address-) for further guidance; essentially, you need to find the token on the block explorer and get its address from there.
2. Go to MetaMask and find 'import tokens' under the 'Assets' tab. Depending on how many tokens you've already added, you may need to scroll a bit to find this. Click on this to add the token, inputting its address.

If you have sent the tokens on the wrong network, you can always use a bridge to get that token on the desired network.

You can use [Multichain](https://multichain.org/) (formerly AnySwap) to bridge tokens between the most common networks.

**Note that in order to bridge the tokens, you will need to have funds in the network’s native token in order to pay for the gas fees.** These are required for any transaction. For example, on BSC you will need BNB, on Polygon you'll require MATIC, and for Avalanche you need AVAX. #Network profile: Avalanche (AVAX)#
Network name

Avalanche (C-Chain)

Token

AVAX

RPC

https://api.avax.network/ext/bc/C/rpc

Chain ID

43114

Block explorer

[Snowtrace](https://snowtrace.io/)

Website

avax.network

Avalanche is an ecosystem of multiple networks, designed to run smart contracts (similarly to Ethereum). The three networks include:

* The Exchange Chain (X-Chain), which is used for simple transactions
* The Platform Chain (P-Chain), for staking and validator responsibilities
* The Contract Chain (C-Chain), which you'll need to use to interact with dapps.

Additionally, there is also a Primary Network, which validates each of these blockchains. **It is the last of this trio, the C-Chain, which is EVM-compatible, and the network you'll connect to using MetaMask**. 

The key distinguishing feature of Avalanche is its [consensus protocol](https://docs.avax.network/#:~:text=Avalanche%20Consensus%20Protocol,of%20conflicting%20transactions.), which works through validators querying groups of _other_ validators whether a transaction should be accepted as valid until consensus is reached. This system is implemented on Avalanche's three networks in the form of the '[Snowman](https://docs.avax.network/#:~:text=Snowman%20Consensus%20Protocol,Snowman%20consensus%20protocol.)' consensus protocol and expedites block validation. 

Supported by these mechanisms, Avalanche's headline features include:

* \>4,500tps (transactions per second) throughput capacity
* <2s transaction finality
* Proof-of-stake consensus mechanism
* Thousands of nodes, meaning the network is well decentralized.

The Avalanche team also prioritise interoperability, making the network easier for developers to build on and for users to access. For example, it shares its smart contract programming language, Solidity, with Ethereum. 

Its [ecosystem](https://ecosystem.avax.network/marketplace) also includes a range of dapps, including decentralized and centralized exchanges, DeFi platforms and NFTs. 

To perform any kind of transaction on Avalanche, you will need sufficient quantities of its native token, AVAX, in your wallet. 

## **Using Avalanche** 

**Adding Avalanche to MetaMask**

Adding the network is an essential first step to interacting with Avalanche. There are two ways to do this: 

1. [Add it using Chainlist](https://support.metamask.io/hc/en-us/articles/360058992772-Add-a-network-using-Chainlist-Extension-or-Mobile-).
2. [Add it manually](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC). The network details are at the top of this article and available via various Avalanche sources (such as [this one](https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche)).

Avalanche have also produced a video tutorial on adding the network that you can find [here](https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche). 

**How do I switch to Avalanche in MetaMask?**

Please note the below instructions assume you have already added Avalanche network to your MetaMask (see above). 

Mobile Extension 

On your wallet page, find where it says 'Wallet' centrally at the top of the screen. Immediately below 'Wallet', it will display the network you're currently connected to. Tap here to select Avalanche from the networks you've already added.

![IMG_4135.jpg](https://support.metamask.io/hc/article_attachments/4417476658075/IMG_4135.jpg) 

![IMG_4136.PNG](https://support.metamask.io/hc/article_attachments/4417476657819/IMG_4136.PNG)

Find the network selector at the top of the app -- it will currently display the network you're connected to, such as 'Ethereum Mainnet', or any other you used last. Access the drop down down menu here, then locate and select Avalanche in the list:

![Screenshot_2022-02-02_at_13.17.56.png](https://support.metamask.io/hc/article_attachments/4417469351323/Screenshot_2022-02-02_at_13.17.56.png)

**Is my Avalanche address different from my MetaMask address?**

Firstly, and for clarity: **you can interact with the majority of dapps on Avalanche C-Chain using MetaMask**. In a lot of cases, you don't need the Avalanche Wallet.

However, if you want to access the X-Chain or P-Chain, you will need the [Avalanche Wallet](https://wallet.avax.network/). Due to the triplicate structure of Avalanche, this single wallet has three addresses -- one for each of the chains. 

The C-Chain address will look like an Ethereum address, beginning with 0x. This is because the C-Chain is an instance (separate occurrence, or version of) the Ethereum Virtual Machine, which is what we mean we say it's EVM-compatible. It essentially functions the same. 

However, and despite both being compatible, the **C-Chain address of your Avalanche wallet will be different to your MetaMask address**.

#### Setting up Avalanche and MetaMask to use the same address: only for the adventurous

It is possible to have MetaMask and the Avalanche Wallet use the same address by exporting your private key from MetaMask and using it to sign into the Avalanche Wallet. We do not recommend this process unless you are aware of the risk involved and know what you're doing. See [here](https://support.avax.network/en/articles/5307228-how-to-send-avax-from-metamask-to-an-exchange#:~:text=Alternatively%2C%20you%20can,access%20your%20funds!) for a how-to from Avalanche, and our [guide](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) to the process for further information. Anyone can access your account if they have your private key, so if you do export it -- be careful. Also, be **extremely** wary of anyone asking you to export your private key and give it to them. Our official support channels will never ask your for your private key/Secret Recovery Phrase.

**Never try and send transactions from any other Avalanche chains (X-Chain or P-Chain) to your MetaMask.** You will lose the tokens and not be able to get them back, as these are incompatible blockchains. Always get these assets onto the C-Chain and then bridge them over. 

**Using the Avalanche bridge**

Avalanche's [official bridge](https://bridge.avax.network/) can be used to move ERC-20 tokens to and from the Avalanche C-Chain. It is **only compatible with Ethereum mainnet**. 

You can also use the bridging options at the [MetaMask Portfolio Dapp](https://portfolio.metamask.io/bridge). 

This [video tutorial](https://www.youtube.com/watch?v=RLnNMfINwS0) by Avalanche for using the official bridge is very useful. In short:

1. Access the [bridge](https://bridge.avax.network/).
2. Connect your MetaMask. Make sure you select the account you want to use.
3. Select which ERC-20 token you'd like bridge across, and input the amount. Make sure you have sufficient ETH in your wallet to pay for the transaction (the cost is displayed in the interface).
4. The MetaMask transaction approval window will appear. Make sure you're happy with the details, and click confirm.
5. You'll be taken to a confirmations page that displays the status of your transaction in real time. As the video tutorial explains, there is also a link here to MetaMask which streamlines adding the bridged token to your MetaMask on the Avalanche network.
6. Once the tokens are bridged, they will appear in your MetaMask wallet, provided you have selected the Avalanche Network and added the token (see step 5).

All bridged ERC-20 tokens gain the suffix **.e** on Avalanche, indicating that they have come from Ethereum -- USDT would become USDT.e, for example. These are known as 'AB' (Avalanche Bridge) tokens. 

**If you have AVAX on Avalanche that you want to move to MetaMask, you'll need to**:

1. Make sure the AVAX is on the C-Chain. If it isn't, perform a cross-chain transfer in your Avalanche Wallet to get it there.
2. Transfer the tokens to your MetaMask address.
3. Use the bridge, following the process above.
4. If completed successfully, the bridged tokens will appear in your MetaMask, back on Ethereum.

**Can I bridge tokens from other networks (e.g. BSC, Polygon) to Avalanche?**

Yes. However, you will have to use an unofficial bridge; a few multi-chain bridge options are listed below. 

**Avalanche's official bridge only supports Ethereum <-> Avalanche C-Chain**. Please note this list does not constitute an endorsement of or affiliation with any of these platforms.

* [Multichain](https://app.multichain.org/#/router) (formerly AnySwap)
* [xPollinate ](https://xpollinate.io/)
* [Rubic](https://app.rubic.exchange/).

Always make sure you know what you are doing before you sign any transactions on these platforms. Check their FAQs and support pages if unsure, and consider sending trial transactions to start with.

**How do I move AVAX I bought on an exchange to MetaMask?**

Generally, when you buy AVAX on an exchange, your AVAX will be on one of two networks: the X-Chain or the C-Chain. 

#### Do not send tokens straight from an exchange to MetaMask using the X-Chain

You will lose your tokens.

**MetaMask only works with the Avalanche C-Chain**, which is EVM-compatible. Some exchanges, such as Binance, [only support withdrawals to the C-Chain](https://academy.binance.com/en/articles/how-to-use-the-avalanche-wallet#:~:text=Note%20that%20only%20the%20C%2DChain%20is%20compatible%20with%20the%20Binance%20exchange.%20You%20can%20only%20use%20the%20C%2DChain%20to%20transfer%20AVAX%20from%20Binance%20to%20your%20Avalanche%20Wallet.%20Be%20careful!%20If%20you%20select%20the%20wrong%20chain%2C%20you%20might%20lose%20your%20tokens.). Always check these details before making any transactions. Consider sending test transactions of small quantities if you're unsure.

If your exchange does not support C-Chain, and instead uses the X-Chain, to get your AVAX on MetaMask you have to move tokens from one Avalanche network to another using the [Avalanche Wallet](https://wallet.avax.network/).

Within the Avalanche wallet, find the 'Cross Chain' tab to move AVAX between the three Avalanche networks. 

**How do I send AVAX from one of the other Avalanche chains (i.e. not C-Chain) to MetaMask?**

You'll need to do a cross-chain transaction from your Avalanche Wallet.

See this [Avalanche guide](https://support.avax.network/en/articles/6169872-how-to-make-a-cross-chain-transfer-in-the-avalanche-wallet) to the process for more information. 

**I transferred AVAX to my MetaMask from my Avalanche Wallet using the bridge. Why don't I see the tokens?**

Follow the troubleshooting checklist [here](https://support.metamask.io/hc/en-us/articles/4404424659995#:~:text=1.%20I%20can%27t,tokens%20in%20MetaMask%3F): 

1. Have you selected the Avalanche network in MetaMask?
2. Did you transfer the tokens correctly, i.e. use the correct bridge and input the right addresses?
3. Have you added AVAX as a token in MetaMask?

If you're still having problems after checking through this list, contact support through the link on our [support landing page](https://support.metamask.io/hc/en-us/). 

## 

## **Relevant support articles**

[User Guide: Custom networks and sidechains ](https://support.metamask.io/hc/en-us/articles/4404424659995-User-Guide-Custom-networks-and-sidechains) 

[How to export an account private key ](https://support.metamask.io/hc/en-us/articles/360015289632)

[ERC-20 tokens explainer](https://support.metamask.io/hc/en-us/articles/4405497827355-User-guide-Tokens#:~:text=ERC%2D20%20Tokens,lose%20them%20forever.)

[How to add unlisted tokens (custom tokens) in MetaMask ](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask)

## **Useful resources** 

[Avalanche help center](https://support.avax.network/en/) (user-focused)

[Avalanche docs](https://docs.avax.network/) (developer-focused)

[Avalanche Bridge official tutorial videos](https://www.youtube.com/playlist?list=PLRHl-ulWK4-FPRA7SS1OrCOC8cOc2K8sP)

[Avalanche Bridge FAQ](https://docs.avax.network/learn/avalanche-bridge-faq/)

[Pangolin Getting Started guide](https://pangolin.exchange/tutorials/getting-started#set-up-metamask) (Pangolin is a decentralized exchange on Avalanche)#Error: "Unable to locate this TxnHash"#
This error arises when a transaction is stuck locally, and has not been properly submitted to the blockchain. 

Your first step should be to [access the block explorer](https://support.metamask.io/hc/en-us/articles/360057536611-How-to-check-my-wallet-activity-on-the-blockchain-explorer) and establish whether or not your transaction has actually been posted. Make sure you're accessing the relevant block explorer for the network you're using — for example, [Etherscan](https://etherscan.io/) for Ethereum, or [BscScan](https://bscscan.com/) for BSC. Inputting your [public address](https://support.metamask.io/hc/en-us/articles/360015488791) on the block explorer will allow you to review all your past and pending transactions.

Then:

1. **Look for the transaction in question**. If not easily identifiable by timestamp and token quantity, you could try cross-referencing against the transaction ID (find out how to locate this [here](https://support.metamask.io/hc/en-us/articles/4413442094235-How-to-find-a-transaction-ID)) or inputting it into the block explorer's search bar.
2. **If your transaction is visible on the block explorer**, either wait for it to complete, [speed it up, or cancel it](https://support.metamask.io/hc/en-us/articles/360015489251-How-to-speed-up-or-cancel-a-pending-transaction).
3. **If your transaction is not visible on the block explorer**, but is still showing as pending in MetaMask, you should first try restarting your browser. This can sometimes clear your transaction queue. If this doesn't work, you may need to reset your account.

Find out how to reset your account [here](https://support.metamask.io/hc/en-us/articles/360015488891). We recommend first getting in touch with support via the 'Start a Conversation' button on our homepage to confirm that this is the best course of action. (Since account resets clear your transaction history from the local instance of MetaMask, they should not be used without justification.)

**Before you do so, make sure you have your Secret Recovery Phrase (seed phrase), password, and private keys (imported accounts) backed up and secure.** 

Resetting your account will not result in you losing any funds. It will, however, clear your transaction history (although this will still be visible on a block explorer). #Adding and sharing ENS / .eth address tokens in MetaMask#
So, you bought yourself a nifty ENS address, and you want to keep track of it in your wallet? Maybe you want to trade or sell a cool .eth address you've reserved? Here's how to enable MetaMask to see the .eth addresses you have associated with your account.

Extension Mobile 

1. Open MetaMask, and click on the three vertical dots.
2. Click on the 'View on Etherscan' option
3. On Etherscan, search for "Ethereum Name Service (ENS)" and select it from the drop-down menu.
4. On the token page that appears, towards the right in the "Profile Summary" section, copy the contract address--if you hover your mouse over it, a copy button will appear to the right.  
![ENS_contract_address.png](https://support.metamask.io/hc/article_attachments/10134597199899)
5. Without pasting or copying anything else, open MetaMask again, scroll down to the bottom of the default view, and click on the "Add Token" button.
6. In the "Add Token" dialogue, click on the "Custom Token" tab, and enter the following information in the fields provided:  
   * Token Contract Address: Paste the contract address that you copied from Etherscan  
   * Token Symbol: ENS  
   * Token Decimal: 18
7. Click "Next" once you've filled out the fields, and then "Add Tokens".

![Add ENS to MetaMask Extension](https://support.metamask.io/hc/article_attachments/10134407695643)

You should see an entry in your "Assets" tab for your ENS tokens. Presently, MetaMask Extension will not show a token-specific image, merely an identicon. **Additionally, you currently cannot send the ENS tokens directly from the Extension. However, MetaMask Mobile has slightly different capabilities — see the Mobile tab above.**

1. Open the app, and click on the hamburger icon (three horizontal lines) in the upper left-hand corner.
2. Copy your account address, and locate your address on <https://etherscan.io/>
3. On Etherscan, click on the "Token" dropdown menu, and select "Ethereum Name Service (ENS)" from the drop-down menu.
4. On the token page that appears, scroll down to the "Profile Summary" section and copy the contract address — there should be a copy button to the right.
5. Without pasting or copying anything else, open MetaMask again, and select the "NFTs" tab.
6. Scoll down and tap on "+ADD NFTs".
7. In the "Add NFT" dialogue, paste the contract address you copied from Etherscan into the "Address" field. Without closing MetaMask, go back to your browser where you have Etherscan open.
8. On Etherscan, scroll down until you see a series of tabs; choose "Inventory". A box should appear with your .eth address in it — that's your token!
9. Tap and hold on the number underneath the token, beginning with a "#". When your browser's menu appears, choose "Copy link text".
10. Without pasting or copying anything else, jump back to MetaMask, and paste the token ID number that you just copied into the "ID" box, and tap on "ADD".

You should now see your ENS token under your NFTs tab, along with a fancy ENS token icon(s) with your .eth address(es) on them! **If you tap on one of the tokens, you should have the option to send, share, or 'favorite' the token.**#A token is missing from my wallet#
If you or someone else recently transferred a token to your MetaMask wallet and you don't see it in MetaMask, please check the following:   

* **How long has it been**? While blockchain transactions are fast, they are generally not instantaneous. It may be that the transaction is not complete yet. [Check on a block explorer](https://support.metamask.io/hc/en-us/articles/360057536611).
* **Are you on the[ correct network](https://support.metamask.io/hc/en-us/articles/360043227612)**?  
   * If you sent the token on an EVM-compatible network that you can use in MetaMask (e.g. BNB Smart Chain, Polygon, Avalanche C-Chain, etc.), simply change networks in MetaMask.  
   * If the token was not sent on an EVM-compatible network, your funds may be lost. See our [article here](https://support.metamask.io/hc/en-us/articles/9370013370139) for more information.
* **Have you [added the token](https://support.metamask.io/hc/en-us/articles/360015489031) to your wallet**? MetaMask only automatically detects tokens in some circumstances. If the token isn't automatically detected, you may need to add it manually.

If your token is displayed in your wallet but with the wrong amount, see [here](https://support.metamask.io/hc/en-us/articles/360028059272). 

You could also try viewing your account through the [MetaMask Portfolio Dapp](https://portfolio.metamask.io/), which detects most tokens automatically. #How to estimate the gas fee#
### Getting the gas price

If you are on Ethereum mainnet you can check [Etherscan's gas tool](https://etherscan.io/gastracker) to estimate today's gas price. Please note the gas price fluctuates; always refer to the gas station to see the current gas prices.

The Ethereum network requires gas to execute transactions. When you send tokens, interact with a contract, send ETH, or do anything else on the blockchain, you must pay for that computation. That payment is calculated in gas, and gas is always paid in ETH.

You are paying for the computation, regardless of whether your transaction succeeds or fails. Even if it fails, validators must finalize and execute your transaction, which takes computational power. You must pay for that computation, just like you would pay for a successful transaction.

### Getting the gas limit

So, you know how much each unit of gas costs, but how many units of gas do you need to spend? Well, if it's a simple transaction—say, sending ETH or an ERC-721 token to another address—you should be spending 21,000 units of gas. If you're doing something more complex, a good tool is a block explorer, such as [etherscan.io](https://etherscan.io/). Navigate to the contract you wish to interact with, and start examining transactions made with the contract. This will give you a better idea of how much gas other users actually end up using.

#### Gas calculator

There are a few tools available out there for you to estimate how much gas is going to cost you in fiat currency before you submit a transaction. One example is the [Cryptoneur gas fee calculator](https://www.cryptoneur.xyz/gas-fees-calculator), which lets you input the details of your transaction and produces the estimated gas cost in your local currency, and specific to current demand on that network (you can choose from most major EVM-compatible networks).

###   
Overall gas fee structure

As of [EIP-1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md), the overall fee a transaction creator pays is calculated as: **( (base fee + priority fee) x units of gas used)**. 

For more information, see [here](https://support.metamask.io/hc/en-us/articles/4404600179227).

**Please note this is not a fee that MetaMask receives so we cannot refund it.** This fee is paid to miners or validators for finalizing the transaction, validating it into a block, and securing the blockchain.#Issues connecting to PancakeSwap and Uniswap #
If you are using MetaMask to access a Decentralized Exchange (DEX) such as Pancakeswap or Uniswap, and you see the error message "**Permissions request already pending please wait**", please try these workarounds, which should help you to reconnect: 

Extension Mobile 

* **Disconnect from the site** using the method explained [here](https://support.metamask.io/hc/en-us/articles/360059535551), and then return to the dapp and click **Connect wallet**, and progress through the steps in the usual way.
* If reconnecting using the above steps doesn't work, you could also try reinstalling MetaMask on your browser. **Please make sure you have your [Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/4404722782107-User-guide-Secret-Recovery-Phrase-password-and-private-keys) and the seed phrases of any imported accounts safely backed up before uninstalling your wallet.**

* On MetaMask Mobile, you can't disconnect from specific dapps. Instead, you need to **disconnect from all connected sites** simultaneously, and then try reconnecting to the one you're experiencing issues with. See our instructions [here](https://support.metamask.io/hc/en-us/articles/360059535551) for how to disconnect.
* If this doesn't work, try removing the app from your device and reinstalling. If you do this, please make sure you have your Secret Recovery Phrase backed up (alongside those of any imported accounts), or you may be unable to regain access to your wallet.#How to contact MetaMask Support#
### **MetaMask will never send you a direct message.** 
**MetaMask will never ask you for your Secret Recovery Phrase.**  
**If someone does, they're probably trying to scam you.** 

#### To speak to a member of our team:

Head to the 'Start a Conversation' button on the homepage of this site. [It may take a moment or two to load](https://support.metamask.io/hc/en-us/articles/5973459712283). You'll be guided through a few questions to see whether we can solve your problem straight away, and, if not, you'll be able to chat with a member of our team.

### MetaMask currently has three modes of support: the Knowledge Base, our Community Forums, and contacting a support agent:

* **Search this Knowledge Base for articles regarding the issue you're having. There are a number of User Guides which cover general topics, and then link to more specific Frequently Asked Questions:**  
   * [Troubleshooting](https://support.metamask.io/hc/en-us/articles/4406430256539-User-Guide-Troubleshooting)  
   * [Getting Started with MetaMask ](https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask)  
   * [Learn the Basics of Blockchain](https://support.metamask.io/hc/en-us/articles/360015489611-Learn-the-basics-of-blockchains-and-Ethereum-miners-and-validators-gas-cryptocurrencies-and-NFTs-block-explorer-networks-etc-)  
   * [Secret Recovery Phrase, password, and private keys](https://support.metamask.io/hc/en-us/articles/4404722782107-User-guide-Secret-Recovery-Phrase-password-and-private-keys)  
   * [Hardware Wallet Hub](https://support.metamask.io/hc/en-us/articles/4408552261275-Hardware-Wallet-Hub)  
   * [User Guide: How to use a Hardware Wallet](https://support.metamask.io/hc/en-us/articles/5450173968283-User-Guide-How-to-use-a-Hardware-Wallet)  
   * [User Guide: Gas](https://support.metamask.io/hc/en-us/articles/4404600179227-User-Guide-Gas)  
   * [User Guide: Dapps](https://support.metamask.io/hc/en-us/articles/4405506066331-User-guide-Dapps)  
   * [User Guide: Tokens](https://support.metamask.io/hc/en-us/articles/4405497827355-User-guide-Tokens)  
   * [User Guide: Swaps](https://support.metamask.io/hc/en-us/articles/4405093054363-User-guide-Swaps)  
   * [User Guide: Custom Networks and Sidechains](https://support.metamask.io/hc/en-us/articles/4404424659995-User-Guide-Custom-networks-and-sidechains)
* **Check out the [Community Forums](https://community.metamask.io/); you may find an answer there.**
* **If you can't find an answer in these resources, click on the 'Start a Conversation' button on [https://metamask.zendesk.com/hc/en-us](https://support.metamask.io/hc/en-us).** If the button doesn't appear or is broken, try turning off adblockers, as explained [here](https://support.metamask.io/hc/en-us/articles/5973459712283).

When submitting a ticket or having a conversation with our support agent, it will help us if you **explain fully and clearly what has happened to you**. The types of details that our agents will ask for include the following: 

* **Description** of what you were doing right before the error occurred (If relevant);
* Are you **able to repeat the error**?
* What are the **steps to reproduce the error**?
* The **networks, blockchains, and Dapps** you used
* Any **tokens or smart contracts** involved
* **State logs** ([How to Download State Logs](https://support.metamask.io/hc/en-us/articles/360015290092))
* **MetaMask version** (Click or tap on the identicon in the upper right hand corner > Settings > About)
* **Browser version / Mobile phone model**
* **Operating system** and version

### Remember, MetaMask [is a self-custodial wallet](https://support.metamask.io/hc/en-us/articles/360059952212). We can't reset your password, we can't reverse transactions, we can't look up your Secret Recovery Phrase.#How to add missing accounts after restoring with Secret Recovery Phrase#
#### Note:

Any **imported** accounts will **not** be re-added when you restore your wallet using your Secret Recovery Phrase. [They need to be manually re-added](https://support.metamask.io/hc/en-us/articles/360015489331) in the same way you imported them originally.

**DO NOT share your Secret Recovery Phrase with anyone! These words can be used to steal all your accounts. You cannot edit or change your Secret Recovery Phrase.**

When you [restore a wallet](https://support.metamask.io/hc/en-us/articles/360015289612-How-to-restore-your-MetaMask-account-from-Seed-Phrase-Secret-Recovery-Phrase) using your Secret Recovery Phrase, MetaMask will automatically re-add any additional accounts you had previously [created](https://support.metamask.io/hc/en-us/articles/360015289452) — but only under certain conditions.

MetaMask will attempt to add your additional accounts where possible (assuming they were not [imported](https://support.metamask.io/hc/en-us/articles/360015289932)) by checking your previous accounts in ascending order (i.e. Account 2, then Account 3, etc.). **Accounts are automatically re-added if they have a non-zero ETH balance**. However, this process ends when MetaMask encounters an account with 0 ETH — so the first account with 0 ETH (and any beyond it) will _not_ be added.

Bear in mind that **this process only checks for balances of ETH on Ethereum mainnet**, so other tokens or tokens on other networks will not result in your account being automatically re-added.

**For any which are not re-added automatically, you will have to add them back by "[creating](https://support.metamask.io/hc/en-us/articles/360015289452)" an account**. For example, if you have some tokens in Account 4, but Account 4 isn't automatically added because those tokens are not ETH on mainnet, all you need to do is manually add accounts (using the below steps) until you get to Account 4\. Your Account 4 _before_ the restore corresponds to Account 4 _after_ the restore, regardless of any name you previously applied.

If you do need to use the "create" button to re-add accounts, don't worry about the account address being different. The addresses are cryptographically derived _deterministically_ from your private key, which means they will always be the same. And since an Ethereum account, once created, exists permanently, you can just pick up where you left off. 

Please follow the steps below on how to restore your other accounts in the order they were originally created:

Extension Mobile 

1. Click on the favicon on the top right corner of the MetaMask dropdown menu
2. Click “Create Account” to restore your MetaMask accounts in the order they were created
3. If the accounts were previously named, you can name them again in the step below, before clicking "**Create**"  
![How_to_add_missing_accounts_after_restoring_with_Secret_Recovery_Phrase.gif](https://support.metamask.io/hc/article_attachments/9026739981083/How_to_add_missing_accounts_after_restoring_with_Secret_Recovery_Phrase.gif)

1. Tap the hamburger icon in the top left of the screen to bring up the menu. From here, tap on the drop-down arrow next to your account name:
2. Tap 'Create New Account':  
![How_to_add_missing_accounts_after_restoring_with_Secret_Recovery_Phrase_Mobile.gif](https://support.metamask.io/hc/article_attachments/9027058464027/How_to_add_missing_accounts_after_restoring_with_Secret_Recovery_Phrase_Mobile.gif)

If you still do not see the addresses you were looking for, they were probably created with a different Secret Recovery Phrase, or you had an imported account that you still need to reimport using private keys or JSON. Please see [this article on how to import an account](https://support.metamask.io/hc/en-us/articles/360015489331-Importing-an-Account). #Does MetaMask collect my personal data?#
MetaMask has always stood for openness and transparency. This is why we recently updated our privacy policy to make it as clear as possible for you, the user, what takes place when you use MetaMask. We also issued further clarification [here](https://consensys.net/blog/news/privacy-policy-update/).

Here is what our [policy](https://consensys.net/privacy-policy/) says:

_When you use Infura as your default RPC provider in MetaMask, Infura will not not store wallet account address information when a MetaMask user makes a “read” request through Infura, for example in order to check account balances within MetaMask. We therefore can never associate wallet account addresses to an internet protocol (IP) address based on this type of user activity._ 

_Infura collects wallet and IP address information in connection with “write” requests, also known as transactions, when MetaMask users broadcast transactions through Infura’s RPC endpoints. The purpose of this collection is to ensure successful transaction propagation, execution, and other important service functionality such as load balancing and DDoS protection, as provided by Infura;_ 

_However, if you’re using your own Ethereum node or a third party RPC provider with MetaMask, then neither Infura nor MetaMask will collect your IP address or Ethereum wallet address (but you should be aware your information will be subject to whatever information collection performed by the RPC provider you are using and their terms regarding such collection)._

We understand how much our users value privacy – as a core principle of web3, we stand with you on this. 

In the interests of clarity, and to expand on a few key user concerns, we want to make clear that:

* **MetaMask must have an RPC provider to work, and an RPC provider must collect your IP and wallet address to work.** It would otherwise be impossible for you to send transactions or use your wallet in any meaningful way. Your wallet address is a necessary part of the request to the blockchain; your IP address is needed so that requested information can be routed back to you, the requester.

#### What's an RPC?

RPC stands for [remote procedure call](https://www.jsonrpc.org/), which describes the process of requesting and sending information to and from the blockchain.

* **MetaMask does not collect your IP address.** MetaMask does, however, route your information to an RPC provider to fulfil your requested transaction.
* **Infura is the default RPC provider to maximize convenience,** and due to its reliability and capacity. Infura is [actively pursuing greater decentralization](https://consensys.net/blog/press-release/infura-announces-plan-to-foster-a-decentralized-infrastructure-ecosystem/) and privacy-boosting technology. **You can switch to another RPC provider if you wish**, or even set up your own local node and [connect it to MetaMask](https://support.metamask.io/hc/en-us/articles/360015290012). However, as referenced in the policy text above, you’ll need to make sure that any other RPC provider handles your data (IP address, wallet addresses) properly, since we have zero control over this.
* **No matter what they say, other web3 wallets that work similarly to MetaMask will also be collecting your IP address and transaction source/destination wallet addresses to function**. It’s unavoidable.
* **We are not harvesting your data for profit**. This is not web2.

If you have any further questions about MetaMask and data, [get in touch with Support](https://support.metamask.io/hc/en-us/articles/360058969391-How-to-contact-MetaMask-Support) or visit our [Community page](https://community.metamask.io/).#My balance in Portfolio is inaccurate or not up to date#
#### Having issues with your balance in MetaMask?

This article is specifically about the balances displayed in the Portfolio Dapp, at [portfolio.metamask.io.](https://portfolio.metamask.io/) For a guide on what to do if your MetaMask balance is incorrect, see [here](https://support.metamask.io/hc/en-us/articles/360028059272). If tokens are missing completely, see [here](https://support.metamask.io/hc/en-us/articles/360059232852) or [here](https://support.metamask.io/hc/en-us/articles/360058033132).

We rely on various on-chain data solutions to provide the most accurate, up-to-date balance information for your portfolio. Sometimes, this balance may get out of sync due to a variety of reasons, including [chain reorganization](https://cointelegraph.com/explained/what-is-chain-reorganization-in-blockchain-technology), lag time in data indexing, or incorrect token pricing information. These issues will typically be resolved on their own in a short amount of time as our systems catch up to the latest chain activity.

Even if your balance is out of sync:

* Your actual on-chain token balance has not changed
* No transactions have been made on your behalf.

## What can I do in the meantime? 

Your portfolio balance will automatically update as the potential issues above are resolved and fresh data is available. However, you can try a hard refresh, which may accelerate the process. 

To do this, head to the account selector at the top of the screen. Find the account whose balance you want to refresh and click the three vertical dots that appear next to it when you mouseover. Once in the 'More actions' menu, you'll see the option to hard refresh. Click it to refresh your balances.

![MetaMask portfolio account hard refresh](https://support.metamask.io/hc/article_attachments/11994652775707)#Network profile: Fantom (FTM)#
Network name

Fantom Opera

Token

FTM

RPC

https://rpc.ftm.tools/

Chain ID

250

Block explorer

[FtmScan](https://ftmscan.com/)

Website

[fantom.foundation](https://fantom.foundation/)

Like many of the other smart contract-enabled layer 1 blockchains that hover around the upper echelons of market cap rankings—Solana, Cardano, and Avalanche amongst them—Fantom aims to address the key challenges facing the original smart contract network, Ethereum. This mainly includes **scalability** and **speed**, accommodating greater transaction volumes whilst retaining affordable transaction costs and security. 

Fantom's approach to delivering scalability is **modular**. Whereas transactions on Ethereum (and many other networks) are all on the same network, sharing infrastructure, **Fantom allows new projects to be launched on their own blockchain**, almost as layer 2 (L2) networks over the mainnet. Operating independently avoids new projects clogging up Fantom Opera over time by funnelling ever-higher volumes of high traffic through the same channel. Instead, Fantom's approach is to create a '**[network of networks](https://fantom.foundation/intro-to-fantom/#:~:text=If%20we%20think,network%20of%20networks.)**'. 

So how is this done? Well, the main contributor is what they call **Lachesis**, an **asynchronous byzantine fault tolerance (aBFT) consensus algorithm**. Quite the mouthful. BFT refers to the [Byzantine Generals Problem](https://en.wikipedia.org/wiki/Byzantine%5Ffault), a logic problem commonly cited in crypto circles: how do a set of generals, hampered by the limitations of medieval communication, reach _consensus_ on whether or not they should attack a fortress? And, more critically, how can each general trust the others when they say they will attack, especially when a lack of coordination may result in defeat? Applied to decentralized blockchains, BFT essentially refers to the question of how we can trust a decentralized network's validity when there is the possibility of deceitful actors. 

The **Lachesis aBFT consensus mechanism** gets around the challenges of many alternative mechanisms through being _asynchronous._ Rather than syncing a validated block with every other node connected to Lachesis (i.e. the Fantom mainnet)—just as every Ethereum validator syncs with all others—the Lachesis node only has to complete blocks within its own network. You can read more about Lachesis and how it works [here](https://fantom.foundation/lachesis-consensus-algorithm/). 

Fantom uses a **Proof-of-Stake** system to underpin its validator community, and in turn the security and function of the network as a whole. You can stake as little as 1 FTM using the [official Fantom wallet](https://pwawallet.fantom.network/#/), delegating your stake to a validator. To become a validator, you would need to stake at least 1,000,000 FTM. 

Both Fantom mainnet (Opera) and the L2 networks built on top of it (Lachesis nodes, powering dapps) are EVM-compatible, meaning you can interact with them using MetaMask. 

Fantom's native token FTM is necessary to pay for transactions when connected to Fantom Opera. However, constituent blockchains in the 'network of networks' can create and require use of their own native tokens. 

## **Using Fantom**

**How to add Fantom to MetaMask**

The easiest way to add Fantom is by following the steps for adding a popular network, detailed [here](https://support.metamask.io/hc/en-us/articles/360043227612). 

Once the network is added, you'll be able to select it at any time in future from your previously accessed networks in MetaMask. 

**How do I switch to Fantom in MetaMask?**

Please note the below instructions assume you have already added Fantom to your MetaMask (see above). 

**On Mobile**: On your wallet page, find where it says 'Wallet' centrally at the top of the screen. Immediately below 'Wallet', it will display the network you're currently connected to. Tap here to open a list of the networks you've already added. Scroll until you find Fantom, and tap to set it as your current network.

![IMG_4135.jpg](https://consensys.zendesk.com/hc/article_attachments/4417476658075/IMG_4135.jpg) 

![IMG_E14EAA07ADEB-1.jpeg](https://support.metamask.io/hc/article_attachments/4418214195483/IMG_E14EAA07ADEB-1.jpeg)

**On Extension**: Find the network selector at the top of the app -- it will currently display the network you're connected to, such as 'Ethereum Mainnet', or any other you used last. Access the drop down down menu here, then locate and select Fantom in the list:

![Screenshot_2022-02-08_at_15.27.47.png](https://support.metamask.io/hc/article_attachments/4418214258331/Screenshot_2022-02-08_at_15.27.47.png)

**Is my MetaMask address on Fantom the same as other networks in MetaMask?**

Yes.

Assuming you are using the same account within MetaMask, your wallet address is the same regardless of the network you're connected to. 

Fantom Opera's EVM-compatibility means MetaMask can connect to it just as you would to Ethereum mainnet. 

However, take care to not confuse your MetaMask address with your address for Fantom Wallet (if you use it). Fantom shares the same address format as Ethereum and EVM-compatible networks (i.e. beginning with 0x) but is [different](https://fantom.foundation/fantom-faq/#:~:text=Note%20that%20Fantom%20Opera%20addresses%20share%20the%20same%20structure%20as%20Ethereum%20addresses%20%280x%E2%80%A6%29%2C%20but%20they%20are%20not%20Ethereum%20addresses.).

**Can I stake FTM with MetaMask?**

No. MetaMask can be used to:

* Store FTM (see below for the different forms this token could be in)
* Interact with dapps that are connected to Fantom mainnet.

To stake FTM, you will need to use the [Fantom wallet](https://pwawallet.fantom.network/#/). 

**Types of FTM token, and how to tell which you have**

As explained on the [Fantom FAQ](https://fantom.foundation/fantom-faq/#token), FTM can only exist in three formats:

* **FTM** (native, on Fantom Opera)
* **ERC-20**: On Ethereum
* **BEP-2**: On the Binance Chain.

However, and in contradiction to this list, you may be able to bridge FTM onto other networks which have their own version of the ERC-20 standard. For example, you can get a BEP-20 version of FTM on Binance Smart Chain. 

When you buy FTM on a centralized exchange, you may also have a choice of networks for your withdrawal. Binance, for example, supports FTM withdrawals to BSC (as a BEP-20 token), Ethereum (ERC-20), and Fantom Opera/mainnet itself. See [here](https://support.binance.us/hc/en-us/articles/4418866690199-Binance-US-Now-Supports-Fantom-FTM-Mainnet-for-Deposits-and-Withdrawals-Buy-FTM-Using-Debit-Card-Bank-Account-or-Wire-Transfer-) for more information. 

**Bridging tokens to Fantom**

As with any other network you will use, barring some exceptions, you cannot simply send tokens from one network to another without bridging. In all likelihood, **you will lose your tokens if you don't bridge them.** 

This is because FTM on the Fantom Opera is a fundamentally different token to FTM ERC-20 tokens on Ethereum, for example. Bridging involves moving the token from one format into another.

To do this, Fantom recommend you use [multichain.xyz](https://multichain.xyz/swap). 

## **Relevant support articles**

[User Guide: Custom networks and sidechains](https://support.metamask.io/hc/en-us/articles/4404424659995-User-Guide-Custom-networks-and-sidechains)

## **Useful resources**

[The Ultimate Guide to FTM](https://fantom.foundation/blog/the-ultimate-guide-to-the-ftm-token/) (The Fantom Foundation)#Understanding BSC, Binance, and MetaMask#
#### _If you are using MetaMask in conjunction with Binance, we strongly recommend that you familiarize yourself with [Binance’s documentation on the topic](https://docs.binance.org/smart-chain/wallet/metamask.html). That said, there are some technical details you **must understand in order to avoid losses**._

Specifically, **Binance is not just one platform**. It’s not even just one blockchain. When people talk about Binance, they may be referring to any one of the following:

* [**Binance**](https://www.binance.com/en), _the centralized cryptocurrency exchange_
* _Its US-based equivalent_, [**binance.us**](https://www.binance.us/en/home)
* [**The BNB Chain**](https://www.binance.com/en/blog/all/binance-chain-blockchain-for-exchanging-the-world-304219301536473088), (formerly Binance Chain) _the blockchain which tracks BNB_
* [**The BNB Smart Chain,**](https://www.binance.org/en/smartChain) (formerly Binance Smart Chain or BSC) _designed to ‘bring smart contract functionality to the Binance Ecosystem’, tracks tokens that comply with the BEP-20 standard and is compatible with Ethereum and other EVM-compatible networks_

The methods for moving assets between these different networks vary depending on what you are trying to move, where. **Not all assets can be moved freely between all chains.**

## What are you trying to do?

### Move assets between the Binance, or binance.us, centralized exchange and a wallet address via MetaMask

Recommendation: Follow [Binance’s instructions](https://www.binance.com/en/support/faq/115003670492). 

**Note that if you withdraw BNB as a BEP2 token, it may not function as intended, for example, in dapps on the BNB Smart Chain.** In order to access this functionality, you will need to withdraw your BNB as BEP20 tokens. Additional instructions for [withdrawing here](https://support.metamask.io/hc/en-us/articles/4416069050011), and [depositing to Binance here](https://support.metamask.io/hc/en-us/articles/4411972525851).  
  
### Move assets between the BNB Smart Chain and another EVM-compatible network via MetaMask

Recommendation: Follow [Binance’s instructions](https://academy.binance.com/en/articles/how-to-recover-crypto-transferred-to-the-wrong-network-on-binance). 

**Additionally, we strongly recommend that you use official bridges when transferring tokens between blockchains.** Additional instructions for [sending to BNB Smart Chain via MetaMask](https://support.metamask.io/hc/en-us/articles/360059408871) here, and instructions for [sending from BNB Smart Chain to a different blockchain](https://support.metamask.io/hc/en-us/articles/4404464724635) via MetaMask here. 

**Have you sent funds from BSC to MetaMask, but you don't see the tokens**? We have instructions for that [here](https://support.metamask.io/hc/en-us/articles/360059876052).#Accidentally sending funds to the wrong address#
#### Yes, it happens.

You typed in the wrong address, or you selected the wrong option from a drop-down menu, or you sent funds to a contract address instead of a wallet address. Any number of things can happen, but if you're reading this article, you probably suspect that you sent funds to the wrong address.

#### What can I do about it? 

Well, if you realize it in time, you can [cancel the transaction](https://support.metamask.io/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction) while it's still pending. But again, if you're here reading this article, that time has probably already passed.

[Check your transaction history on Etherscan](https://support.metamask.io/hc/en-us/articles/360060861751-How-to-check-your-wallet-on-explorer-by-using-public-address) if you're at all unsure of where you sent it, or where the funds ended up. If you know the party you sent it to, you could reach out to them and see if they would be willing to send it back to you.

#### What if I [sent tokens to a contract address](https://support.metamask.io/hc/en-us/articles/360020028092)?

Unfortunately, _**there is no guarantee anyone can retrieve your tokens if you sent them to a contract address.**_ A contract address is not a repository of tokens; it is essentially a computer program, a set of code, that performs some function on the blockchain. Some of them—the _token contract addresses_ explained [here](https://support.metamask.io/hc/en-us/articles/360015488811-What-is-a-Token-Contract-Address-)—are addresses that can receive tokens. In this case, you may be able to reach out to the team that makes the token or manages the project, and they may be able to get your tokens back to you. However, some projects don't have customer support, which is another feature of the decentralized web.

#### Why can't MetaMask just reverse the transaction, or refund me the value?

MetaMask is not a bank, and it is not a _custodial wallet —_ in other words, we do not keep any of your data. This is an essential security feature built into the nature of blockchain technology. **You** are the custodian of your funds. It is for this reason that we issue the constant reminder: **Never share your Secret Recovery Phrase with anyone.** If you do, that person has full access to, and control over, all your accounts and tokens.

To be clear: **transactions are NOT reversible once final. It is NOT possible to "undo" or "reverse" a transaction once it is confirmed by the network.**

#### What if someone from MetaMask DMs me and asks me for access to my account to help me?

**MetaMask will never DM you, and will never ask for your Secret Recovery Phrase**. If someone does this, they are most likely a scammer and should be ignored. 

If you do have additional questions, seek assistance only through [official MetaMask channels](https://support.metamask.io/hc/en-us/articles/360058230211).#Having issues with your Ledger#
If you are having issues with your Ledger, here are some common fixes:

* First of all, make sure you have familiarized yourself with the content in our [Hardware Wallet Hub](https://support.metamask.io/hc/en-us/articles/4408552261275).
* Make sure Ledger Live is closed when using your Ledger with MetaMask. Also, ensure the Ledger device is unlocked and in the Ethereum application.
* Also, make sure you have:  
   * The most up-to-date firmware on your Ledger device  
   * Re-installed/updated the Ethereum app on the device, via Ledger Live  
   * Your browser up-to-date  
   * Enabled "[blind signing](https://www.ledger.com/academy/enable-blind-signing-why-when-and-how-to-stay-safe)" on the Ethereum app on the Ledger device itself

If you are seeing **multiple pending or failed transactions** in your MetaMask activity feed that do not match up to your public address on Etherscan.io, **you may need to [reset](https://support.metamask.io/hc/en-us/articles/360015488891)**[ MetaMask](https://support.metamask.io/hc/en-us/articles/360015488891)[.](https://support.metamask.io/hc/en-us/articles/360015488891-Resetting-an-Account) Before you do this, though, get in touch with Support to check whether this is the best option. 

#### See Ledger support documentation for more information

We think hardware wallets can be a great tool for improving web3 security, depending on your individual needs and habits. However, since they're all complex products themselves, it's not possible for us to thoroughly document them here. That's why we recommend you head to [Ledger's support page](https://support.ledger.com/hc/) if you need detailed information.

If you can't find the answer there and the issue relates directly to MetaMask, [get in touch with Support](https://support.metamask.io/hc/en-us/articles/360058969391).#MetaMask is a self-custodial wallet#
#### New to crypto and web3?

Head to [MetaMask Learn](https://learn.metamask.io/) for a straightforward learning experience designed specifically for newcomers to web3\. It's completely free, available in multiple languages, and includes useful tools such as simulations to help you find your feet with MetaMask.

MetaMask includes a **self-custodial** (also commonly referred to as non-custodial) cryptocurrency and token wallet. It gives _you_ complete control of your access keys and therefore your assets. 

'Self-custodial' refers to the fact that it's _you_ ('self')who holds your wallet's private key(s). A self-custodial wallet eliminates the third party between you and your crypto-assets, which is more suitable for some people.

**MetaMask doesn't store any data about the wallet**. Everything you see is in your browser or your mobile app at a local level. **There are no email addresses associated with accounts**. There is only a Secret Recovery Phrase (seed phrase) that is given once and cannot be changed or reset. Also, if you have imported other accounts using their private keys, their Secret Recovery Phrases should also never be shared. Please store your Secret Recovery Phrase and private keys offline and back them up.

For more detail on this topic, see our [blog post here](https://consensys.net/blog/metamask/whats-in-a-self-custody-non-custodial-wallet-anyway/). 

#### MetaMask and email addresses

You open and use your MetaMask wallet without ever inputting your email. This privacy is part of MetaMask's identity. However, **we may have your email address if you have used our Support services**, as we it need to track your issue and follow up with you. This doesn't apply for conversations that you begin using the 'Start a Conversation' button. We may also have your email if you've signed up for the MetaMask newsletter or if you opted into notifications from our Community page. See [here](https://metamask.zendesk.com/hc/en-us/articles/12683145255835) for more information about official emails.

You should be highly sceptical of any emails you receive claiming to be from us. If you have never had help from Support, the email will be a phishing scam; even if it is from us, we will **never** ask for your Secret Recovery Phrase (seed phrase). 

Because of MetaMask's self-custodial design, **we cannot access your wallet from our side.** **You are the only person who can access it directly from the Extension or Mobile app.** 

Learn more about your Secret Recovery Phrase and**[ how to keep your account safe here](https://metamask.zendesk.com/hc/en-us/articles/4404722782107).**#Refunding gas fees#
[_Gas fees_](https://support.metamask.io/hc/en-us/articles/4404600179227) (also known as transaction fees) refers to the cost of carrying out a transaction or executing a contract on Ethereum (and many other networks). This fee is consumed by the parties running the network in order to process a transaction (that can either succeed or fail). It is the cost of computation, and is not charged or collected by MetaMask.

**Due to the nature of the blockchain, transaction fees cannot be refunded!** 

For more details on high gas fees, check out this article: [Why are my gas fees so high?](https://support.metamask.io/hc/en-us/articles/360058751211)#How to recover your Secret Recovery Phrase#
_MetaMask provides you with a unique 12-word Secret Recovery Phrase on the very first launch. If you did not write it down, or you lost it, you can unlock MetaMask and [reveal your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360015290032)._ 

### Are you in a situation where you don't have access to your Secret Recovery Phrase?

This can happen, for example, if your computer broke and you didn't back up your SRP. Because the SRP is the tool that creates and controls all your accounts, it might be that you've lost access to them forever. Or maybe not.

If you can [plug that old hard drive into your computer and access it](https://www.lifewire.com/access-data-from-an-old-hard-drive-5201989), or if you have a cloud backup of your system, or some other method of accessing the system data, you may be able to recover the SRP.

### **If, for whatever reason, you cannot unlock MetaMask using your password, there may still be a _possibility_ of recovering your Secret Recovery Phrase.** 

Follow these instructions, and if you get stuck, start a conversation with our Support agents. 

#### This article is to be used under the following circumstances:

1. #### You **do not** know your Secret Recovery Phrase
2. #### You **do** know your password
3. #### For some reason you are **unable to unlock MetaMask** with your password
4. #### You are using MetaMask Extension in a desktop browser, **or** the MetaMask Mobile app on iOS **only.**

**_Note:_** 

* **_Vault recovery on Android mobile devices is not currently possible._**
* **_If you have uninstalled the MetaMask extension, your data has likely been deleted. However, you may attempt the method below, under the heading "What if you no longer have access to the browser...?," especially if you have a backup of your computer's data._**

If you're not sure if this situation applies to you,[ consult the various scenarios here](https://support.metamask.io/hc/en-us/articles/13112366068251) to help you determine which is right for you. 

#### A few things before we begin...

* We know that potentially losing access to MetaMask and your assets is stressful — that's why we've put this content together, so that you might be able to resolve that stress. We wish we could do more, but [MetaMask is self-custodial](https://support.metamask.io/hc/en-us/articles/360059952212) by design. We're rooting for you though!
* We do our best to keep these instructions up to date, but since they depend in part on the back end of third-party platforms (the browsers), sometimes things may have changed relative to what we describe below. If so, please let us know by [getting in touch with Support](https://support.metamask.io/hc/en-us/articles/360058969391).
* This is not a simple process, so make sure you set aside roughly 30 minutes and that you're in a location where you can focus. If you get stuck, get in touch.
* The final step of the process, once you've recovered your SRP, will be to [restore your wallet](https://support.metamask.io/hc/en-us/articles/360015289612). Keep in mind that **MetaMask stores only one SRP per browser profile at a time**, and **importing an SRP into an existing MetaMask installation wipes any SRP data** already present in that profile's vault.  
   * If you're only managing one SRP, then this isn't really an issue; **if you're managing multiple SRPs**, however, we strongly recommend you [follow our best practices outlined here](https://support.metamask.io/hc/en-us/articles/12174759849371).

Extension iOS Android 

## **Vault extraction and decryption instructions**

If you’re here, you probably want to get straight to solving the issue. However, if you get stuck, it might help to understand what’s going on. We’ve provided an in-depth explanation of how this all works further down, in case you need it now, or want to read it another time.

**Chrome-based browsers** 

#### (includes Chrome, Brave, Edge, and Opera)

## Step One: Load the Vault Decryptor Tool

This tool was written by MetaMask co-founder Dan Finlay, and has recently been updated to be much more user-friendly. The decryptor can be accessed in a web page here:

<https://metamask.github.io/vault-decryptor/>

**If you’re concerned about someone having access to your computer over the Internet, you can load this page, and then disconnect your internet connection; it will work offline.** 
You can even download the code and run it on your machine, if you want to. The repository is[ here.](https://github.com/MetaMask/vault-decryptor)

## Step Two: Locate your Vault

When you load the tool, the easiest method by far of using it will be to click on "Database backup", then "Choose File":

  
![](https://support.metamask.io/hc/article_attachments/13473929359643)

At this point, a file explorer window will open, and you'll need to find the vault. 

**In Windows 10 or 11**, you should be able to find the location of the vault by going to this folder location (you need to be able to see the hidden files):

_C:\\Users\\USER\_NAME\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Extension Settings\\nkbihfbeogaeaoehlefnkodbefgpgknn_ 

**On a Mac,** the location of the folder should be:   
_Library>Application Support>Google>Chrome>Default>Local Extension Settings>nkbihfbeogaeaoehlefnkodbefgpgknn_

* If you're having trouble finding this location, try the following:  
   * Open a Finder window.  
   * Select Go -> Go to Folder... in the menu bar.  
   * Type \~/Library in the input field and click Go.

In that folder you'll see a file called 000003.ldb or something similar--**the specific number may differ, but it should be a low numerical value, like 000005 or 000004\. If it is a larger number, it is not the vault:** 
  
**![](https://support.metamask.io/hc/article_attachments/13474146474139)**

If you do try to decrypt a file that's not a vault, this will be the result:

![vault-notavault.png](https://support.metamask.io/hc/article_attachments/13474335273243)

#### Handling multiple vault files

If you have imported multiple SRPs into MetaMask on this system--and many of us have--you may have multiple vault files. You can decrypt each one, so long as you know its corresponding password.

**If you imported an SRP into MetaMask, and "lost" the SRP you had in MetaMask previously, that old SRP's vault file may still be on your system. You may be able to recover it using this process, so long as you know the password.** 

If you have an idea of what your password was, but can't _quite_ remember, you might want to try using [btcrecover,](https://btcrecover.readthedocs.io/en/latest/) a tool designed to help people manage and recover cryptographic keys. Specifically, it has functionality that automates the process of trying lots of different variations of a password. For an idea of what this process involves, check out [this chapter](https://youtu.be/TzZDcN6SnCU?t=266) of a btcrecover video tutorial.

When handling multiple vault files, keep in mind that they will likely have different numbers, although again, they should be low-value numbers, as stated above. Another important consideration is whether you used MetaMask in different browser profiles. If this is the case, or you think it may be, then it's worth looking. On Windows, this is a few levels up in the folder structure:

_C:\\Users\\<your-user-name-here>\\AppData\\Local\\Google\\Chrome\\User Data_

In that directory, you should see a set of folders, one for each profile created: 

  
![](https://support.metamask.io/hc/article_attachments/13607345314843)

Within each of those directories, navigate to _Extensions_, and you'll see the familiar MetaMask extension ID. Follow the same instructions as above with each one of your profiles until you find the vault you're looking for. 

**Tip: If you're handling a lot of different vaults, you should probably make a list of which one is where, and which password goes to which!**

![](https://support.metamask.io/hc/article_attachments/13607383091995)

## Step Three: Decrypt the vault

This part is easy, so long as you know your password. Simply put in your password, hit "Decrypt", and your Secret Recovery Phrase should appear below the box:

  
![vault-ldbupload.png](https://support.metamask.io/hc/article_attachments/13474291339803)

**Now: back up your SRP, _in the order in which the words appear on the screen_, somewhere safe.**

We recommend multiple copies in physical locations, or encrypted, non-Internet connected locations that you trust to be safe.

If you want to know more about a common form of key storage, hardware wallets, follow [our guide here](https://support.metamask.io/hc/en-us/articles/5450173968283-User-Guide-How-to-use-a-Hardware-Wallet).

Now that you have your SRP, you can proceed to [import your SRP into MetaMask and restore access to your accounts. ](https://support.metamask.io/hc/en-us/articles/360015289612-How-to-restore-your-MetaMask-wallet-from-Secret-Recovery-Phrase)

**Firefox**

#### Current Limitations of these instructions

Firefox has implemented changes to its data encoding that have made these instructions of limited use. If you have MetaMask installed in Firefox and know your password, the below instuctions may help solve your problem. If, however, you no longer have access to the browser or are attempting to recover an SRP from an old file system or backup, these instructions may not help, unless you are able to somehow access an instance of Firefox on that file system. As soon as we have a better solution, these documents will be updated.

In Firefox you may need to have the MetaMask extension opened in 'Expanded view' to be able to open the 'Inspect Element' or Web Inspector. Check out this video and follow the instructions below:
  
  
Open a new tab in Firefox and enter the following in order to find the extension's _UUID_ (Universally Unique Identifier): 

**about:debugging#addons**

**![UUID_Firefox.png](https://support.metamask.io/hc/article_attachments/11188660768027)**

You should be able to see the UUID of the MetaMask extension. Copy it to add it to the following URL (without the spaces):

**moz-extension://<your-UUID-here>** **/home.html**

![Extension_view_Firefox.png](https://support.metamask.io/hc/article_attachments/11188660817435)

This will open the MetaMask wallet in a browser tab in Firefox. 

* Right-click on the MetaMask wallet that's opened in the full-view tab to see the options
* Click the 'Inspect Element' option
* In the opened window, go to the Console tab
* Enter this command in the Console and click enter or return (you can copy+paste the following command):

chrome.storage.local.get('data', result => {  
 var vault = result.data.KeyringController.vault  
 console.log(vault)  
})

* This should return a result that begins " _{"data":_ ". This is the vault data (which is in JSON format).
* Copy it to your clipboard.
* Proceed to the Vault Decryptor that you can find in the link below and also see the open-source code at [GitHub](https://github.com/MetaMask/vault-decryptor):

<https://metamask.github.io/vault-decryptor/> 

_This Vault Decryptor tool can also be used offline, you just need to use your browser's tool bar > File > Save page as... > MetaMask Decryptor.htm. Then open the **MetaMask Decryptor.htm** file in your browser with your computer disconnected from the Internet._

* On the Vault Decryptor page, paste the _{"data":}_ part of the vault data and use the password you set for your wallet in the MetaMask Extension and click the "Decrypt" button.
* If successful, you'll see the result below the Decrypt button showing the _"mnemonic"_ 12 Word English Secret Recovery Phrase, along with any other imported _"Simple Key Pair"_ (private key).  
    
You can now use the Secret Recovery Phrase (and private keys) to restore your MetaMask wallet.

### **We urge you strongly to make sure that you always backup your Secret Recovery Phrase, and any manually imported private keys, so this never happens again.**

**Recovering an old SRP after importing another one (Chrome-based)**

### Did you import an SRP into MetaMask and lose your old one?

MetaMask can't detect multiple vault files, or switch between them--but if you imported an SRP to MetaMask, the vault might still be there, or in a backup of your system made at the time.

Currently, we only have a process for this on Chrome-based browsers, but we're working on it for Firefox, and we'll update this documentation when we have one. Follow the instructions above, under "Chrome-based browsers", and pay special attention to the note at the end of Step 2, regarding 'Multiple vault files'.

**Manual extraction method**

What if I can't upload my vault file? (Chrome-based browsers **only**)  
  
The Vault Decryptor tool's vault upload feature has built in order to avoid users having to step through a fair amount of manual work involved in finding, formatting, and extracting their vault data. However, if you're in a situation where, for whatever reason, you can't use that feature, the steps below may help.

Keep in mind that this process changes from time to time, without MetaMask being aware; this is due to the fact that Chrome can change the way it saves data to disk, for example; or [how it encodes data](https://blog.hubspot.com/website/what-is-utf-8), which affects this process. **If you notice such a change, please let us know--keeping these instructions up to date is a group effort! ❤️🦊**

#### Note: it is due to exactly these issues, encoding, that we currently **do not have documentation for this process in Firefox**. The team is actively working on resolving this, and as soon as we have a process, these documents will be updated. 

**In Windows 10 and 11**, you should be able to find the location of the Vault by going to this folder location (you need to be able to see the hidden files):

_C:\\Users\\USER\_NAME\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Extension Settings\\nkbihfbeogaeaoehlefnkodbefgpgknn_ 
  
**On a Mac,** the location of the folder should be:   
_Library>Application Support>Google>Chrome>Default>Local Extension Settings>nkbihfbeogaeaoehlefnkodbefgpgknn_

* If you're having trouble finding this location, try the following:  
   * Open a Finder window.  
   * Select Go -> Go to Folder... in the menu bar.  
   * Type \~/Library in the input field and click Go.

In that folder you'll see a file called 000003.ldb or something similar--**the number doesn't matter, you're looking for .ldb files**. Open that file with a text editor or code editor software like Atom (https://atom.io/) or [sublimetext](https://www.sublimetext.com/). _Note: The screenshot below says file type 'text document' because it was already opened with a text editor._

![screenshot_vault_location.PNG](https://support.metamask.io/hc/article_attachments/360017332831/screenshot_vault_location.PNG)

Once you've opened the file, search for the word "keyring". There will be a dense block of text following it (if using SublimeText, it might be easier to view it by clicking on "View" and "Enter Distraction-Free Mode"), which looks like this:

  
![mceclip0.png](https://support.metamask.io/hc/article_attachments/10204253413659)

**This is your vault data; however, we will need to re-format certain parts of it in order to be able to decrypt it: We'll need to make sure you have the "data", "iv", and "salt" sections properly labelled.**

In order to do this, we'll need to copy-paste your vault data to a new text editor file. Look at the section following "Keyring" in the text. There's a section that reads **{\\"???'<0x04>\\"**. That's the beginning of your vault data. Now look for the word "salt". Following "salt" there's a long string of alphanumeric characters in quotation marks, and that section ends with **\=\\"}** _. That's the end of your vault data,_ so **copy from the opening curly bracket following "Keyring" to the closing curly bracket following the alphanumeric characters after "salt", and paste into a new text editor document.**

Whew! Now's the easy part. I promise.

**"data":**

You already saw this part of the text: **{\\"???'<0x04>\\"**  Keep in mind that yours might look a little different; it might be a different code between the triangle brackets, for example. In any case, make this part of the text look like: **{"data"**

**"iv":**

This isn't always changed; in the screenshot above, for example, they're functional as-is. If your code looks like that, you're good to go!

**"salt":**

Like with "iv", look to make sure "salt" looks like it does in the screenshot above. Additionally, make sure that the entire text block ends like this: ="} **not like this:** \=\\"}"}

**remove slashes:**

Use the Search and Replace feature of the editor to change all the **\\"** to **"** (removing them):

![mceclip2.png](https://support.metamask.io/hc/article_attachments/10206783991451)

You would now have something like this:

_{"data":"wwpXXtFCqZkYsWfeEwItZjJ0Cc7mRVjG47Dqh+ztL1PiCG6Izhg+zG0mM+H2ykyjz3X0RNhAE6IVsWFZamcZ47B4sVi4SvUxrMhARm5L3yHPxr3UsyGrOXmthyVMgEGmjwlmnFCNd2nMZ2o8/sRMra8FupurqevnBv57FiYpEEs7gPpFHv6587aL44MmKD8Snv4JLFqiqmlK82Waq5F+Iv9mw2sFVAL9mgZBSgFgbWdB3TsKVB2k","iv":"rkUQlNcGTxBE0My7a/bCXw==","salt":"HcKyNfGzaRALRQ0DlKgcIe5Uk30iI/M//oG6w8vX8Nk="}_ 
  
* **Note: upon opening the .ldb file in sublimetext,** you may get thousands of lines of something that looks like the following:  
    
![mceclip0.png](https://support.metamask.io/hc/article_attachments/4405814045723/mceclip0.png)  
    
If this is the case, click on **File>Reopen with Encoding>UTF-8**. At this point, you can search for "vault" and find the data you need.

#### **OK! That's it! You're ready to decrypt!**

You can now go to the Vault Decryptor (<https://metamask.github.io/vault-decryptor/>) and paste the vault data there, then enter the password you set for the extension when you created your MetaMask wallet. You should be able to see your secret Seed Phrase / Secret Recovery Phrase and any manually imported private key below if you click the Decrypt button.

#### iOS method currently unavailable

We've recently become aware that the iOS recovery method is no longer working. We're investigating the cause and will update this page when we have updated instructions.

### **In order to recover your vault data, you will need:**

* You **must have had** iCloud backup enabled in your iCloud settings while the app was being used.
* The password that was used on MetaMask Mobile when the vault was created (or restored on that device)
* MacOS running on a separate computer or laptop, other than the mobile device in question
* An app capable of displaying JSON data in a readable fashion. You may need to download one, for example: <https://imazing.com/download/macos>
* A WiFi connection or the appropriate cable to sync your phone and your computer

### **Procedure**

* Connect the mobile device to the computer, either via wifi or a physical cable, so that the mobile device appears in your Finder.  
   * Search for the word "KeyringController"  
   * Copy and paste that JSON object into a new document. It will look something like this:  
      * {\\\\\\\\\\\\\\\\\\\\\\\\"cipher\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\"JaX8Z80QMzzqA4XMgPsUuleNLIuxvchXZ5q1SO9GO1kuNUmokUke06op9EF0ZU4WXsILfUZ0yKI5kjzYY9H12t5aGb43BOAWJwlKuC8neXWeL5enoD/L05eDC9tzZEBupLwF7cGG6JdPHHQKdRDWWbQM+TUo6EvZv7LClPZQVJ17uowGvPMPB0UwfPea7DP/dE5DYleHmX1rhxAJr1YN4HUPAYpCCReU4W4/2QsaM+E=\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\"iv\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\"dcabe6ed590ae3ee8e056c7844c58047\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\"salt\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\"h6IkHlWjloB9c9+KiGgYvQ==\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\"lib\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\"original\\\\\\\\\\\\\\\\\\\\\\\\"}
   * Back up the mobile device as per the instructions [here](https://support.apple.com/guide/iphone/back-up-iphone-iph3ecf67d29/ios) under 'Backup your iPhone using your Mac'. We recommend using the _encrypted option_, and **making a note of the password for later.**
   * Select Manage Backups
   * Show in Finder
   * Drag the backup folder into the iMazing app, or whichever app you're using to read the backup. **This is the point at which you'll need your password if you encrypted the backup.**
   * In the backup tool, navigate to Apps->MetaMask->Documents->persistStore->persist-root
   * Open the persist-root file. It will be a lengthy file in JSON format.
   * Modify the object to reflect the example below (manually remove all \\\\\\ and ensure there are no white spaces):
   * {"cipher":"JaX8Z80QMzzqA4XMgPsUuleNLIuxvchXZ5q1SO9GO1kuNUmokUke06op9EF0ZU4WssILfUZ0yKI5kjzYY9H12t5aGb43BOAWJwlKuC8neXWeL5enoD/L05eDC9tzZEBupLwF7cGG6JdPHHQKdRDWWbQM+TUo6EvZv7LClPZQVJ17uowGvPMPB0UwXPea7DP/dE5DYleHmX1rhxAJr1YN4HUPAYpCCReU4W4/2QsaM+E=","iv":"dcabe6ed590ae3ee8e056c7844c583d7","salt":"h6IkHlWjloBgc9+KiGTYvQ==","lib":"original"}
   * Now you can copy the vault payload into the mobile app.
   * Start up the MetaMask app on your iPhone and go to the Wallet Setup screen select “Import using Secret Recovery Phrase”
* In the Import using Secret Recovery Phrase screen, you can paste the vault into the seed phrase text box and then the password you want to try to unlock the vault in the password text boxes (passwords have to be the same). This is the password that was used when this vault was created or restored on this device. If the vault can be decrypted by the password, your wallet will be successfully set up.
   * Import using Secret Recovery Phrase (example image):  
   ![c2fc390b-7415-4b83-b89c-5533d8653b70.png](https://support.metamask.io/hc/article_attachments/4411049951131/c2fc390b-7415-4b83-b89c-5533d8653b70.png)
   * On successful setup of your wallet you should **REMEMBER to back up your seed phrase after your wallet is set up.**

We are currently working on a solution for Android; as soon as it is available, we will post it here.

### **We urge you strongly to make sure that you always backup your Secret Recovery Phrase, and any manually imported private keys, so this never happens again.**#Failed transaction scams#
You've probably heard of airdrops, right? Well, although seemingly a win-win and potentially useful for new projects looking to quickly distribute tokens, airdrops can be a scam vector in numerous ways. 

A common scam involves airdropping unsuspecting users with a token whose smart contracts make it impossible to be moved from your wallet. So, naturally, when you try and move it, the transaction will fail. 

## How failed transaction scams work

Here's how common and garden _failed transaction_ scams usually go:

1. **A mysterious token is airdropped into your wallet**. At first, you may not notice it — this could be because in MetaMask, tokens are only [auto-detected](https://support.metamask.io/hc/en-us/articles/360015489031) on certain networks if they belong to lists of established tokens. However, you might run into it whilst looking at your wallet activity in our [Portfolio Dapp](https://portfolio.metamask.io/) or a similar platform, or by [looking at your account on a block explorer](https://support.metamask.io/hc/en-us/articles/360057536611).
2. **You try to transact using the token**. On finding out from a token listing site that the token actually has some value, the natural reaction from most users unaware of the scam vector is to try and swap it for a more established token, and bank its value.
3. **Your transaction (swap) fails**. For tokens configured to deliberately facilitate these scams, your transaction could never have completed. So if you're intrepid and persistent, you'd visit a block explorer to try and identify the cause of the failed transaction.
4. **The failure message directs you to a fraudulent site that will steal your funds**. When you open up the transaction's details on the block explorer, you'll see a message asking you to head to another website to stake/swap/cash out (etc.) your airdropped token. Once there, the scammers could potentially try and scam you by:  
   * Manipulating you into handing over your Secret Recovery Phrase ([you should never give this to anyone](https://support.metamask.io/hc/en-us/articles/360015489591)).  
   * Encourage you to sign an approval that grants them access to all tokens of a certain type in your wallet (which they'll then use to quickly transfer them to their own wallet).

The message attached to your failed transaction is therefore a lure to a location of the scammer's choosing where they can most easily coerce you into handing over tokens or your SRP. 

#### Stay alert!

The nature of scams is always developing, so it's entirely likely that if you encounter this method, it won't follow the above steps by the letter. It could include other methods such as simply manipulating you into sending tokens to an address (usually with the promise of earning more back in return, at some point) or handing over personal information like bank account numbers or card details.

## 

## How to avoid failed transaction scams

Unfortunately, and like any other web3 scam, there is no single trick or downloadable software that can prevent you from falling victim to this scam. When using a [self-custodial wallet](https://support.metamask.io/hc/en-us/articles/360059952212) like MetaMask, you are solely responsible for your safety. Stick to these general principles:

* **Never give your Secret Recovery Phrase (seed phrase) to anyone**, regardless of who they say they are or what they're offering. Someone called "Metaa\_\_MasK-support" on Twitter is not out to help you.
* **Be sceptical of anything that seems too good to be true, because it most likely is**. Ridiculous APYs, sky-high returns, free money, etc. — it will probably be a scam, or, at best, something you should think twice about getting involved in.
* **Clue up on how token approvals work and why they're a common scam attack vector**. Read more [here](https://support.metamask.io/hc/en-us/articles/6174898326683).#An NFT is missing or not displaying correctly in Portfolio#
#### Looking for information on NFTs in MetaMask?

This article is specifically about displaying NFTs in the Portfolio Dapp at [portfolio.metamask.io](https://portfolio.metamask.io/). For information about NFTs in MetaMask Extension or Mobile, see [here](https://support.metamask.io/hc/en-us/articles/360058238591).

Let's break this down depending on which of these two issues you're experiencing:

## An NFT is missing

The way the Portfolio Dapp works is by leveraging data indexing services that compile (index) on-chain activity so that we can display it in the application. Sometimes, **NFTs may not display amongst your assets because they have not yet been indexed by these services**.

In these cases, please wait a short while. If you've already been waiting a significant time, and you can [verify on a block explorer](https://support.metamask.io/hc/en-us/articles/360057536611) that the NFT is in your account, please get in touch with us via the 'Submit a Request' button at the top of the page.

## An NFT is not displaying correctly

Just like major NFT platforms such as OpenSea, for the dapp to display the NFT image, GIF, or video itself, we need to be able to access NFT metadata. Metadata refers to the various characteristics of the token that define it: aspects such as quantity, rarity, name, description, etc. 

The metadata itself should ideally be in a standardized format which our dapp is built to interpret. **If the image metadata (or visual metadata more generally) is not in a supported format, it won't be displayed in the dapp**. We're working on adding support for more formats and making sure as many NFTs display correctly as possible. 

However, if you don't see your NFT image and just a placeholder instead, rest assured nothing has happened to it, and that it still safely in your account on-chain. #Network profile: Harmony (ONE)#
Network name

Harmony Mainnet

Token

ONE

RPC

https://api.harmony.one

Chain ID

1666600000

Block explorer

[explorer.harmony.one](https://explorer.harmony.one/)

Website

[harmony.one](https://www.harmony.one/)

Begun as a startup in 2018, Harmony is an EVM-compatible network with two core objectives: scalability and decentralization. It was the first **sharded** layer 1 (L1) network to launch using a proof-of-stake consensus mechanism.

As it is an L1 network, Harmony **uses its own token, ONE**, to pay for transactions and for validators to stake (and, in turn, receive rewards). 

Having multiple shards simply means the network is partitioned into distinct sections to increase potential throughput. Harmony has four shards, with its nodes distributed equally between them. Sharding is one method of solving the 'blockchain trilemma' of simultaneously achieving scalability, security and decentralization. 

Harmony's key features include:

* **Secure random state sharding**. Network validators are randomly shuffled between shards to maximize security.
* **Two-second finality**, i.e. the ability to confirm blocks within two seconds. They achieve this through their [Fast Byzantine Fault Tolerance (FBFT) consensus algorithm,](https://docs.harmony.one/home/general/technology/consensus) which allows the network to agree on blocks extremely quickly. FBFT's name derives from the [Byzantine Fault problem](https://en.wikipedia.org/wiki/Byzantine%5Ffault) (a.k.a. The Byzantine Generals Problem), which confronts the challenge of how to achieve consensus between multiple parties when some of them are potentially unreliable.
* **Effective Proof-of-Stake (EPoS) consensus** **mechanism**. Designed specifically for the network's sharded design, this system involves electing validators based on their stake: to earn staking rewards, validators need to run more nodes, ensuring each validator does their fair share. EPoS also evenly distributes stakes across shards to ensure a consistent level of security across the network.

Harmony also has a growing ecosystem of dapps, has its own native wallet, and has developed [bridges](https://bridge.harmony.one/erc20) between its own network, Ethereum and BSC. 

## **Using Harmony**

**How do I use Harmony with MetaMask?**

Harmony ONE is already configured as a popular network in MetaMask, so adding it is straightforward. Click 'Add network' and head to the 'Add popular networks' area (instructions [here](https://support.metamask.io/hc/en-us/articles/360043227612)). From here, adding it to MetaMask should only take a few clicks or taps.

Once you're on the correct network, if your tokens aren't appearing, make sure you [add the token](https://support.metamask.io/hc/en-us/articles/360015489031) you want. 

To get tokens onto Harmony, you will then need to bridge them using the official Harmony bridge. See below for more information. 

**Are my MetaMask address and my Harmony address the same? Which do I need?**

In a way. Your Ethereum address has a corresponding Harmony address -- but you should not regard them as interchangeable. 

Ethereum addresses all begin with the prefix '0x', whereas Harmony addresses begin with 'one1'. You can find your corresponding address using the [Harmony block explorer](https://explorer.harmony.one/); just find the ONE/ETH switch in the top right of the page. 

You should **always use the Ethereum address format on MetaMask** when using the Harmony network. Only use the Harmony address formats when using the Harmony ONE Wallet. For further information, see [here](https://blog.harmony.one/launching-full-ethereum-compatibility-on-harmony/#:~:text=Note%3A%20when%20using,0x%E2%80%99%29%20address%20format.). 

**What token do I need?**

ONE is the network's native token. Similarly to how gas fees on Ethereum mainnet are paid in ETH, you need ONE tokens to pay for transactions on Harmony. 

ONE tokens are also used for staking (and associated rewards) and governance. 

**Can I send tokens directly from Ethereum to the Harmony One network?**

No.

You should never send tokens to an address on another network without bridging, otherwise you risk permanently losing the tokens. Even though Harmony One and Ethereum are interoperable by virtue of the former being an EVM-compatible network, they are different blockchains, and you can't move assets between without going through the bridge.

**Using the Harmony 'Horizon' bridge**

Head to the bridge at [bridge.harmony.one](https://bridge.harmony.one/), Horizon.

The bridge works with both Ethereum and BNB Smart Chain (BSC). Although we don't need to get into the technical details, it's essentially a series of smart contracts which 'lock' the original asset (the one you want to transfer to Harmony) and mint an identical quantity of a bridged asset. 10 BUSD bridged from Ethereum will become 10 1BUSD, with the '1' prefix indicating it is a Harmony HRC-20 token that came from Ethereum. 10 BUSD that come from BSC, meanwhile, will become 10 bscBUSD on Harmony, with the prefix similarly indicative of its source.

When you access the page, you'll see you can choose between a range of popular tokens on both BSC and Ethereum. To use the bridge, you need to:

**Connect your wallets**. You will need to connect a source wallet, from which to send the tokens, and a recipient wallet. MetaMask can function as both. 

* If you want to transfer from Harmony back to Ethereum or BSC, you can either select MetaMask (make sure you have the Harmony network selected) or your ONE wallet.

![mceclip0.png](https://support.metamask.io/hc/article_attachments/4416937968283/mceclip0.png)

**Make sure you've selected the right bridging direction in the top left**: 

![mceclip1.png](https://support.metamask.io/hc/article_attachments/4416938039963/mceclip1.png)

**Select the token or token type you want to bridge and input the desired quantity**. 

Then **add the recipient wallet address.** If your MetaMask is already connected, there will be an option to insert the address of the connected account. When you click 'Continue', the transaction details will be displayed for you to confirm, and then you will be prompted to sign the transactions using your wallet. 

Note that **you can only withdraw from Harmony to the network your tokens originally came from**. For example, you can move tokens from Ethereum to Harmony and back, but cannot withdraw those same tokens from Harmony onto BSC. 

 **What are HRC-20, HRC-1155 and HRC-721 tokens? How do they differ from Ethereum token standards?**

As it is EVM-compatible, Harmony deliberately mirrors the token types available on Ethereum. HRC-20, for example, is equivalent ERC-20 tokens, and so on. 

These token types reflect what your tokens will become once bridged over to Harmony: for example, USDT, an ERC-20 stablecoin, will become a HRC-20 token on Harmony. 

**How do I get ONE tokens?**

You can buy ONE from several major exchanges — check the token's markets page on [Coingecko](https://www.coingecko.com/en/coins/harmony#markets) or [Coinmarketcap](https://coinmarketcap.com/currencies/harmony/markets/) to review your options.

Another method is to buy directly on Harmony: <https://www.harmony.one/buy> 

When transferring the ONE you have purchased out of the exchange wallet, make sure to convert to the correct address type. If you're sending to MetaMask, you will need to select the Ethereum address. See above.

### 

## **Relevant support articles**

[User Guide: Custom networks and sidechains ](https://support.metamask.io/hc/en-us/articles/4404424659995-User-Guide-Custom-networks-and-sidechains)

[Add a network using Chainlist (Extension or Mobile) ](https://support.metamask.io/hc/en-us/articles/360058992772-Add-a-network-using-Chainlist-Extension-or-Mobile-)

## **Useful resources**

[Harmony Bridge FAQ](https://bridge.harmony.one/faq)

[Messari report on Harmony](https://open.harmony.one/messaris-report-on-one) (useful summary)

[Harmony docs](https://docs.harmony.one/home/) (concise and broken down into categories)#Transferring assets to the Binance exchange#
#### _Note: This article describes the process for moving assets you hold in MetaMask to the Binance centralized exchange (CEX). This is not the same thing as m[oving assets from MetaMask to the Binance Smart Chain.](https://support.metamask.io/hc/en-us/articles/360059408871-Sending-funds-to-the-Binance-Network-BSC-)_

If you are trying to transfer assets to Binance from MetaMask, please make sure you are following the guidelines in order to avoid a loss.

First of all, you have to understand that Binance is a centralized exchange which functions on a limited number of networks. **(Ethereum mainnet, Binance Smart Chain, Polygon, etc.)** So please make sure you're certain of:

* The network your tokens are currently on (the one you're sending from)
* Support for that network on the Binance exchange.

#### Warning

If you've already sent the tokens and Binance does not support the network, your funds are most likely gone for good. For further information, please contact Binance at <https://www.binance.com/en/support>**.** 

After making sure that Binance supports the network, you will need to make sure that you have funds in MetaMask for gas fees _on that network_.

Please note that gas fees are paid in the native token of the network, for example:

* ETH for Ethereum Mainnet
* BNB for Binance Smart Chain
* MATIC for Polygon.

If you don't have tokens for the gas fees, you won't be able to send the assets to the Binance exchange.

Follow [Binance's instructions here](https://support.binance.us/hc/en-us/articles/360046787054-How-to-Deposit-Crypto) (for the US exchange) [or here](https://www.binance.com/en/support/faq/115003764971) (for outside the US) to obtain the specific address for the token you're depositing within your Binance account. Copy this address and paste it into MetaMask [when you are asked for the destination address.](https://support.metamask.io/hc/en-us/articles/360015488931-How-to-send-ETH-and-ERC-20-tokens-from-your-MetaMask-wallet)#My transaction is successful but the amount I received is far lower than the amount confirmed#
If you have completed a transaction successfully but you've noticed a discrepancy between the amount confirmed in your MetaMask wallet and the amount you received (and displayed in the [block explorer](https://support.metamask.io/hc/en-us/articles/360057536611)), please check if the token you received is subject to a "tax".

As an example, a 10% tax applies on SAFEMOON transactions, and OKTA transactions are subject to an 8% tax.  

For further details please refer to the token issuer documentation.

If you want to read more about potential reasons why your tokens aren't displaying correctly, see our articles [here](https://support.metamask.io/hc/en-us/articles/360059232852).#Error fetching quote#
MetaMask Swaps only displays quotes for potential swaps when there is sufficient liquidity on underlying markets. Generally, a few thousand dollars' worth of liquidity is required to mitigate price impact. Once a token has sufficient liquidity, it will be available.

![Error fetching quote](https://support.metamask.io/hc/article_attachments/11992916322075)

The message ("error fetching quote") you see suggests that there is no liquidity available for the token you want to swap.

You can always check [coingecko.com](https://www.coingecko.com/en), search for your token, then click the **Markets** tab to see where you could swap this token and where it can be traded.#How to view ETC Ethereum Classic token #
If you have sent ETC funds to your MetaMask addresses, you could try using the interfaces of MyCrypto or MyEtherWallet if they support switching to the ETC network, to see and send the ETC funds you may have in your addresses.

Alternatively, you can set up a custom RPC server in your MetaMask extension to see the balance of ETC available.

**Before proceeding, familiarize yourself with working with sidechains and custom networks through our [User Guide here](https://support.metamask.io/hc/en-us/articles/4404424659995).**

### **In MetaMask Extension**

1. Click on the identicon in the upper right-hand corner of Metamask Extension
2. Navigate down to Settings, and then to the Networks section
3. In the Networks section, click the **Add Network** button
4. Click 'Show Show Advanced Options', and set:  
**Network name: ETC**  
**New RPC URL: https://www.ethercluster.com/etc**  
**ChainID: 61**  
**Symbol: ETC**
5. Click Save
6. Select the ETC network you have just added at the top dropdown menu
7. Alternatively, you can check: <https://chainlist.wtf/> to auto-connect to ETC network.

You should be able to use the Send button to send ETC to any Ethereum Classic address.#Why are my gas fees so high?#
The Ethereum network requires [gas](https://support.metamask.io/hc/en-us/articles/4404600179227) to execute transactions. When you send tokens, interact with a contract, send ETH, or do anything else on the blockchain, you must pay for that computation. That payment is calculated in gas, and gas is always paid in ETH. _(Other networks that use gas, or have a similar model, usually pay gas in their native token: e.g. BNB, MATIC, etc.)_

### Okay, yes, I get that, but why are they so high?

The price of gas is dynamic and is essentially a product of demand: the more people that are trying to get their transactions processed by the network, the higher it will be. Each additional person can—if they have the means—increase their priority fee to raise the chances that their transaction will get processed sooner. 

In addition to being under the sway of demand, **one of the reasons Ethereum can be costly to transact on is because of its security**. In a way, security is the feature for which you're paying a premium. Ethereum's high level of security is a product of its age (it has weathered a lot more challenges and attacks than most blockchains) and its distributed, decentralized nature. Ethereum is, as a rule, far more decentralized than many other blockchains, and although many alternatives have much cheaper transactions, they are likely to have compromised on the 'security' element of the [blockchain trilemma](https://coinmarketcap.com/alexandria/glossary/blockchain-trilemma) (although many claim to have solved this challenge). 

Some other contributors to the price of Ethereum's gas fees include:

* The **popularity of NFTs on Ethereum**. Many spikes in gas prices can be attributed to highly anticipated NFT drops.
* Ethereum is **the home of DeFi** (decentralized finance). Many of the largest, most established dapps were built on Ethereum, and continue to be the biggest players in DeFi. This [DeFiLlama chart](https://defillama.com/chains), comparing TVL (total value locked) in DeFi across major networks, shows Ethereum comprises \~58% of the DeFi market at the time of writing. All the transactions that accompany this popularity naturally raise computational demands on the network.

### Is there anything I can do about it?

You are paying for the computation of your transaction, regardless of whether it succeeds or fails. Even if it fails, the validators must confirm and execute your transaction, which takes computational power. You must pay for that computation, just like you would pay for a successful transaction. This means **there's no way around paying gas fees** if you want to use a network. 

However, if you have a bit of time and flexibility, you may be able to reduce costs:

* You can try to **lower gas fees in your [transaction settings](https://support.metamask.io/hc/en-us/articles/360022895972)**. Please keep in mind that overriding MetaMask's suggested gas settings with a much lower total will result in your transaction being processed very slowly, and could even result in you wasting your money if it becomes 'stale' and isn't picked up at all.
* **Develop an understanding of peak times**. Although crypto is global, peaks will typically be during the waking hours of the North American continent (between UTC-5 and UTC-8), which you could plan to avoid.
* **Investigate alternative networks**. You can use MetaMask to take advantage of the multi-chain web3 that is emerging. Whether you stay directly within Ethereum's orbit on [layer 2s](https://support.metamask.io/hc/en-us/articles/4415750833691-Network-profiles-hub#:~:text=Layer%202%20%28L2,them%20for%20security.), or emigrate to one of many EVM-compatible chains, there are cheaper alternatives (though you will have to [bridge](https://support.metamask.io/hc/en-us/articles/4836913606683) tokens to them first).

For current network gas conditions, see <https://etherscan.io/gastracker>.

#### Gas on networks other than Ethereum mainnet

Most EVM-compatible networks—those that you can use with MetaMask—have similar gas mechanisms to Ethereum, so the principles on this page apply more broadly. However, since other chains do not necessarily have ETH as their **native token**, you need to pay for gas in different ways. Gas on Polygon, for example, is paid in MATIC, the network's native token, and BNB Chain fees are paid in BNB.#How can I get my weekly ETH purchase limit raised?#
The methods for buying crypto in MetaMask are third-party providers, integrated into MetaMask. See our [guide](https://support.metamask.io/hc/en-us/articles/360058239311) to buying crypto on MetaMask for further information. 

If you would like to increase the weekly purchase limit, please contact the provider directly.#How to view your account details and public address#
To find your account's address, just hover over the label for the selected account — in this case, **Account 1** — which will let you copy the account's address to the clipboard. If you're on MetaMask Mobile, you may have to tap a few times.

![How to view your account details public address copy](https://support.metamask.io/hc/article_attachments/8970825984923/How_to_view_your_account_details_public__address__copy_address_.gif)

Click on the three vertical dots on the right-hand side and select the **Account details** menu (see below):

![How to view your account details public address view QR code](https://support.metamask.io/hc/article_attachments/8970860737691/How_to_view_your_account_details_public__address__view_QR_code_.gif)

You will then see:   

* QR code for your account
* Your **public address**
* An option to view your account on etherscan.io
* Export your **private key**#How to tell if a smart contract is safe to interact with#
Smart contracts are the computer programs that run on the Ethereum Virtual Machine (EVM) and similar blockchains. Their name is somewhat misleading: when you interact with them, you're not signing up to a contract, but simply triggering a program to run. 

The [virtually endless possibilities](https://www.geeksforgeeks.org/what-is-meant-by-turing-complete-in-ethereum/) for smart contract functions is what makes Ethereum and web3 so powerful. Their accessibility is also a key feature: since web3 is meant to be decentralized and accessible to everyone, smart contracts can be created and deployed by anyone who wants to. Inevitably, some try and exploit this freedom to take advantage of other users. 

This is why you should learn how to identify fraudulent smart contracts and stop yourself falling victim to their scams. 

For clarity, smart contracts could represent:

* A token, such as ERC-20 tokens, which are defined and managed by smart contracts, or even an NFT collection
* A function within a dapp, such as a program which oversees a token swap, or even a DAO's governance mechanisms.

## Connecting vs. approving

When using MetaMask in the big wide world, you'll often be prompted to **connect** your wallet. You'll also reasonably often be asked to **approve** certain operations. In this context, it's approvals (also referred to as allowances) you need to focus on: the distinction is important!

* **Connecting your wallet** to a site doesn't allow it to do anything with your funds unless you specifically consent. So whilst this connection will enable a dapp to propose certain transactions or actions to you, nothing will happen to your funds unless you approve the transactions that are suggested. Read more on connecting your wallet [here](https://support.metamask.io/hc/en-us/articles/360059535551).
* **Approvals**, meanwhile, involve giving a smart contract the ability to interact with a certain token, in a certain quantity, as and when they require. You should always stop and think when being asking to approve something, as it generally involves handing over control of your assets to a computer program that could have been written by anyone. Read more [here](https://support.metamask.io/hc/en-us/articles/6174898326683).

## 

## Checking if a smart contract is trustworthy

Let's go through some things to look for when evaluating whether you should trust a smart contract:

1. **Is it asking you to approve access to your tokens**?  
   * Other than social engineering to get hold of your Secret Recovery Phrase ([learn how to stay safe](https://support.metamask.io/hc/en-us/articles/360060826432)), token approval scams are one of the most common attack vectors in web3\. This is why we explained them in brief above. If you consent to a dapp's token approval, you're handing it control of whatever token (and _quantity_ of that token) that you approve. **This alone should make you think twice**.  
   * Does the token to which the dapp is requesting access make sense? Is it relevant to the dapp functionality you intended to use?  
   * Does the quantity of token being requested make sense? Bear in mind that many popular apps request access to an essentially infinite amount of the token to prevent you having to sign (and pay for) numerous transactions in future. Read more [here](https://support.metamask.io/hc/en-us/articles/6174898326683).
2. **Look up the address on the relevant block explorer**. All smart contracts have an address. Any reputable dapp, NFT collection, or other party should make this address readily available; either directly on their main site or in docs. MetaMask will also show you the smart contract's address before you sign any transaction involving it.  
Input the address into a [block explorer's](https://support.metamask.io/hc/en-us/articles/360057536611) search bar. Many of these, including Etherscan, will tell you if the code is verified or not, as highlighted below. You can also check to see if the contract has a name — if it doesn't it could be either very new or untrustworthy.  
![Smart contract verification Etherscan](https://support.metamask.io/hc/article_attachments/13306514521371)  
You could also check the comments section on the block explorer for an indication of user sentiment. Though take this with a pinch of salt, as it could be influenced by fraudulent actors themselves.
3. **Use coin/token listing sites to investigate a token**. Go to [Coingecko](https://www.coingecko.com/), for example, and input the token's name or address. You should be able to see relevant details about the token, such as the project's website and their socials. Here you could check whether the dapp/token/project has a genuine, active community that isn't just full of bots, or look for a white paper on their website that demonstrates that it isn't just a [rugpull](https://support.metamask.io/hc/en-us/articles/4407169552667)\-in-waiting. Our guide to [Token safety practices](https://support.metamask.io/hc/en-us/articles/4403988839451) is also very useful in this context.
4. **Check recent contract activity**. Look at the recent transactions listed on the smart contract's page on the block explorer. Whilst block explorers can be overwhelming, just try and focus on **spotting patterns**, and then asking why that pattern might exist. A common fraudulent practice, for example, is to prevent token buyers and holders from selling a token — so if you don't see any _sell_ transactions, you may be looking at a honeypot scam, or similar.

Unfortunately there is no way to be 100% of a smart contract's legitimacy, short of spending many hours familiarising yourself with Solidity and related coding languages so that you can audit them yourself. 

**So it bears repeating: always act with caution on web3**. If you're not sure about a specific site or have any further questions, get in touch with us via the 'Start a Conversation' button on the homepage of this site. #How to watch an account in Portfolio#
#### Looking for how to add an account to MetaMask, or import an existing one?

This article is specifically about watching accounts in the Portfolio Dapp, available at [portfolio.metamask.io](https://portfolio.metamask.io/). To add an additional account to your MetaMask wallet, see [here](https://support.metamask.io/hc/en-us/articles/360015289452); to import an existing account, see [here](https://support.metamask.io/hc/en-us/articles/360015489331).

Watching an account lets you add it to your portfolio without connecting to it directly as you do with the [typical method for adding accounts](https://support.metamask.io/hc/en-us/articles/7646870264731). 

You can watch any MetaMask account that exists. This is useful if, for example, you have numerous MetaMask wallets (i.e. multiple Secret Recovery Phrases): due to the nature of MetaMask Extension and MetaMask Mobile, you can only be signed into a single wallet at a time in the same browser instance or mobile device. By watching your accounts, you can bring together multiple MetaMask wallets within the same portfolio. 

To watch an account, follow these steps:

1. Find the account selector at the top of the portfolio page. Click it, and then click on 'Add another account' at the bottom of the menu:  
![Metamask Portfolio Dapp Watch_Account](https://support.metamask.io/hc/article_attachments/12506682158363)
2. Now you'll be presented with the option to connect via MetaMask or to watch an account. Naturally, we want to pick the latter:  
![Metamask Portfolio Dapp Watch_Account](https://support.metamask.io/hc/article_attachments/12506666687387)
3. Input the ENS name or public address of the account you want to watch, and click 'Import'.
4. The account will be added to your portfolio. The account's balance and held assets will be reflected in your overall portfolio view, though you can filter the displayed accounts by unchecking them in the account selector.  
![Metamask Portfolio Dapp Watch_Account](https://support.metamask.io/hc/article_attachments/12506666687771)#Network profile: Arbitrum#
Network name

Arbitrum One

Token

ETH

RPC

<https://arb1.arbitrum.io/rpc>

Chain ID

42161

Block explorer

[Arbiscan](https://arbiscan.io/)

Website

[portal.arbitrum.one](https://portal.arbitrum.one/)

Developed by Offchain Labs, Arbitrum One was the first live, permissionless Ethereum **layer 2 (L2) network** with full smart contract functionality. Its mainnet, currently in beta, went live in August 2021\. At the time of writing, it has the largest market share of all L2s, at over 50%. 

Arbitrum was specifically developed as a scaling solution for Ethereum, designed to provide an experience as close to Ethereum itself as possible (right down to **using the same token, ETH**) whilst minimising fees and improving capacity. As a L2, its network is external to Ethereum but closely linked, running in parallel and on top of mainnet (as their name suggests). Arbitrum handles and executes transactions "off-chain", whilst using layer 1 (L1; Ethereum mainnet) as its "settlement layer", with data on completed transactions is posted to L1\. This link means L2s retain the security of Ethereum mainnet whilst dramatically increasing maximum transaction throughput (i.e. capacity). 

L2 solutions such as Arbitrum are often referred to as "**rollups**". The name originates from the fact that **they _roll up_ bundles of transactions**, sending them for processing on L1\. Combining multiple transactions into one bundle and submitting as a single transaction enables the network to complete significantly more transactions per second (tps) when compared with submitting one-by-one on mainnet.

Similarly to how proof of stake (PoS) blockchains use validators (or similarly named entities) to secure the network, Arbitrum relies on operators to propose valid blocks to the network, which can then be confirmed or challenged by other nodes (operators). 

Arbitrum is an **optimistic rollup**. Its name refers to the fact that it assumes all transactions are valid, instead using a dispute resolution process whereby any operator can challenge a submitted block if they think it is inaccurate. Eliminating the intensive computation necessary to confirm every transaction means optimistic rollups can process transactions at a higher rate: Arbitrum claims to be capable of 40,000tps. If you want to learn more about optimistic rollups, this [Finematics video](https://youtu.be/7pWxCklcNsU?t=266) is a great explainer. 

Since Arbitrum is still in beta, there are a few [administrative controls](https://developer.offchainlabs.com/docs/mainnet#:~:text=Why%20Mainnet%20%22Beta,other%20L2%20systems.) in place, which you should be aware of before using the network. 

## **Using Arbitrum**

**How do I use MetaMask with Arbitrum?**

Since Arbitrum is EVM-compatible, you can use your existing MetaMask wallet on its network, should you choose to. Simply make sure you have [added the Arbitrum network to your wallet](https://support.metamask.io/hc/en-us/articles/360043227612), and switch over to it to view any ETH which you have transferred via the bridge.

**Is ETH on Arbitrum the same as ETH on Ethereum?**

No — although Arbitrum uses ETH as its native token to pay for transactions, you need to bridge all tokens—ETH included—to and from Arbitrum. Any existing ETH you hold in MetaMask on Ethereum mainnet will not be usable on Arbitrum. 

**Bridging ETH to Arbitrum**

Bridging involves transferring a token from one network to another. You can exchange ETH on Ethereum mainnet for the exact quantity on Arbitrum, plus transaction fees. 

The official Arbitrum bridge is available at [bridge.arbitrum.io](https://bridge.arbitrum.io/), and there are [alternatives](https://portal.arbitrum.one/#bridgesandonramps) accessible from the Arbitrum portal.

**Other methods of getting ETH onto Arbitrum**

* **Buy directly (on-ramp)**. These services involve buying ETH as you would do for Ethereum, only that the ETH you buy is already on the Arbitrum network, avoiding transaction fees for bridging. You can find them in the 'Bridges & on-ramps' section of the [Arbitrum portal](https://portal.arbitrum.one/). Transak, for example, is amongst them.
* **Buying from an exchange which supports Arbitrum and withdrawing directly to the network**. At the time of writing, major exchanges such as Binance and Crypto.com are listed on the Arbitrum portal. These options enable you to withdraw directly from the exchange wallet into the wallet you want to use on Arbitrum, such as MetaMask, saving the costs of having to withdraw to Ethereum and then pay to bridge to Arbitrum.

**How much do transactions cost on Arbitrum?**

Transaction costs are always a reflection of network congestion, although on Arbitrum will typically be a few USD, paid in ETH.

For a live overview of transaction costs on Arbitrum, check [l2fees.info](https://l2fees.info/). 

## 

## **Useful resources**

[Arbitrum L2BEAT overview](https://l2beat.com/)

[Optimistic Rollups: the present and future of Ethereum scaling](https://medium.com/offchainlabs/optimistic-rollups-the-present-and-future-of-ethereum-scaling-60fb9067ae87) (Offchain Labs) 

[An Incomplete Guide to Rollups](https://vitalik.ca/general/2021/01/05/rollup.html) (Vitalik Buterin, Ethereum co-founder)

[Layer 2 Scaling Solutions](https://pages.consensys.net/webinar-layer-2-scaling-solutions) (ConsenSys webinar; signup required)

## 

## **Relevant support articles**

[User Guide: Custom networks and sidechains](https://support.metamask.io/hc/en-us/articles/4404424659995-User-Guide-Custom-networks-and-sidechains) #Bitcoin (BTC) on EVM-compatible networks#
## First things first:

The short answer is that Bitcoin and Ethereum (and, by extension, EVM-compatible networks) are not interoperable. You cannot seamlessly bridge your Bitcoin onto Ethereum. If you want to learn why, keep reading.

## Not all blockchains are created compatible.

The Bitcoin network was, in many ways, the 'proof of concept' for public blockchain technology: it showed that, given proper incentive mechanisms and safety measures, a currency could be maintained on a global scale, in a decentralized, trustless—that is, with no central trusted authority—manner.

The Ethereum network is the next step (arguably, an exponential step) along that path. The Ethereum blockchain isn't just keeping track of a currency. It maintains, live at all times, a global public computer that is capable of maintaining a global, decentralized currency (and many of them, at that). And on top of that, a global, decentralized monetary and financial system.

## Different blockchains have different 'native currencies'

This is a topic both deep and broad, but in short: virtually all public blockchains have what is called a 'native currency', the token that is used to pay for gas, transactions, or computational work on the network. Bitcoin's native currency is bitcoin (BTC), and Ethereum's native currency is Ether (ETH). 

## You can't just send BTC to an Ethereum address, or vice versa

![sendtokens.jpg](https://support.metamask.io/hc/article_attachments/4408073472795/sendtokens.jpg)

### **If you attempt to do this, your tokens will probably be sent into nothingness and you will not get them back.**

Given that different blockchains are programmed differently, with different standards for tokens, functionality, and even wallets and addresses, you can't just send BTC to an Ethereum wallet or the other way around. 

That said, there are many blockchains that are _EVM-compatible_, meaning they are technically compatible with Ethereum mainnet, and tokens might be transferrable between them. **Still, this does not mean that you can just send a token from one EVM-compatible chain to another. If you are going to transfer tokens between EVM-compatible chains,[ use a bridge.](https://support.metamask.io/hc/en-us/articles/4836913606683)**

And remember — MetaMask is made to be your wallet no matter the EVM-compatible chain you're on. For instructions on adding a new network, [see here](https://support.metamask.io/hc/en-us/articles/360043227612).

## If you want to trade with BTC on an EVM-compatible chain, there are options

If what you're looking to do is to hold BTC, you can do that on an EVM-compatible chain, through the use of what is called a _wrapped token_ (deeper explanation [here)](https://support.metamask.io/hc/en-us/articles/4405497827355). Essentially, this is BTC's value represented on an EVM chain, bundled within an EVM-compliant token wrapper (usually an ERC-20 token).

## Keep an eye out for new developments

The crypto space—and MetaMask itself—evolves very quickly. Although the blockchains and tokens themselves are fundamentally incompatible, it's possible that in the future users will be able to manage their assets across chains, including the Bitcoin Network, right from MetaMask. #How to cancel a pending swap#
#### Extension only

As the Smart Transactions feature is only available on Extension, you will not be able to cancel using the below method on MetaMask Mobile.

When you submit a swap, you'll be taken to a screen with a status bar, which indicates the progress of your transaction. 

If you have enabled Smart Transactions, you can cancel any time before the transaction is confirmed by the network. You can enable Smart Transactions early in the swap process under 'Advanced Options':

![MetaMask smart transaction option](https://support.metamask.io/hc/article_attachments/10023454502811)

When you have this setting on, you'll see the option to cancel your swap whilst it's yet to be confirmed:

![MetaMask cancel swap](https://support.metamask.io/hc/article_attachments/10023492499995)

Please note that you will not be able to cancel for free in all circumstances — this option is only available for a short window after you request the swap, whilst the Smart Transaction feature is at work and until the transaction is broadcast to the network. Although we’ll do our best to cancel for free when you request, we cannot guarantee it will be successful.

The cancellation button is dynamic, and once the free cancellation period is over, the text will automatically update to reflect the cost of cancelling the transaction at that time. So even if you miss this window, you can still cancel the transaction for a small gas fee.

#### Note: The cancellation fee is not charged by MetaMask

The fee shown on this screen to cancel your transaction is not a cost that MetaMask imposes on you. Rather, it's just the cost of gas to submit the cancellation transaction (similar to the cancellation process we outline [here](https://support.metamask.io/hc/en-us/articles/360015489251)). The only fee MetaMask charges for the Swaps service is the 0.875% transaction fee that we list before you submit the swap.#MetaMask is unable to connect to the blockchain host#
If you see the following pop-up in MetaMask:

**![Screen_Shot_2021-04-26_at_8.23.02_AM.png](https://support.metamask.io/hc/article_attachments/360093501511/Screen_Shot_2021-04-26_at_8.23.02_AM.png)** 

This means that you currently don't have access to blockchain data. MetaMask connects to services (the "blockchain host") that provide read and write access to your blockchains of choice.

For the convenience of MetaMask users, [Infura](https://infura.io/) is configured as the default blockchain host. Any loss of connection would likely be temporary due to a technical issue.

But like many features in MetaMask, which blockchain host the wallet connects to is customizable, meaning you can change it to connect to any other blockchain node, whether offered by a service or one that you run yourself. While the Infura service is industry-leading for many important reasons (reliable up-time, ease of use), users may choose to have a backup service on standby should there be any service disruptions.#How do I change my account name? #
Extension Mobile 

You can alter the account name by selecting the three-dot menu on the top right. Clicking on it will bring down the Accounts menu, where you can select the pencil icon and edit the name. Once you are done editing, select the checkmark to save it.

![How do I Change My Account Name](https://support.metamask.io/hc/article_attachments/9186153019675/How_do_I_Change_My_Account_Name.gif)

Tap and hold on the account name; this should bring up the text field to edit.

![How do I Change My Account Name Mobile](https://support.metamask.io/hc/article_attachments/9186213838747/How_do_I_Change_My_Account_Name_Mobile.gif)#How to buy crypto in MetaMask#
#### The experience of buying crypto in MetaMask varies depending on whether you're on MetaMask Mobile or Extension. Select the correct tab below to view all relevant information for each:

_The availability of providers for buying crypto varies between countries/regions. If you're unable to buy crypto in MetaMask, see [here](https://support.metamask.io/hc/en-us/articles/4863623238683) for some alternative options._ 

#### Buy crypto in the MetaMask Portfolio Dapp

You can now access our buying experience in the Portfolio Dapp — click [here](https://portfolio.metamask.io/buy) to check it out. The process works exactly the same as the 'Mobile' tab below, so head there for an overview, or to see our FAQs. 

Mobile + Portfolio Dapp Extension 

In this section:

* [How does it work?](#h%5F01G1R6YS963SFK81VXHM6SRZFJ)
* [How do I use it?](#h%5F01G1R6YZ5FZ87RD2NVHGWNM0NM)
* [FAQs](#h%5F01G1R6Z5C9XTKJM8VTG3DT7G3A)

## How does it work? 

The process for buying crypto on MetaMask Mobile and in the Portfolio Dapp uses an aggregator of on-ramp providers, making the process accessible, fast, and scalable.

When you enter how much of a token you want to buy, MetaMask's integrations with our vetted providers will spring into life, and fetch you quotes from each. These quotes automatically refresh every 10 seconds to account for gas price fluctuations, minimizing the potential for failed transactions (if gas prices rise after submitting the transaction, your quoted total may be too low to cover transaction costs by the time the transaction is picked up by the network). 

Since you input your region and currency during the process, the quotes you're presented with are automatically configured for your circumstances: so no need to worry about whether you'll be able to use the available payment methods in your region, or whether your region is supported by that provider. If it appears on the quote list, you will be able to buy as quoted. Easy. 

## How do I use it?

1. On the mobile app, head to your wallet homepage and find the blue **'Buy' button**, located between the 'Receive' and 'Send' buttons in the center of the screen. On the Portfolio Dapp, head to the 'Buy' tab.  
![MetaMask_Mobile_buy_crypto_1.png](https://support.metamask.io/hc/article_attachments/13153328868123)
2. If you're a first-time user, you must select your region, which will generally default to your current location. If you've used this feature before, MetaMask skips this step and uses the region you selected last time, which is saved in local storage.  
From the drop-down menu, search or scroll until you find the **country where your payment method (card/bank account) is registered.** US users will then be able to select their state. If your region is not currently covered by at least one of our provider and payment method combinations, we'll let you know at this point. You can read more about other ways to purchase crypto [here](https://support.metamask.io/hc/en-us/articles/4863623238683).  
![MetaMask_Mobile_buy_crypto_2.gif](https://support.metamask.io/hc/article_attachments/13153486316827)
3. On the next screen, **select your payment method** (you can always adjust this afterwards if you change your mind):  
![MetaMask_Mobile_buy_crypto_3.png](https://support.metamask.io/hc/article_attachments/13153397677083)  
Choose from Apple Pay/Google Pay (this will adjust according to your device), debit/credit card, PayPal (US only, excluding Hawaii), and bank transfers (with the mechanism adjusted according to your region, KYC details, and currency: e.g. UK Faster Payments, ACH for the US, Pix for Brazil, and SEPA for Europe). Make sure you're comfortable with the estimated duration and payment limits detailed next to each option.
4. Select the token you want to buy, using the _You want to buy_ menu at the top of the screen.
5. **Input your preferred amount**, i.e. the value (in fiat) of the token you want to buy.  
![MetaMask Mobile buy crypto](https://support.metamask.io/hc/article_attachments/13153400850971)
6. **Choose your quote**. After a brief wait, you'll see the quotes available based on your preferences. They're arranged in descending order based on how much crypto you receive, with the best-value option at the top. Pull down from the top of the screen to force refresh the quotes.  
![MetaMask_Mobile_buy_crypto_5.png](https://support.metamask.io/hc/article_attachments/13153403446555)  
When you pick a provider, you may have to complete KYC if you've never used their service before.

## FAQs

**What networks are supported?**

* Ethereum mainnet
* Binance/BNB Smart Chain
* Polygon
* Avalanche (C-Chain)
* Fantom
* Optimism
* Arbitrum
* Celo
* Harmony

**What providers are available?**

* Transak
* MoonPay
* Sardine
* PayPal (US only)
* Banxa
* Onramp.money
* Mercuryo.

We're always working to integrate new providers, subject to rigorous security and reliability checks.

**What payment methods are available?**

Payment methods are determined by your selected region, and there are far too many permutations for us to exhaustively list here. You can see what's available—without making any commitment to spend—once you've selected your region.

**What regions/countries are covered?**

We aim to provide users in as many countries as possible with _at least one_ option to buy crypto. 

At present, users in 170+ countries will be able to buy crypto through at least one provider.

**I entered $\_\_. Why did I only receive $\_\_?**

The fiat value you input into MetaMask will always be more than the value of crypto you end up receiving.

This is because you have to pay a few different fees for each transaction. In addition to the fee that MetaMask charges, you also need to pay the provider's fee and the gas fees for the transactions required to get the purchased crypto into your wallet.

You can see the provider's fee listed as 'processing fee' on the quote. This number includes the fee that MetaMask charges for the service. Gas costs are listed on the quote as the 'network fee'.

**Does MetaMask make money from this?**

MetaMask charges a 1% fee on every transaction, calculated as a percentage of the fiat value you request.

So if you input $100, we will calculate our share of the fees as $1.

The 1% fee is consistent across all regions, payment methods, providers, and tokens.

**Who am I actually buying from when I use this feature?**

MetaMask does not fulfil the transactions you order: it is the provider (e.g. MoonPay, Transak, etc.) that receives your request and executes the necessary steps.

MetaMask is an intermediary in this process. All that MetaMask is doing is compiling quotes, enabling you to select one, and then allowing you to order your chosen amount of crypto through the provider.

**How long before I receive my crypto?**

In order to get your ordered crypto into your MetaMask wallet, the provider you choose must execute transactions on-chain. This means that, as a minimum, you will need to wait for as long as it takes for the transactions to be processed by the network (block time).

Once you submit your request, you can see the pending transaction in your MetaMask activity.

**What do I do if my transaction fails?**

Since MetaMask does not execute your transaction, it’s likely that the provider will be better placed to support than our team. In these situations, we recommend you contact their support teams first.

For any issues you encounter with MetaMask itself (such as problems selecting your region or currency, or with the buying process), [get in touch with MetaMask Support](https://support.metamask.io/hc/en-us/articles/360058969391) via the 'Start a Conversation' button on the Support page.

If you're facing problems using a provider's platform, such as payment limits, payment methods, or KYC, we recommend you get in touch with their support teams directly.

**How do I manage/delete the accounts I have created with each provider?**

When you buy crypto in MetaMask, you're not buying crypto _with_ or _from_ MetaMask: you're buying with the provider you choose.

If you want to manage any personal information that the providers hold, you must access the provider's platform directly, log into your account, and make the changes there. MetaMask does not collect or hold your login details for on-ramp providers at any point during or after the buying process.

**Contents**:

* [How to buy tokens in MetaMask](#h%5F01G1JP6C4WPTXDVE9WG05QMEVY)
* [Available providers, payment methods and supported regions](#h%5F01FW1QWDH429T1YRFC1JYB8P7F)
* [What is KYC?](#h%5F01G1JP6PSS0EPPBFXJ242YQDSY)
* [Alternative ways to get crypto into your MetaMask wallet](#h%5F01G1JP6VYP37BXKP88VFC95V92)

You can get crypto directly into your MetaMask wallet without even leaving the app, through what are often known as 'on-ramps'. Our supported networks include:

* Ethereum mainnet
* Avalanche
* Polygon
* BNB Chain
* Fantom
* Celo
* Optimism
* Arbitrum.

_Please note that not all providers support all the above networks. See the [platform-specific information](#h%5F01FW1QWDH429T1YRFC1JYB8P7F) below for more clarity._ 

In each case, you can buy the network's **native token** and, in some cases, **stablecoins and/or other tokens**. For example, you can buy MATIC directly on Polygon, or BNB for BNB Chain. Stablecoins that will be available include, for example, Dai, USDC, and USDT (on Ethereum and Polygon) and BUSD on BNB Chain.

#### 'On-ramps' and 'off-ramps'?!

'Ramps' are the North American terms for roads which connect regular traffic to ('on-ramp') and from ('off-ramp') freeways. This analogy has been adopted across web3 to describe the process of converting fiat currency (e.g. dollars, pounds, euros, etc.) into crypto, and vice versa.

Since MetaMask's users are spread across the world, we're transitioning to more neutral language to improve clarity — so you'll see us using this term less and less.

## **How do I buy tokens?** 

Firstly, make sure your wallet is currently connected to the network you want to buy for.

1. On the main screen of the Extension, click the 'Buy' button.
2. You'll now see a screen where you can select which provider you'd like to use. See [below](#h%5F01FW1QWDH429T1YRFC1JYB8P7F) for an overview of how your region affects availability, and the kinds of payment options each provider supports.
3. When you've selected a provider, you'll be redirected to their platform. Enter the amount of fiat currency you'd like to spend to generate an estimate of how much crypto you'll receive and the fees you'll have to pay.
4. It's at this stage that you can change the type of token you're buying. Make sure you've selected the one you want.
5. Follow the prompts to complete the transaction.

#### Alternative method: go direct to the token

You can also head to a specific token in your 'Assets' tab, and click the 'Buy' button that appears there. If the token is available to purchase through one of our supported providers, the button will be available to click, and you'll be shown which providers you can choose from. From there, the rest of the buying process is the same!

Since the token deposit into your wallet is a regular blockchain transaction, you'll need to wait for the transaction to be processed by the network. Although this isn't long, it may not be instant, so don't worry!

If your transaction is complete and you don't see the tokens in your wallet, make sure you have added the token in MetaMask. See our [article](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask) for further guidance on this.

## **What providers and payment methods are available?**

Each of our providers enabling you to buy crypto has undergone a comprehensive technical integration to make sure their solutions work seamlessly and securely with MetaMask. Available vendors include:

**Transak**

**Supported locations**: Transak supports 100+ countries.

**Payment options**: You can buy using credit/debit card or bank transfer (depending on location). Also supports region-specific payment methods such as SEPA transfers (Europe), MobiKwik (India) and the UK Faster Payments bank transfer system. Apple Pay/Google Pay/Samsung Pay are also supported.

**Supported networks**: All supported networks: Ethereum, Avalanche, Polygon, BNB Chain, Celo, Arbitrum, Optimism and Fantom.

**MoonPay**

**Supported locations**: Available in 140+ countries globally. MoonPay does not currently maintain a list of supported countries. If your region is supported, you will be able to select MoonPay in MetaMask.

**Payment options**: Supports debit/credit card and bank transfers, Pix for those with Brazilian bank accounts; Apple Pay and Google Pay also available on Mobile (Samsung Pay is unsupported).

**Supported networks**: Ethereum, Binance Chain, Polygon, Avalanche, and Celo.

**Coinbase Pay**

Coinbase Pay, supported from Extension v10.16.2, offers a novel method for buying crypto directly within MetaMask, and is slightly different from our other providers.

**If you're an existing Coinbase user**, you can use Coinbase Pay to directly buy tokens in MetaMask. You'll be able to access your Coinbase account and saved payment details and buy crypto as you normally would on the Coinbase Exchange. It will then be deposited directly into your MetaMask wallet, removing the need to transfer it separately.

You can also transfer any funds that are already in your Coinbase wallet (the wallets into which your purchased crypto goes on the exchange; [not to be confused with Coinbase Wallet](https://help.coinbase.com/en/wallet/getting-started/what-s-the-difference-between-coinbase-com-and-wallet)). 

**Supported locations**: For both transfers and direct purchases, Coinbase Pay is available in **all countries except Japan, Singapore, and Canada**. Please see Coinbase's [register](https://www.coinbase.com/places) of supported regions for more information.

**Payment options**: US users only: ACH transfers and credit/debit cards. For users elsewhere, we recommend you purchase on Coinbase and use the transfer method. We hope to be able to add support for debit cards in most other countries very soon. 

**Supported networks and tokens**: Ethereum and Avalanche (for both transfers and purchases).

For further information on the policies, fees, and availability of each provider, we recommend you review their support pages:

* [Transak](https://support.transak.com/hc/en-us)
* [MoonPay](https://support.moonpay.com/hc/en-gb)
* [Coinbase](https://help.coinbase.com/en/contact-us)

## **What is KYC?**

KYC stands for "Know Your Customer", and refers to a process where platforms gather proof of the user's identity. Generally, KYC is mandatory in certain regions and for certain services in order for providers to achieve regulatory compliance. By obtaining these details, the platform is essentially doing its due diligence to ensure you're not involved in criminal activity, such as money laundering or fraud. 

Depending on your location and the payment method you choose, you may need to submit the following (or other forms of proof) to complete your transaction:

* ID (e.g. passport or valid ID card)
* Proof of address
* A selfie or video of yourself.

Specific guidance on KYC requirements is clearly detailed by our providers at the point of purchase. 

## **What other methods can I use to get tokens?** 

Alternatively, if someone wants to send you tokens, or you have some in another account or wallet you want to send to your current wallet, check out how you can direct deposit: [How to deposit (receive) tokens to your MetaMask Wallet](https://support.metamask.io/hc/en-us/articles/360028141672-How-to-deposit-receive-tokens-to-your-MetaMask-Wallet?source=search&auth%5Ftoken=eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoyMzEzMDkzLCJ1c2VyX2lkIjo0MTAzMjU5MzkwMTIsInRpY2tldF9pZCI6ODIxNTYsImNoYW5uZWxfaWQiOjYzLCJ0eXBlIjoiU0VBUkNIIiwiZXhwIjoxNjE0OTgyNzQ1fQ.tWPYbRq59CC8-pfSxiUz6WINRTyfnVxVe8CfCXoNC5o). 

For an alternative way to buy tokens, you can always check the cryptocurrency exchanges that operate in your country **[here](https://ethereum.org/en/get-eth/#country-picker)**.  #How to hide an asset (token or NFT) in Portfolio#
#### Looking for how to remove tokens in MetaMask?

This article is specifically about managing displayed assets in the Portfolio Dapp, available at [portfolio.metamask.io](https://portfolio.metamask.io/). For information on displaying tokens in MetaMask, see [here](https://support.metamask.io/hc/en-us/articles/360015489031). For specific details on removing tokens from MetaMask, see [here](https://support.metamask.io/hc/en-us/articles/360058451852). 

The Portfolio Dapp automatically identifies the assets in your account(s) and displays them in your assets list. You can remove a token or NFT from your assets list if you no longer want it included.

#### Note

**Hiding tokens or NFTs does not affect ownership**; the actual balance in your account, as recorded on the blockchain, remains unchanged. Following these instructions simply hides them from view in the dapp.

Tokens NFTs 

1. On your assets list, locate the token you want to hide.
2. When you mouseover the token, you'll see three vertical dots appear on the far right. This is the **Token actions** menu; click it to continue.
3. Select the option to **Hide**.
4. Confirm your choice in the menu that appears, and the token will no longer be visible amongst your assets.

![MetaMask Portfolio Dapp Hide Token](https://support.metamask.io/hc/article_attachments/12507186389915)

1. Toggle the NFTs view of your asset list by flicking the switch on the right-hand side.
2. Locate the NFT you want to hide. When you mouseover, you'll see an ellipsis labelled 'More options'.
3. Click 'More options', and then 'Hide':  
![MetaMask Portfolio Dapp Hide NFT](https://support.metamask.io/hc/article_attachments/12507212359579)
Now you'll be able to select additional NFTs to hide simply by clicking on them, or, if it's just the one you want rid of, click 'Hide 1' in the bar that appears at the bottom of the screen.

## Unhiding tokens and NFTs

Hiding assets of both kinds is completely reversible.

To unhide tokens, go to Settings > Hidden tokens and click the plus button next to the asset.

To unhide NFTs, go to the NFTs page of your portfolio by flicking the toggle on the right-hand side of the homepage. Your NFTs will be categorized into two tabs: 'Owned' and 'Hidden'. Head to 'Hidden' and click the ellipsis on any NFT to call up the option to unhide it.#Network profile: Optimism#
Network name

Optimism

Token

ETH

RPC

[mainnet.optimism.io](https://mainnet.optimism.io)

Chain ID

10

Block explorer

[Optimistic Ethereum Explorer](https://optimistic.etherscan.io/)

Website

<https://www.mainnet.optimism.io/>

Also known as Optimistic Ethereum, Optimism is a **layer 2 (L2) rollup** helping to scale Ethereum. Let's unpack how it works.

L2s are a type of blockchain closely linked to a corresponding layer 1 (L1), which, in this case, is Ethereum. Transactions are handled on the L2 itself, the _execution layer_, whilst data about these transactions is 'rolled up' into a condensed form and posted on L1, demanding significantly less computation than if all of the transactions were to be conducted entirely on L1\. Their structure allows users access to high-capacity, fast and low-cost alternative to Ethereum mainnet whilst retaining the same fundamental mechanisms and features. Critically, L2s also inherit Ethereum's security and reliability. Optimism's execution layer is called the **OVM**, or Optimism Virtual Machine.

Optimism uses a system similar to Proof-of-Stake, in which entities running nodes help secure the network. In this case, they are called **verifiers.** Additionally, Optimism requires a **sequencer**, responsible for collecting transactions from the L2, rolling them up, and posting them to L1 (Ethereum). Optimism itself currently runs the sole sequencer on the network. 

As its name not-so-subtly hints, Optimism belongs to the **optimistic rollup** category. Similarly to Arbitrum, one of the other major L2 platforms, Optimism's protocols assume that all transactions are valid. This approach means that the network does not have to compute every transaction, significantly reducing congestion; instead, computation is only performed when the validity of the block is challenged.

This occurs in a process referred to as a **fraud proof**, which is where verifiers come in: when the state information or 'commitment' (i.e. the bundle of rolled-up transactions) is posted to Ethereum, a one-week 'challenge window' begins. Verifiers check state information and are responsible for initiating a fraud proof to resolve the issue. If proven right, verifiers are rewarded and the proposed commitment is replaced with a new one. This '[How Optimism Works](https://community.optimism.io/docs/protocol/2-rollup-protocol/)' page is a good explainer if you want to find out more. 

#### Gas controls on Optimism

When using Optimism in MetaMask, you won't be able to manually adjust the amount of gas you pay using [advanced gas controls](https://support.metamask.io/hc/en-us/articles/360022895972), as you would on other networks. The feature is disabled instead. This is because it's not possible for users to specify gas limits when Optimism submits the transaction to Ethereum. You can read more [here](https://community.optimism.io/docs/developers/build/transaction-fees/#the-l1-data-fee).

## **Using Optimism**

**How do I add Optimism to MetaMask?**

Adding a network is a straightforward process.

Optimism is already configured as a popular network in MetaMask, so adding it is straightforward. Click 'Add network' and head to the 'Add popular networks' area (instructions [here](https://support.metamask.io/hc/en-us/articles/360043227612)). From here, adding it to MetaMask should only take a few clicks or taps.

However, you can also manually input the network information above. For guidance, see [here](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC). 

**Switching networks to Optimism in MetaMask**

When you add Optimism as a new network, you will automatically switch to it.

However, if you need to switch back, follow the guidance below:

Extension Mobile 

Find where your current selected network is displayed at the top of your wallet page:

![how_to_change_network_-_extension.png](https://support.metamask.io/hc/article_attachments/4427180109467/how_to_change_network_-_extension.png)

Click it to bring up a list of previously connected networks that you can choose from. Find Optimism in the list and click it.

Locate the current network at the top of the screen:

![how_to_change_networks_-_mobile.jpeg](https://support.metamask.io/hc/article_attachments/4427195268251/how_to_change_networks_-_mobile.jpeg)

Tap it to view your previously connected networks, and then tap again on Optimism to switch to it.

**What token do I need?**

Optimism uses Ether (ETH) as its native token, which means you'll need it to pay for transactions.

**How do I bridge tokens onto Optimism?**

Optimism has an official bridge, called the Optimistic Ethereum Gateway, which can be accessed [here](https://gateway.optimism.io/welcome). Optimism have put together step-by-step guide to using the Gateway, available [here](https://help.optimism.io/hc/en-us/articles/4411894687387-Deposits-into-Optimism).

You can also use a third-party bridge such as the [Hop Exchange](https://hop.exchange/), although you may not get a 1:1 exchange rate, or the [Teleporter app](https://portr.xyz/), though Optimism itself warns that this platform is custodial (you need to trust the people running it) so you use it at your own risk.

Another alternative is to use a direct on-ramp. These are platforms which allow you to purchase crypto with fiat currency (e.g. dollars, euros) and have the appropriate quantity of tokens deposited into your wallet.

Optimism has a list of supported on-ramps [here](https://help.optimism.io/hc/en-us/articles/4413642522139), and you can also buy ETH on Optimism directly in MetaMask Extension. Just make sure you have Optimism selected as your current network and hit the 'Buy' button. Read more [here](https://support.metamask.io/hc/en-us/articles/360058239311).

**Can I use my MetaMask address?**

Yes. When you add Optimism to MetaMask and use MetaMask on the network, you will be using your existing MetaMask public address.

**Can I send tokens directly to and from Optimism without bridging?**

No. Always use the bridging methods described above to get your tokens onto Optimism.

**What kinds of tokens can be used on Optimism?**

Optimism supports its native token, Ether (ETH), as well as ERC-20 tokens. **You can move any token from Ethereum to Optimism, provided it exists on both networks.**

However, an ERC-20 token on Ethereum is not interchangeable with an ERC-20 token on Optimism. **They must be bridged first**, and you must make sure that the token is supported on Optimism before trying to bridge it over.

This is because ERC-20 tokens are essentially created by smart contracts. If a token exists on Ethereum it will have a corresponding token (contract) address. This same logic applies to Optimism: so if there is no contract address for a token on Optimism, you cannot move that token to the network.

To get around this potential barrier, it's best to stick to using the Optimism Gateway bridge, which will only allow you to transfer the token if it is supported on Optimism.

Since Optimism is a L2 rather than a conventional EVM-compatible network (such as Binance Chain or Avalanche C-Chain), you cannot move tokens from these networks onto Optimism, even if they have an ERC-20-equivalent standard (such as BEP-20). You must go via Ethereum mainnet.

## **Useful resources**

[Optimism docs: How Optimism works](https://community.optimism.io/docs/how-optimism-works/#) (detailed but accessible overview of the purpose of Optimism and its key features).

[Optimism help center](https://help.optimism.io/hc/en-us)

[Optimism bridge](https://gateway.optimism.io/welcome)

[Optimism ecosystem](https://www.optimism.io/apps/all)

## **Relevant support articles**

[User Guide: Custom networks and sidechains ](https://support.metamask.io/hc/en-us/articles/4404424659995-User-Guide-Custom-networks-and-sidechains)#How to send tokens from BSC to Ethereum or other chains#
## Transferring assets from BSC to another chain is something that must be done right. If you do it wrong, you can **lose your assets forever.** 

If you're handling assets on the BNB Smart Chain (formerly BSC), you should familiarize yourself with the different token standards that may be at play:

* BEP-2 (essentially only for the Binance Chain)
* BEP-20 (for Binance Smart Chain and dapps on the BSC Network
* ERC-20 (the most common Ethereum, and EVM-compatible, fungible token standard).

For more on EVM-compatible tokens in general, [see here](https://support.metamask.io/hc/en-us/articles/4405497827355).

**In order to receive the most accurate and up-to-date information on these topics, we recommend you consult Binance's documentation directly.**

First, watch the video resources available here: **<https://www.binance.com/en/support/faq/85a1c394ac1d489fb0bfac0ef2fceafd>**

_Pay special attention to the different networks on which you can withdraw tokens from your Binance wallet._

### Second, we **strongly recommend** **reading this article before attempting transfers**: 

**<https://academy.binance.com/en/articles/how-to-recover-crypto-transferred-to-the-wrong-network-on-binance>**

**As indicated in that article, please keep in mind that due to the immutable nature of blockchains, if you send assets to the wrong blockchain, they can be lost forever.** 

## Have you tried using the bridge?

As with all cross-chain transfers, [we strongly recommend using a bridge to move assets](https://support.metamask.io/hc/en-us/articles/4836913606683).

Binance used to have an official bridge until November 2021\. Instead, they now recommend either transferring your tokens to the Binance Exchange and withdrawing from there to your chosen network, or using a third party bridge. See [here](https://www.binance.org/en/bridge) for more information. #EWT Energy Web Network Basics#
If you have an issue viewing EWT tokens in your MetaMask wallet, you need to add the Energy Web custom network to view them and interact with that blockchain.

Please refer to this article on how to add it:   
<https://energyweb.atlassian.net/wiki/spaces/EWF/pages/723681315/Connecting+via+Remote+RPC+and+Metamask>#Why are some tokens missing from MetaMask Swaps?#
MetaMask Swaps automatically offers many tokens available on underlying decentralized exchanges. When tokens have liquidity on those systems, they will automatically become available on MetaMask Swaps. There are some tokens that are not approved on MetaMask Swaps, or do not work with our swaps.

If you do not see your token, check back later, or you can [get in touch with Support](https://support.metamask.io/hc/en-us/articles/360058969391) and we can investigate further.#Where do I find my gas history?#
If you need to find your gas history, you can access it on [Etherscan.io;](https://etherscan.io/) there are two ways of accessing the information.

#### **Option 1:**

* Navigate to your wallet address, and locate the "TxnFees" section under the "Analytics" tab on your address page:

![Etherscan gas history](https://support.metamask.io/hc/article_attachments/12803960169243)​  

#### **Option 2:**

* Click on the 'Transactions' tab on your address page.
* Scroll down, and you will see a button in the lower right labelled "Download CSV Export".
* This will allow you to download your transaction history in .CSV format (accessible as a spreadsheet), so you can manually calculate the fees.

![Reconciling and keeping track of your accounts CSV](https://support.metamask.io/hc/article_attachments/12803992956315)#Direct deposit (receive) tokens to your MetaMask wallet#
To deposit ETH or ERC-20 tokens to your MetaMask wallet from an exchange or another wallet, you will simply need to submit a transaction pointed to the address of one of your accounts in MetaMask. **Please check the exchanges that operate in your country** **[here](https://ethereum.org/en/get-eth/#country-picker)**.

#### Coinbase Pay

In the MetaMask extension, you can also deposit tokens into your wallet directly from Coinbase, eliminating the need to transfer them manually. Scroll down or [click here](https://consensys.net/blog/metamask/metamask-integrates-with-coinbase-pay-for-a-new-way-to-buy-crypto/) for further information.

We're working on adding this feature to MetaMask Mobile as soon as we can.

Extension Mobile 

1. Open MetaMask, and hover over the account name at the top of the window. You'll see the option 'Copy to clipboard' appear. Click to copy your public address.

![How to copy your metamask account public address extension](https://support.metamask.io/hc/article_attachments/10023104500635)

1. Paste your address in the recipient field in the application where you are sending your ETH or other tokens from, or share it with someone who is sending them to you.
2. Select the amount you want to send, along with any other necessary steps to complete and submit the transaction.

1. On your account page, tap directly on your address to copy it your clipboard. An on-screen prompt will appear to confirm that you've done so.

![How to copy your metamask account public address Mobile](https://support.metamask.io/hc/article_attachments/10023105032091)

1. Paste the address into the recipient field on the application/platform you're sending tokens from, or share it with someone who is sending to you.
2. Select the amount you want to send, and follow other prompts necessary to complete the transaction.

**_Note:_** _Please consult with the organization of the application you are using for information on how to transfer your ETH/tokens. The user interfaces of different organizations/wallets will vary._

## **Other considerations:**

* **Make sure the token you're trying to send is compatible with the network you're attempting to send to**. For example, you could be attempting to send Polygon-native MATIC to your MetaMask, when you should be sending ERC-20 MATIC ([see here](https://support.metamask.io/hc/en-us/articles/4415758346267-Network-profile-Polygon-MATIC-#:~:text=The%20most%20important%20thing%20to%20bear%20in%20mind%20when%20using%20Polygon%20is%20the%20form%20taken%20by%20its%20native%20token%2C%20MATIC.) for more info). Most of the time, exchanges will recognize that your address is incompatible with the token you're attempting to send, and prevent you from proceeding — but still, be wary.
* If you are sending ERC-20 tokens, please review our article [How to display tokens in MetaMask](https://support.metamask.io/hc/en-us/articles/360015489031) to add them to the token list to see the balance of the token in your account.
* The process to send tokens may be different for each application that holds your tokens. We recommend that you review their documentation or contact their support team for additional help on transferring tokens from their application.
* Once the transaction is final, the balance in your account in MetaMask should update. If the balance does not update, please check the status of your transaction on a block explorer like [Etherscan](https://etherscan.io) by searching the txHash (transaction hash) of the transaction that you just submitted.
* Please see [How to send tokens from your MetaMask wallet](https://support.metamask.io/hc/en-us/articles/360015488931-How-to-send-tokens-from-your-MetaMask-Wallet) if you are looking to send tokens out of your MetaMask wallet.

## **Using Coinbase Pay to deposit tokens**

You can also use Coinbase Pay to seamlessly transfer token balances from Coinbase to MetaMask. 

To access this feature, click the 'Buy' button on your home screen and select Coinbase Pay. When inputting your preferred amount, you'll have the option to choose between buying the tokens or using your existing balance on Coinbase. #How to create an additional account in your wallet#
When you create your MetaMask wallet, you will be given a Secret Recovery Phrase, and an account is automatically generated. You’ll see that as your _Account 1_ (default account).

If you'd like to create and manage multiple MetaMask accounts, you could do so simply by creating more accounts. Each of these is then associated with the same Secret Recovery Phrase: think of your wallet (your Secret Recovery Phrase) as a container of one or more accounts.

If you want to re-add accounts after restoring your wallet using your Secret Recovery Phrase, take a look at [this article](https://support.metamask.io/hc/en-us/articles/360015489271).

Extension Mobile 

1. Click the favicon (the circular account image) at the top right of your wallet.
2. Click 'Create Account'.
3. Enter your preferred name and then hit 'Create' to confirm.

![How to create an additional account in your wallet](https://support.metamask.io/hc/article_attachments/9025142992155/How_to_create_an_additional_account_in_your_wallet.gif)

1. Either tap the account icon on your wallet home screen, or click on the hamburger icon in the top left and then tap the icon there:
2. On the account selector menu that appears, tap on 'Create New Account'.
3. When back on the home screen, long press on the name of the account to change it.

![How_to_create_an_additional_account_in_your_wallet_mobile.gif](https://support.metamask.io/hc/article_attachments/9025298550811/How_to_create_an_additional_account_in_your_wallet_mobile.gif)

**Please note once you add the account there is no way to delete.**

To better communicate the importance of never sharing your seed phrase, we've changed the name of the phrase to "Secret Recovery Phrase". Learn more [here](https://support.metamask.io/hc/en-us/articles/360060826432)#How to tell the difference between a regular airdrop and airdrop phishing scams#
## What is an airdrop?

Airdrops have become a mainstay of web3 since the explosion of ICOs (initial coin offerings) that began in 2017\. Airdrops involve receiving tokens in your wallet from a third party, usually in exchange for some other service or payment rendered. For example, a frequent user of a dapp or chain may receive a generous airdrop if that dapp decides to launch a token. 

Airdrops can also be used as a promotional tool: a new platform may look to generate interest in their project by depositing tokens in your wallet. Though their value is never guaranteed and often negligible or fragile, it is easy to understand why this tactic is popular. People are excited by free stuff. Free money? Even better. It's a reliable way of generating interest and engagement with a new project.

## Airdrop phishing scams

Unfortunately, **the lure of _free stuff_ can sometimes cloud judgement**. 

Let's be clear: no one can get access to your funds or any sensitive information simply by depositing tokens into your wallet. 

Where they can do damage is hoping that the wallet holder tries to sell or swap the token after seeing it listed in their balance (usually on a [block explorer](https://support.metamask.io/hc/en-us/articles/360057536611). MetaMask does not automatically display all tokens, but only established ones, and only if you have [token detection turned on](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask#h%5F01FWH48EA3JNK6V5JXCR6XVWZD:~:text=Advanced%20automatic%20token%20detection)). 

Usually, scams involving airdrops rely on these two core mechanisms:

* As the recipient of a mysterious airdrop, you may see on the block explorer or token listing site that the token has some value. The immediate temptation is to try and realise this value by swapping it to a more mainstream token with more stable value, or just by selling it.
* When you view the token on the block explorer or add it to an exchange of some kind, you'll see an **error message directing you to fraudulent dapp or website** via the block explorer. Sometimes this appears on the transaction's page on the block explorer as an explanation for why the transaction failed.

**The fraudulent site is where the phishing takes place. To swap or redeem or sell, the scammers claim, you'll need to approve a transaction, approve [access to a token](https://support.metamask.io/hc/en-us/articles/6174898326683), or even hand over your [Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360060826432) (something you should never, ever give to anyone).** 

## How to tell the difference: a checklist

#### Auto-detecting tokens in MetaMask

As explained eloquently in [this article](https://medium.com/metamask/phisher-watch-airdrop-scams-82eea95d9b2a) by MetaMask co-founder Dan Finlay (which is worth reading in general), MetaMask's token detection only displays tokens on approved, curated lists. This means that new and obscure scam tokens airdropped to your address are unlikely to be detected. 

Here's some things to look out for when deciding whether or not to trust a token:

* **Does the token appear in MetaMask when you have [token detection](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask#h%5F01FWH48EA3JNK6V5JXCR6XVWZD:~:text=Advanced%20automatic%20token%20detection) turned on?** If it doesn't, it means the token is absent from the trusted tokens lists that the token detection feature uses. It may therefore be untrustworthy.
* **Is the token flagged on the block explorer?** Locate the token on Etherscan or the appropriate block explorer for the network (e.g. BSCScan, Snowtrace, PolygonScan, etc.) and look at its details. Known scam tokens will already be flagged on these pages. To find the token, simply input its name into the block explorer search bar.
* **Does the project seem trustworthy?** Trustworthiness is subjective and hard to pin down. However, you could try researching things such as the following and check whether it all adds up:  
   * Does the token have a website?  
   * Does it have an active community of real people?  
   * Are the creators named (doxxed) anywhere? Are they real? Do they have social media accounts consistent with this information, and do real people follow them?  
   * Is there a white paper that explains the project in detail?  
There are many more things we could list here. Use your best judgement, and if in doubt, don't take the risk.#How to watch a token in Portfolio#
You can watch tokens in your portfolio to keep track of their current price in your chosen currency, price changes, and market cap (price x supply). 

To add a token to your watchlist:

1. Head to the 'Watchlist' tab from the menu on the left-hand side of the page.  
![MetaMask Portfolio Dapp Watch Token](https://support.metamask.io/hc/article_attachments/12507416361627)
2. From here, search for the token you want using the search bar the top of the screen.
3. Once you've located it, click the star next to the token to add it to your watchlist.  
![MetaMask Portfolio Dapp Watch Token.png](https://support.metamask.io/hc/article_attachments/12507389632667)
4. Its price data will then be visible in your watchlist.  
![MetaMask Portfolio Dapp Watch Token.png](https://support.metamask.io/hc/article_attachments/12507389631643)#Network profile: Palm#
Network name

Palm

Token

PALM

RPC

https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b

Chain ID

11297108109

Block explorer

[explorer.palm.io](https://explorer.palm.io/)

Website

[palm.io](https://palm.io/)

Palm is an EVM-based sidechain developed **specifically for selling, buying, and trading NFTs** (non-fungible tokens). Built as a destination blockchain for NFT creators, artists, and collectors, the network seeks to present an alternative to Ethereum's congestion and high fees, whilst retaining interoperability and keeping these creators, creations, and buyers within the Ethereum ecosystem, rather than see them emigrating to other layer-1 blockchains with growing NFT communities.

To make the transition from Ethereum to Palm as seamless as possible, the Palm team ensured their network has **EVM-compatibility**. Not only does this mean developers can work on Palm in the same programming language (Solidity) as they do on Ethereum, making it relatively straightforward to migrate, but it also allows MetaMask to function as a gateway to the network. 

A **proof-of-authority (PoA) consensus mechanism** underpins the network. A variant of proof-of-stake (PoS), PoA assigns a limited number of validators responsibility for _validating_ blocks. Each validator must stake tokens in order to obtain the _authority_ to fulfil this role. If they perform their duties correctly, they receive rewards; but if they do not submit valid blocks, their stake is 'slashed' (taken from them).

This mechanism provides Palm with the ability to cheaply process high volumes of transactions, and reduces its environmental impact due to the superior energy efficiency of PoS (and variants) relative to [proof-of-work](https://support.metamask.io/hc/en-us/articles/360015489611#:~:text=Under%20PoW%20consensus,helps%20the%20network.) (PoW). Palm is [**99.9% more energy-efficient**](https://palm.io/#:~:text=99.9%25%20More,Proof%20of%20Stake.) than PoW networks. It is hoped that this will help attract artists and creators to the Ethereum NFT space who were previously reluctant due to environmental concerns.

In the long run, the Palm team intends to transition from a sidechain to a [layer-2 (L2)](https://consensys.net/blog/blockchain-explained/what-l222-means-for-the-ethereum-ecosystem/) network, since the Merge on Ethereum mainnet negated one of the key drivers behind Palm's current configuration. The team also says its roadmap includes the addition of a governance system, supported by its native token, PALM. 

To enhance its pull as a creator-driven NFT community, Palm takes an interesting approach to the availability of the PALM token. It is **only available via airdrop** when you interact with the network in various ways. For a full overview of how you can get PALM, see [here](https://palm.io/get-palm/). 

## **Using Palm**

**How do I add Palm to MetaMask?**

Palm is already configured as a popular network in MetaMask, so adding it is straightforward. Click 'Add network' and head to the 'Add popular networks' area (instructions [here](https://support.metamask.io/hc/en-us/articles/360043227612)). From here, adding it to MetaMask should only take a few clicks or taps.

Alternatively, you can head to [app.palm.io/configure](https://app.palm.io/configure) and follow the prompts, or add it manually using the instructions [here](https://support.metamask.io/hc/en-us/articles/360043227612) and the network details at the top of this article.

**What are PALM tokens for?**

As the native token of the network, you need PALM in order to pay for transactions. PALM is not used for buying/selling NFTs.

**How do I get PALM tokens?**

As detailed [here](https://palm.io/get-palm/), PALM is only available via airdrops which are awarded based on users' interactions with the network.

The airdrops provide users with enough tokens to use the network, and in quantities proportionate to how much value they bring: i.e. the more NFTs you buy and sell on Palm-supported marketplaces (see _Does Palm have an NFT marketplace?_), the more PALM you will accumulate.

Part of the network's roadmap involves establishing a governance system in future. This will allow PALM holders to have a say in how the network is run and developed -- and the more PALM you hold, the more weight your contributions will have.

**Does Palm have an NFT marketplace?**

No. Palm is a blockchain, not a marketplace (e.g. like OpenSea).

Instead, Palm supports marketplaces and NFT platforms that are built on its network. Examples include [Nifty's](https://niftys.com/), [Portion](https://portion.io/), and [Heni](https://www.heni.com/).

**How do I get tokens and NFTs on to Palm?**

Head to the Palm platform at [app.palm.io](https://app.palm.io/). At the top of the screen you'll see links to **Token Bridge** and **NFT Bridge**. Pick the option which corresponds to your intention.

Bridging tokens Bridging NFTs 

Currently, you can only bridge three tokens to Palm:
* WETH (wrapped ETH, commonly used on NFT platforms)
* DAI, a stablecoin
* PRT, an ERC-20 token distributed by and usable on the Portion platform. You can read more about it [here](https://medium.com/portion/announcing-the-portion-token-85efa049e7e0).

Bridging tokens over can be useful primarily for buying NFTs on Palm-supported marketplaces.

#### How do I transfer tokens from Palm to Ethereum?

By default, the Palm bridge will assume you are transferring from the network your MetaMask is currently connected to. So if you load the page whilst MetaMask is connected to Ethereum, it will assume you want to bridge to Palm. To change, click the switch icon where the networks are listed, change your network in MetaMask to Palm, and then reload the bridge page.

Once you've connected your wallet, the token platform will look like the below (minus the Ethereum congestion notice, depending on your timing):

![Palm_token_bridge.png](https://support.metamask.io/hc/article_attachments/4431272959131/Palm_token_bridge.png)

Simply select the token you want to transfer over and input the amount you want to move. The receiving address needs to be a wallet compatible with the Palm network -- currently, MetaMask is your only option.

Once you've clicked 'Start transfer' you'll be prompted to confirm it in MetaMask. Then, pending completion of the transaction, the tokens will be in your wallet. If they don't appear, make sure you've [added the token](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask) to your MetaMask.

The NFT bridge on Palm should look something like below:

![Palm_NFT_bridge.png](https://support.metamask.io/hc/article_attachments/4431371364635/Palm_NFT_bridge.png)

Input your NFT's details to start with, and you'll get a preview of the asset you want to move to help confirm that it's the correct one.

When you've checked the transaction fee (displayed at the bottom of the screen) and you're happy to proceed, hit 'Start transfer' to get going, and then confirm the transaction in MetaMask.

#### How do I transfer tokens from Palm to Ethereum?

By default, the Palm bridge will assume you are transferring from the network your MetaMask is currently connected to. So if you load the page whilst MetaMask is connected to Ethereum, it will assume you want to bridge to Palm. To change, click the switch icon where the networks are listed, change your network in MetaMask to Palm, and then reload the bridge page.

Also, remember that NFTs are currently only viewable in MetaMask Mobile, and not in Extension. See [our article](https://support.metamask.io/hc/en-us/articles/360058238591-NFT-tokens-in-your-MetaMask-wallet) for further information.

**Using the Palm on-ramp**

On-ramps are platforms which enable you to directly purchase tokens using fiat currency, such as dollars or euros, and have them immediately deposited into your wallet on a given network.

In Palm's case, you can buy DAI tokens on Wyre. [Click here](https://app.palm.io/onramp) to access the platform.

## 

## **Relevant support articles**

[User Guide: Custom networks and sidechains](https://support.metamask.io/hc/en-us/articles/4404424659995-User-Guide-Custom-networks-and-sidechains)

[NFT tokens in your MetaMask wallet](https://support.metamask.io/hc/en-us/articles/360058238591-NFT-tokens-in-your-MetaMask-wallet)

[How to add a custom network RPC](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)

[How do I send, receive, or cash out an NFT? ](https://support.metamask.io/hc/en-us/articles/360058961911-How-do-I-send-receive-or-cash-out-an-NFT-)

## **Useful resources**

[Palm FAQs](https://palm.io/faq/)

[Palm App](https://app.palm.io/) (where you can access the bridges and on-ramp)#I have sent funds from Binance Smart Chain to MetaMask but I don't see the tokens in my MetaMask wallet#
### Check out our [User Guide on sidechains and custom networks](https://support.metamask.io/hc/en-us/articles/4404424659995); it may answer a lot of questions and help you understand what's going on better.

To summarize the situation this article is covering:

* You've sent funds from BSC to MetaMask but the tokens are not in your MetaMask account.
* Binance has confirmed that the transaction was successful and that the withdrawal address is correct.
* You used the BSC network and sent funds as BEP-20 tokens.

Firstly, we need to confirm the transaction was successful. To do this:

1. Go to [BSCScan](https://bscscan.com/)
2. Enter your MetaMask [public address](https://support.metamask.io/hc/en-us/articles/360015488791)
3. Click on "BEP-20 tokens" as per below and check if you find the transaction.
4. Click on "token" and check if you find your "missing" tokens.

![BSCScan_transaction.png](https://support.metamask.io/hc/article_attachments/10058276032411)

If you found the transaction and the tokens: great news, it will be an easy fix! All you need to do is:

1. **Add the BSC network to MetaMask**  
   * See here for [Binance's guide](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain)  
   * [Add via Chainlist](https://support.metamask.io/hc/en-us/articles/360058992772)  
   * [Add custom network manually](https://support.metamask.io/hc/en-us/articles/360043227612)
2. **Add the token itself to MetaMask on the BSC network**  
   * [How to add unlisted tokens (custom tokens) in MetaMask](https://support.metamask.io/hc/en-us/articles/360015489031)

Please note that MetaMask is set by default to connect to the Ethereum Mainnet, not the Binance Smart Chain (BSC) Network.

If you want to move the tokens to Ethereum mainnet, you can use MetaMask Bridges at [portfolio.metamask.io/bridge](https://portfolio.metamask.io/bridge). (See our [guide](https://support.metamask.io/hc/en-us/articles/10055915089819) for more information.) 

You can find more details about BSC in our [Binance section](https://support.metamask.io/hc/sections/4499267442331) or by accessing [Binance support](https://www.binance.com/en/support). #Error: [number-to-bn] while converting number "0xNaN" to BN.js instance, error: invalid number value. Value must be an integer, hex string, BN or BigNumber instance. Note, decimals are not supported#
The following error message can occur when performing a transaction in MetaMask:

![Screenshot_20210103-114734_MetaMask.jpg](https://support.metamask.io/hc/article_attachments/360092526112/Screenshot_20210103-114734_MetaMask.jpg)

In this case, start by reinstalling MetaMask on your device.

**Before you uninstall, make sure you have your Secret Recovery Phrase and seed phrases (or private keys) imported accounts).** You do not need to have your MetaMask password, as you'll have to choose a new one as part of the restore process anyway.

For details on how to restore your account after reinstalling MetaMask, please refer to [this article](https://support.metamask.io/hc/en-us/articles/360015289612-How-to-restore-your-MetaMask-account-from-seed-phrase).#I did a swap, but received fewer tokens or less fiat value than I expected. Why? #
#### Check here first!

See the troubleshooting steps [here](https://support.metamask.io/hc/en-us/articles/360028059272). This advice applies to normal transactions _and_ Swaps transactions, so make sure you've taken a look at them before you attribute the issue to the possibilities listed below. 

Please note: this article is for MetaMask Swaps performed with the swap button within our app or extension. **For all other swap inquiries, please contact the third-party swap system you used, as they will have a better understanding of their system's intricacies, nuances, and issues.**

There are two main reasons why a swap might end up with less "value" in terms of dollar (fiat) amount.

1. **Price slippage:** Every swap has a preset price slippage limit. This limit prevents the swap from completing at an unfavorable price if the price changes after your order is submitted. Let's say the slippage is set to 5%, and you bought 100 tokens. The price could change, but you will not receive fewer than 95 tokens. If you want to change your slippage tolerance, head to Advanced Options whilst you're configuring the swap.

![MetaMask user guide_swaps slippage](https://support.metamask.io/hc/article_attachments/10023496271131)

1. **Price difference (or price impact):** Before approving a swap quote, check to see if there is a price difference warning. This warning generally appears if there is low liquidity for a given token, and/or if your order size is large. For more detail on how this phenomenon works, see our [blog post](https://consensys.net/blog/metamask/price-impact-the-first-gotcha-of-defi-markets/). It is important to review this warning to see the difference in the value of the token you currently hold and the value of the token you are swapping to. Our warning for this will look something like this:

![MetaMask price difference warning](https://support.metamask.io/hc/article_attachments/10023529748507)

MetaMask Swaps fetches multiple quotes from various DeFi protocols. When you execute a swap through MetaMask, you interact directly with the liquidity source that offered the best price for your requested trade. MetaMask does its best to optimize each transaction before the swap is submitted.

However, MetaMask cannot guarantee that every transaction will be successful because the market and network conditions can vary dramatically, especially when highly volatile assets are traded.#How does MetaMask generate your keys?#
In the world of cryptographic technologies, your accounts are only as safe as your secret keys are secret _and unguessable_. For that reason, it's healthy to ask: Where are my MetaMask keys coming from? Well, get ready for a technical answer:

For a browser-based piece of software like MetaMask, there is no source of randomness (or _entropy_) that is more secure than the browser's native [Crypto.getRandomValues](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) function, which seeds itself with your operating system's entropy source, making this the best source of random numbers that a browser-based application can provide without your help.

Someday MetaMask may add more advanced features, to allow you to help generate your own random numbers, for example by wiggling your mouse, flipping coins, babbling into the microphone, or something, but for now, we're providing the simplest solution possible.#Using the same MetaMask wallet on multiple devices#
#### Note

This article covers using a single MetaMask wallet in multiple locations. If you want to read about using multiple wallets, see [here](https://support.metamask.io/hc/en-us/articles/12174759849371).

One of the benefits of using MetaMask is that you can use your Secret Recovery Phrase to access your wallet on multiple computers or smartphones. You're not bound permanently to any single device.

**To access your wallet on a new device, use your Secret Recovery Phrase to [restore your wallet](https://support.metamask.io/hc/en-us/articles/360015289612).** 

Though your Secret Recovery Phrase will give you access from any device, you'll need to set up a password again, and re-add any networks or tokens that you need. This is because this data is saved locally in each instance of MetaMask.

If you have more than one address (account) associated with your Secret Recovery Phrase — i.e. you used the[ 'Create account' button](https://support.metamask.io/hc/en-us/articles/360015289452) at some point — they will be restored automatically if they have a non-zero balance of ETH. Otherwise, you can just add them back by hitting 'Create account' again until you have all the ones you need. Read more [here](https://support.metamask.io/hc/en-us/articles/360015489271).#Why am I being asked to sign in? (Sign In With Ethereum)#
MetaMask is compatible with Sign In With Ethereum (SIWE), a web3-native method of managing your digital identity.

### What does Sign In With Ethereum mean? 

Conventionally, online identity is proven through intermediaries—identity providers—or by providing your email. Identity providers such as Apple, Facebook, or Google hold sufficient personal information to be able to prove, theoretically, that it's _you_ who is interacting with a product or service online. This is why you often have the option to create accounts and log into websites using their identity services (single sign-on/SSO services).

This model relies on intermediaries holding your personal data and information — mainly your email and name. With SIWE, you can use your Ethereum address to sign into a compatible dapp instead, allowing greater privacy, with no requirement to hand over personal information simply to interact with the web. 

Rather than placing data in the _**custody**_ of intermediaries, the sign-in process is **self-custodial**. 

If you're interested in learning more about the technical details of SIWE, check out [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361), the Ethereum Improvement Proposal that describes it. This [explanation of its significance](https://blog.spruceid.com/sign-in-with-ethereum-is-a-game-changer-part-1/) from [Spruce](https://spruceid.com/), a team leading its development, is also very useful. 

### How does it look in MetaMask?

SIWE is a feature that developers can choose to make available to users of their dapps. Accordingly, you won't find it on every dapp you visit, but only on those where it's implemented. 

Signing in with SIWE looks similar in MetaMask to many other signature requests: 

![MetaMask sign in with Ethereum](https://support.metamask.io/hc/article_attachments/13951388331291)

What does this mean? Well, you're essentially just signing a transaction to demonstrate your identity. Nothing more, nothing less. Using your private key to sign a transaction proves that you're the account holder, and have the authority to use that account on the dapp. #Tips for using MetaMask and Ronin wallets successfully#
### As discussed in a ConsenSys blog post on [Axie Infinity](https://consensys.net/blog/metamask/to-infinity-and-beyond-the-growth-of-axie-infinity/), the Ronin **sidechain** has become very popular, and MetaMask wants our users to be able to interact safely and reliably with the Ronin chain.

#### Important warning - loss of funds possible

Axie Infinity runs on the sidechain Ronin, and not Ethereum mainnet. For more information, see [here](https://whitepaper.axieinfinity.com/technology/ronin-ethereum-sidechain).

Here are some tips for interacting with the Ronin network using MetaMask:

* If you use the Ronin wallet address for sending assets directly from MetaMask, simply changing the "ronin" prefix into "0x" or vice versa, **you will lose any assets you send.**
* The transfer of assets from MetaMask to the Ronin wallet and vice versa **must be made with the Bridge app** (<https://bridge.axieinfinity.com/>).
* If the assets were transferred directly from MetaMask and not using the Bridge app, **there is no way we can reverse the transaction**, as the nature of blockchains does not allow it.
* If the assets have been sent through the bridge but are not reflected in the Ronin wallet after a reasonable amount of time, **you should address this with Ronin's customer support, as this is not a MetaMask product**.
* As always, **never give your seed phrase or secret recovery phrase to anyone, even if you believe that person to be Customer Support from MetaMask, Axie Infinity, or Ronin.**#Why Infura cannot serve certain areas#
By default, MetaMask accesses the blockchain via [Infura](https://support.metamask.io/hc/en-us/articles/4417315392795), which is unavailable to persons in certain jurisdictions due to specific comprehensive sanctions programs enacted by the U.S. government. 

Attempts to use MetaMask in one of those jurisdictions may therefore generate the following error message:

**![Screen_Shot_2021-04-26_at_8.23.02_AM.png](https://support.metamask.io/hc/article_attachments/360093501511/Screen_Shot_2021-04-26_at_8.23.02_AM.png)**

Assuming you are indeed using Infura (MetaMask uses it by default), in this context 'blockchain host' refers to Infura. 

MetaMask is distributed for free and designed to be customized, so a user can decide to use Ethereum nodes other than those operated by Infura, or nodes relating to entirely different blockchains such as Binance Smart Chain and the Polygon network. It is entirely up to the MetaMask user. 

See also:

* [MetaMask is unable to connect to the blockchain host](https://support.metamask.io/hc/en-us/articles/360059950752)
* [Will MetaMask accept Russian users?](https://support.metamask.io/hc/en-us/articles/4783916052251)#Why did my MetaMask swap fail?#
#### Please note, this article is for MetaMask swaps performed with the Swap button within our app or extension (as shown below). **_For all other swap inquiries, please contact the third-party swap system you used, as they will have a better understanding of their system's intricacies, nuances, and issues._** _For general information regarding transactions, [see here](https://support.metamask.io/hc/en-us/articles/4410741657499-User-Guide-Transactions)._ 

![MetaMask Swaps icon](https://support.metamask.io/hc/article_attachments/10023625998875)

MetaMask Swaps fetches multiple quotes from various DeFi protocols. When you execute a swap through MetaMask, you interact directly with the liquidity source that offered the best price for your requested trade. MetaMask does its best to optimize each transaction before the swap is submitted. However, just like any on-chain transaction, transaction success is not guaranteed.

The main reason why your swap might have failed is likely to be **slippage**. When you perform a swap, you are agreeing to a price quote. I**f the price of the swap goes outside of the allowed slippage set (typically 2-3%), it will fail**, in order to prevent you from seeing a huge variance in value when completed. There is a higher risk of slippage if you're trading a pair that includes a volatile asset, as its price is more likely to change whilst the transaction is processing.

If your swap fails, you can retry the swap, but this time, input a higher slippage percentage. Here's how to do so:

Extension Mobile 

When you're inputting the details of your swap, hit the 'Advanced Options' button and adjust slippage tolerance. If you want to increase it above 3%, you'll need to click 'Custom' and input your preferred tolerance.

![MetaMask adjust slippage extension](https://support.metamask.io/hc/article_attachments/10023913676443)

When you navigate to the Swaps screen, look to the bottom-left corner, where it says 'Max slippage 3%' (with 3% being the default). Tap this text to adjust it.

![MetaMask adjust slippage mobile](https://support.metamask.io/hc/article_attachments/10023830273563)

Please be aware that this means the swap will still complete even if the price of the token changes more drastically during the pending/confirmation time.

If the swap still won't execute, you can [contact our support team](https://support.metamask.io/hc/en-us/articles/360058969391) so we can investigate the underlying DEXs and assets to ensure it is due to slippage each time. 

When a swap fails, **some gas (ETH) will still be spent**. This ETH goes to the network validators and not to MetaMask. This is unavoidable and part of the nature of blockchain.#Internal transactions#
At times, you may interact with a dapp, and expect to see a transaction record in MetaMask, but you don't. Your next step, as always, should be to verify on a block explorer whether the transaction occurred. Even then, though, you might not see it, if it is an _internal transaction._

### So if you're looking for a transaction and don't see it anywhere, check under the 'Internal Transactions' tab in Etherscan.

To learn how to examine your account on Etherscan, start[ here](https://support.metamask.io/hc/en-us/articles/360057536611).

Here's an example of what an internal transaction looks like there:

![Internal Transaction Example](https://support.metamask.io/hc/article_attachments/12927478386075)

_The actual transfer of funds shows up under the “To” field._

### Why aren’t _internal transactions_ displayed in my wallet activity/history?

When we talk about a 'transaction', we are referring to the act of an amount being deducted from one account, and that amount being added to the balance of another account: a simple transfer. However, as more sophisticated dapps are created, there are other things that happen on the blockchain that aren't "simple transfers".

An _internal transaction_ is an action that is occurring within, or between, one or multiple smart contracts. In other words, it is initiated inside the code itself, rather than _externally_, from a wallet address controlled by a human.

Often, the end result of the internal transaction is that one address or another will end up with more tokens of some kind; for example, if you're minting DAI, or if you're reserving an ENS name (in the latter case, you end up with that ENS name in your wallet).

Currently, MetaMask does not show internal transactions in your transaction activity or history, only standard transactions between addresses.

That said, **there is no difference between tokens received through an internal transaction, and those received through a standard transaction.** The transfer of funds **is** **reflected** in the overall balance of the account.

The reason MetaMask does not show these internal transactions is mainly a technical one; internal transactions, being somewhat "ephemeral" in nature (they occur while the code is running), are not recorded on the blockchain. There are some services, like Etherscan, that track internal transactions.#MetaMask Legacy Web3#
#### Chrome version unavailable

We've recently become aware that the MetaMask Legacy extension for Chrome-based browsers is unavailable (the link below will not work). We're working with Google to rectify this.

In the meantime, it is possible to install manually using the source code on GitHub: <https://github.com/MetaMask/legacy-web3-extension>. Do not attempt this method if you're unsure what you're doing.

With version 9.0.0 of the MetaMask browser extension, we stopped providing the **window.web3** API to websites. We [communicated this](https://medium.com/metamask/no-longer-injecting-web3-js-4a899ad6e59e) change to the Ethereum community over a year in advance. Nevertheless, unmaintained sites may still break. In order for our users to access these legacy websites, we created the **MetaMask Legacy Web3 Extension**. If you install this extension alongside the regular MetaMask wallet extension, websites that rely on our old **window.web3** API should start working again.

As with the regular extension, it’s critical that you only install from the official browser extension stores. Please follow the relevant link below to install the Legacy Web3 extension in your browser:

* [Chrome, Brave](https://chrome.google.com/webstore/detail/metamask-legacy-web3/dgoegggfhkapjphahmgihfgemkgecdgl)
* [Edge](https://microsoftedge.microsoft.com/addons/detail/metamask-legacy-web3/obkfjbjkiofoponpkmphnpaaadebfloh)
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/metamask-legacy-web3/)#How to export an account's private key#
#### Warning!

Exporting your account could be risky as it displays your private key in clear text. To avoid possible loss of funds, **make sure no one else sees or is able to capture a screenshot while you retrieve your private key**. Many phishing campaigns ask for your private key to gain access to your account. You should **never share your private key with anyone**, including the MetaMask team. No MetaMask representative, including our Support team, will ever ask for your private key, regardless of the context. If someone does ask for your private key, assume they are trying to scam you, and **do not** hand it over.

**For more information on accounts and private keys, start [here](https://support.metamask.io/hc/en-us/articles/4404722782107).**

An Ethereum account's private key can be used to import it into any compatible wallet. Naturally, to import your account elsewhere via private key, you'll need to locate it in MetaMask first. Here's how:

Extension Mobile 

1. Click on the identicon in the top right.
2. Select the account you'd like to export.
3. On the account page, click on the menu (three dots) in the upper right corner, and then on the "Account Details" button.
4. Click “Export Private Key”.
5. To access your private key, you'll now need to enter your wallet password. Once you've done so, click “Confirm” to proceed.
6. Your private key will now be revealed. Click to copy it, and save it somewhere safe. (Note: we aren't showing it in the below screenshot for obvious reasons -- but yours will be there.)
7. Click “Done” to close the screen.

![How to export an account's private key](https://support.metamask.io/hc/article_attachments/9025953096603/How_to_export_an_account_s_private_key.gif)

1. Click on the account button.
2. Go to 'Settings'.
3. Select 'Security & Privacy'.
4. Scroll down and then click on 'Show private key'.
5. Enter your password.
6. Copy your private key.

![How to export an account's private key mobile](https://support.metamask.io/hc/article_attachments/9026069276059/How_to_export_an_account_s_private_key_mobile.gif)

**Please make sure to never share this key with anyone as you can compromise your account in doing so.**

If you'd like to restore your MetaMask wallet and the accounts you create on it instead, please see [here](https://support.metamask.io/hc/en-us/articles/360015289612-How-to-restore-your-MetaMask-account-from-seed-phrase).#How to manage your MetaMetrics settings#
Sharp-eyed MetaMask users may have noticed this option, available by clicking in the upper right corner identicon > Settings > Security & Privacy:   
  
![MetaMask MetaMetrics option](https://support.metamask.io/hc/article_attachments/13306398012059)

_On MetaMask Mobile, your MetaMetrics settings are available by clicking on the three horizontal bars in the upper left hand corner > Settings > Security & Privacy._

For a fuller discussion of MetaMetrics, our most updated blog post on the topic is [here](https://medium.com/metamask/metametrics-a-refresher-on-metamasks-analytics-system-78d725cb9a75); simply put, **MetaMetrics is an opt-in analytics platform that aims to collect information on non-sensitive user events to help us improve the software for MetaMask users.** 

MetaMask is a product that, above all else, values our users' privacy and agency: MetaMask is a tool built to empower you, not to profit off of you. While many software products, with the best of intentions, have built-in metrics collection tools that are not visible to the user, MetaMask's metrics collection is completely voluntary. 

That said, opting into MetaMetrics doesn't affect your experience negatively at all--and in fact, it increases the likelihood that features you want or need will be prioritized. By opting in, users help us answer questions such as:

* What features do people use the most?
* What parts of the application do people run into the most trouble with?
* Where do people drop off when completing certain actions?

To those of you who do opt-in: thank you for helping us make MetaMask better!#Does MetaMask support Polkadot?#
Polkadot blockchain is **not an EVM-compatible** **network** and is currently **not supported in MetaMask**. We are hoping to facilitate support for Polkadot in the future through our Snaps plugin system.

See Polkadot's own information [here](https://support.polkadot.network/support/solutions/articles/65000168660-can-i-send-dot-to-metamask-or-mycrypto-wallet-). #How to add a memo to a transaction#
When you make a transaction to certain exchanges, the exchange sometimes requires you to add a memo to the transaction.  
  
To add a **memo or a note** during the transaction please enable Hex data on the extension in **Settings > Advanced > Show Hex Data:**

![MetaMask show hex data settings](https://support.metamask.io/hc/article_attachments/12927694142875)

  
After you enable it, an extra optional field will appear during the transaction where you can fill in your memo:

![MetaMask hex data memo](https://support.metamask.io/hc/article_attachments/12927694528283)#Why is the MetaMask Swap button unavailable / greyed out?#
#### Please note:

This article is for MetaMask swaps performed with the swap button within our app or extension.   **For all other swap inquiries, please contact the third-party swap system you used, as they will have a better understanding of their system's intricacies, nuances, and issues.**

MetaMask Swaps is not available on every network. If it is available on a network, the button will allow you to proceed. The team is investigating options on a path forward for additional networks. If and when that time comes, you will automatically see it reflected in the app and extension.

![MetaMask_swap_button_unavailable.png](https://support.metamask.io/hc/article_attachments/10024027830171)

If you are on a network on which Swaps is available, but are unable to click the Swap button, try restarting your browser, or try a different network connection entirely. Sometimes toggling networks (switch from one network back to the network you were using) helps.#Manually connecting to a dapp#
Usually, when you try and connect to a dapp by clicking a 'connect with MetaMask' button—or something with similar wording—MetaMask will pop up and ask if you're happy to do so.

If the dapp to which you're trying to connect doesn't automatically prompt you to connect your MetaMask, or for whatever reason you want to initiate the connection manually, follow these steps:

Extension Mobile 

Navigate to the site you want to manually connect to, and then click on the MetaMask Extension icon in the browser toolbar in the top-right:

![MetaMask manual connect](https://support.metamask.io/hc/article_attachments/13247169319067)

In MetaMask, click on the three dots menu in the upper right corner, and then on **Connected sites:**

**![MetaMask find connected sites](https://support.metamask.io/hc/article_attachments/13247262929435)**

Click the **Manually connect to current site** button at the bottom of the list.

#### Note:

This button will not appear if one of your other accounts is connected to the dapp, or if you have another wallet installed in your browser that has an account connected to the dapp. If you're in this position, check through connected sites in MetaMask for each account by following the instructions [here](https://support.metamask.io/hc/en-us/articles/360059535551). If the issue persists, check the accounts in your other wallet clients.

![MetaMask manual connect](https://support.metamask.io/hc/article_attachments/13247235050395)

Next, select the account(s) you want to connect, then follow the prompts to confirm the process:

![MetaMask manual connect](https://support.metamask.io/hc/article_attachments/13247234835227)

Tap on the 'browser' tab at the bottom of the screen:

![MetaMask open mobile browser](https://support.metamask.io/hc/article_attachments/13247804193307)

Next, find the site that you're looking for:

![MetaMask_navigate_mobile_browser.gif](https://support.metamask.io/hc/article_attachments/13247904696347)

From here, find and tap a button marked 'Connect' or similar—the exact design will vary depending on the dapp—and choose the account(s) you want to use with the dapp. #Using MetaMask wallet in Brave browser#
If you encounter issues while trying to use MetaMask on Brave (such as an error saying MetaMask is not installed, even though it is), **you need to disable Brave's wallet as the default**. MetaMask does not work correctly if other browser extension-based wallets are installed and active.

1. Click on the hamburger (three horizontal lines) icon in the upper right hand corner and choose the "Settings" menu:

![Brave wallet settings](https://support.metamask.io/hc/article_attachments/12803280985627)

1. Using the menu on the left-hand side, choose the "Wallet" section of Settings
2. Change "Default cryptocurrency wallet" to "None"
3. Restart Brave.

![Brave wallet settings](https://support.metamask.io/hc/article_attachments/12803283579547)#How to copy your MetaMask account public address #
_If you're unable to copy the correct address from MetaMask, see [below](#h%5F01G162XXM4G6CB5PQE2W5JZAAT) for a potential explanation._

In MetaMask, you can simply copy the public address to an account by clicking on it.

To access additional information about your account, see instructions [here](https://support.metamask.io/hc/en-us/articles/360015488791-How-to-view-your-account-details-public-address).

Extension Mobile 

When you hover over the account label, the message “Copy to clipboard” should appear.

![How to copy your metamask account public address](https://support.metamask.io/hc/article_attachments/8970884478747/How_to_copy_your_metamask_account_public_address.gif)

Tap on the shortened address below the account label; you may have to tap several times. This will copy the account's address to the clipboard.

![How to copy your metamask account public address mobile](https://support.metamask.io/hc/article_attachments/8970920018843/How_to_copy_your_metamask_account_public_address_Mobile.gif)

## **Why is my device copying the wrong address?**

If you are suspicious that following the above steps is copying a different address to your keyboard than the correct one—your account's actual public address—you may be the victim of a [clipboard hack](https://support.metamask.io/hc/en-us/articles/12092086331035).

### Clipboard hacks

In short, this is when a malicious actor installs a script on your device through some kind of malware/spyware. When such scripts are designed specifically to scam crypto users, they scan new additions to your clipboard continually, looking for public addresses. When they identify them, they will replace the address you actually copied with one the script is programmed to insert. 

When you next attempt to send a transaction, the malware will intervene and insert its own address, potentially resulting in you irretrievably sending funds to a hacker's wallet. This is why it's always a good idea to **double-check recipient addresses after you paste them**.

### How do I identify and address a clipboard hack?

Open your device's default text editor. On desktop, this will be Notepad for Windows devices and TextEdit for Mac. If you're using MetaMask Mobile, use your device's native note-taking/text editing app (such as Notes on iOS).

Now try this:

1. Open the text editor and write anything, and then **try copying and pasting this text within the same file**. This should hopefully confirm that copy and paste is working correctly on your device.
2. **Copy your address from MetaMask and paste it into the text editor**. Do the pasted address and your actual address match up?

If they don't correspond, you need to **scan your device for potential malware/spyware/viruses**. The methods for doing so vary considerably depending on your device, so please check with your manufacturer or OS provider.

Here are some starting points:

* Apple Support: [Protect your Mac from malware](https://support.apple.com/en-gb/guide/mac-help/mh40596/12.0/mac/12.0)
* Microsoft Support: [Stay protected with Windows Security](https://support.microsoft.com/en-us/windows/stay-protected-with-windows-security-2ae0363d-0ada-c064-8b56-6a39afb6a963)
* Google Support: [Remove malware or unsafe software](https://support.google.com/accounts/answer/9924802?hl=en&co=GENIE.Platform%3DAndroid#zippy=) (Android)

Malware scanning is generally not possible on iOS due to its underlying structure. However, since App Store content is vetted so carefully, it is unlikely any malicious software can be downloaded by regular users. 

Another important step to consider is to **make sure your OS is completely up to date**. New software versions often include security fixes that address the latest threats.

### Stay vigilant

Whilst the method outlined above may help identify clipboard hacks, it **may not work in all cases**. Hackers are, naturally, continually improving the sophistication of their attacks to stay ahead of the curve; in some cases, the method above won't be enough to identify whether your device is affected. It's possible that the script may be advanced enough to recognize the location you're pasting into, and simply lie dormant until it spots that you're actually pasting an address into MetaMask, or any other wallet or dapp.

This is why we can't emphasize enough: **get into the habit of always checking the addresses you paste**. Even just a quick scan—double-checking that a handful of characters at the beginning and end of the address are correct—is enough. #Will MetaMask ever ask me to verify my account?#
### Short answer: **definitely not**. 

Any platform or person asking you to:

* Complete **KYC** ('know your customer' — i.e. prove your identity)
* **Click a link** or button, most likely in an email
* **'Verify' or 'upgrade'** your account

...is a scam.

Other red flags in this type of scam include:

* **Threatening that your account will be closed or restricted** if you don't comply in time. As your accounts in MetaMask are on an open, permissionless blockchain, they're impossible to delete or restrict.
* **Claiming that MetaMask is subject to regulations** as a 'financial services' provider. This is simply untrue — MetaMask does not provide financial services.
* **The fact that they are contacting you at all**. As a [self-custodial](https://support.metamask.io/hc/en-us/articles/360059952212) wallet, MetaMask doesn't hold any of your personal information, including your [email](https://support.metamask.io/hc/en-us/articles/360058230211-What-are-MetaMask-s-official-support-channels-#:~:text=Email%2C%20concerning%20open%20tickets%2C%20from%20the%20domains%20%40metamask.io%20or%20%40metamask.zendesk.com.%20If%20you%20haven%27t%20already%20given%20us%20your%20email%20to%20create%20a%20support%20ticket%2C%20we%20do%20not%20have%20it%20%2D%2D%20remember%20MetaMask%20does%20not%20ask%20for%20your%20email%20to%20create%20a%20wallet.) (unless you're in correspondence with our technical support team—see [here](https://support.metamask.io/hc/en-us/articles/4453556284571) for more details—or you've signed up to certain mailing lists), phone number, or any user account on any social media platform. Remember when you created your account? You never handed over your details: you just had to save your Secret Recovery Phrase and create a password locally (to which we have zero access).

If you spot any of these things, **do not** click the links they provide. And remember you should [never give your Secret Recovery Phrase to anyone](https://support.metamask.io/hc/en-us/articles/4404722782107) in any case. 

See also: [I received an email claiming to be from MetaMask. Is it legit?](https://support.metamask.io/hc/en-us/articles/12683145255835)#Error: Cannot read property 'balance' of undefined #
You may encounter this error message when you open MetaMask:

_Message: Cannot read property 'balance' of undefined_

_Code: TypeError_

We recommend you reset your account by following the instructions [here](https://support.metamask.io/hc/en-us/articles/360015488891). Before you do so, consult a member of the team by [getting in touch with Support](https://support.metamask.io/hc/en-us/articles/360058969391) — resetting an account should be avoided where possible. **Make sure you have your Secret Recovery Phrase backed up before you reset your account, as well as the seed phrases or private keys of any imported accounts.** 

One thing to keep in mind after resetting your account is that your transaction activity history may default to none: this is because MetaMask stores your transaction history locally. Remember that all transaction history is on the blockchain, and can be [consulted on a block explorer](https://support.metamask.io/hc/en-us/articles/360057536611). MetaMask being unable to retrieve your balance does not mean that your funds have been lost. #How do I see the price at time of purchase for tokens bought through Swaps#
If you want to see the price you paid for a token or tokens, say to compare with its current value, you can do so via a block explorer. The price information for transactions displayed on a block explorer covers both the **current values** of a specific transaction but also covers the **v** **alue on the day of transfer**.

You can see this detail using Etherscan.io by looking at the transaction in which you bought the tokens.  

We can look at [this Etherscan transaction](https://etherscan.io/tx/0x96d3ff3f5dfd255c9f42732d1dba25aa6f97cd95ac009fb157ac8c6b01ea96d8) as example:  

![Etherscan price at time of swap](https://support.metamask.io/hc/article_attachments/10024165517851)  

  
The price that is displayed in Etherscan has 2 levels of detail:

* Displaying current value
* Estimated Value on Day of Transfer.

**You can toggle between these two by clicking directly on the price that is displayed.**

This works for transactions that were already successfully executed on the network.

We recommend that you look at the price that appears next to the full token balance that was transferred between sender and receiver in order to see the exact price (as shown above).  #NFT tokens in your MetaMask wallet#
#### New to crypto and web3?

Head to [MetaMask Learn](https://learn.metamask.io/) for a straightforward learning experience designed specifically for newcomers to web3\. It's completely free, available in multiple languages, and includes useful tools such as simulations to help you find your feet with MetaMask.

Support for viewing NFTs in MetaMask varies depending on how you're using it. NFTs cannot be displayed in MetaMask Extension, but can be viewed in MetaMask Mobile and on the [Portfolio Dapp](https://portfolio.metamask.io).

We will soon update MetaMask Extension with NFT support.

Portfolio Dapp Mobile 

It's currently not possible to view NFTs in MetaMask Extension. Instead, we recommend you head to the Portfolio Dapp. You can either go straight to the site via [portfolio.metamask.io](https://portfolio.metamask.io), or follow the 'Portfolio site' link in MetaMask, right under the 'Assets' and 'Activity' tabs. 

#### Managing your NFTs with the Portfolio Dapp 

The Portfolio Dapp is a standalone app that complements MetaMask and help you manage your tokens (and NFTs!). To see your NFTs, simply:

* Launch [the Portfolio Dapp](https://portfolio.metamask.io/)
* Sign in with MetaMask to the address you want to see
* Click on the "NFTs" tab

![NFT tokens in your MetaMask wallet](https://support.metamask.io/hc/article_attachments/12538256914331)

All the NFTs attributable to (owned by) the accounts that you link to the dapp should be displayed automatically. Please note that not all NFTs may display correctly — this is to do with how we're able to retrieve data about them for third-party sources. We are, however, working to maximize compatibility, with the goal of making sure the vast majority of NFTs will be displayed in the dapp.

NFTs are displayed under **the NFT tab.** Please remember that some NFTs will not show up on the mobile app, **or may not show up correctly.**

The easiest way to display your NFTs is to turn on the app's NFT autodetect feature. See the [FAQs](#h%5F01FX57WQCNFY5GKFYR8YYW70D5) for how to do this.

If autodetect doesn't find your NFTs, you can add them manually using these steps:

1. **Find the NFT's _address._** On OpenSea, for example, on the NFT's page under **Details**, there is a blue hyperlinked value labelled 'Contract Address'. If you click on this, it will take you to the contract's address on Etherscan; at the top-left of that page, there should be an icon labelled 'Contract', and to the right, a long string of letters and numbers. This is the address of the contract that created your NFT. Click on the 'copy' icon to the right of the address, and you'll have it on your clipboard.
2. In MetaMask Mobile, tap on the 'NFTs' tab, scroll down and tap on the 'Import NFTs' link.  
![NFT tokens in your MetaMask Mobile](https://support.metamask.io/hc/article_attachments/12676602789147)
3. Paste the NFT's address from your clipboard into the 'Address' box.
4. **Find the NFT's _ID_.** A collectible's ID is a unique identifier since no two NFTs are alike. Again, on OpenSea this number is under 'Details'. Make a note of it, or copy it onto your clipboard.
5. Paste the ID into the box marked 'ID' in MetaMask Mobile, tap on the 'ADD' button, and your NFTs should appear under the NFTs tab.

##   
**FAQs** 

**How do I turn on NFT detection?**

When you switch to the 'NFTs' tab on the app homepage, if you haven't already turned on NFT detection, a prompt will appear. Follow the link it contains to bring up the appropriate settings menu where you can turn on autodetect.

Please note: **NFT autodetect is only available on Ethereum mainnet**. The option will not appear in settings if you have a different network selected. 

Otherwise, follow these steps:

1. Find the settings menu by tapping the hamburger icon in the top-left corner of the app.
2. Find 'Security & Privacy'.
3. Flick the switch to turn on autodetect. **Note that 'Enable OpenSea API' must be turned on as well, otherwise the NFT autodetect switch will be greyed out**.  
![MetaMask Mobile Autodetect NFTs](https://support.metamask.io/hc/article_attachments/12539099228187)  
Most NFTs should now automatically appear under the 'NFTs' tab of your wallet.

**"You are not the owner of this NFT" error**

If you receive a message telling you that you are not the owner of the NFT, please be sure that you are trying to add the token to the right MetaMask account. Also, please verify on the network's block explorer that you own the NFT at your MetaMask wallet address. See our [guide](https://support.metamask.io/hc/en-us/articles/360057536611-How-to-check-my-wallet-activity-on-the-blockchain-explorer) if you're unsure how to check your wallet on a block explorer.

**How do I verify that I actually have the NFT?**

[Search for your MetaMask account address on the block explorer](https://support.metamask.io/hc/en-us/articles/360057536611-How-to-check-my-wallet-activity-on-the-blockchain-explorer) and review your transactions to see if the transfer of the NFT to your account has been successful. Alternatively, search for the NFT's contract address and check that its location matches your account's address, and that the transaction is complete.

You can see all of the transactions performed with your NFTs by clicking "ERC-1155/ERC-721 Token Txns" tab on the block explorer. If you do not see the NFT here, contact the sender.

**"Personal address detected. Input the collectible contract address."**

This error appears if you have pasted in an account that doesn't have the format of an NFT smart contract. Follow the instructions under the _Mobile_ tab above to locate the NFT's contract address, and paste this in instead.

#### **We cannot do anything if the transaction is not present on a block explorer.**#How to send tokens from your MetaMask wallet#
#### Note:

This article focuses on sending ETH and other tokens that conform to the ERC-20 standard. However, the **process is essentially the same regardless of the network** you're using — just make sure you have enough of the network's native token to pay for the transaction.

For more information on tokens in general, [see here](https://support.metamask.io/hc/en-us/articles/4405497827355-User-guide-Tokens). For general information regarding transactions on Ethereum, [see here](https://support.metamask.io/hc/en-us/articles/4410741657499-User-Guide-Transactions).

## What you’ll need:

* The account address of the recipient
* A sufficient balance of the _network native token_ (on Ethereum, ETH; on Binance Smart Chain, BNB; etc.) in your account to [cover the gas fee](https://support.metamask.io/hc/en-us/articles/4404600179227-User-Guide-Gas).

**Note**: If you are using a network other than Ethereum Mainnet, please ensure you have the corresponding token needed for gas fees. For example, the BNB token is used as gas for the Binance Smart Chain (BSC) network, and MATIC is necessary for Polygon. **For more information on networks other than Ethereum mainnet, see [here](https://support.metamask.io/hc/en-us/articles/4404424659995-User-Guide-Custom-networks-and-sidechains).** 
  
_Are you trying to send an NFT (an ERC-721 token?) If so, please follow [this](https://support.metamask.io/hc/en-us/articles/360058961911) guide._

## Steps:

Extension Mobile 

1. From the landing page of your wallet, make sure you're in the account from which you want to transact, and hit the 'Send' button in the middle of the screen.
2. Now you need to input the public address of the recipient. If you already have addresses saved in your address book, they will appear at this stage.

![Send tokens from your MetaMask wallet extension](https://support.metamask.io/hc/article_attachments/10081970688667)

1. Enter the amount of tokens you want to send and click next.

![Send tokens from your MetaMask wallet extension](https://support.metamask.io/hc/article_attachments/10081985074843)

1. Now you're presented with the estimated gas fees of your transaction, which you can also adjust. Before clicking 'Confirm' to proceed with the transaction it is a good idea to **double-check the recipient address.**

![Send tokens from your MetaMask wallet extension](https://support.metamask.io/hc/article_attachments/10081984689179)

1. You will then be redirected to the main page where you can see a list of your recent transactions on the 'Activity' tab.

1. Head to the homepage of your account. From here, tap the 'Send' button.  
You can also send tokens by clicking on the token itself, displayed under the 'Assets' tab on your homepage.
2. Now you'll need to input the address you want to send to. Either paste in the address from your clipboard (i.e. another app) or select one from your address book.

![Send tokens from your MetaMask wallet mobile](https://support.metamask.io/hc/article_attachments/10082688896923)

1. Now you'll be taken to a screen where you can input the amount you want to send. You can also change the token type if needed by tapping its name in the blue box directly above the amount.

![Send tokens from your MetaMask wallet mobile](https://support.metamask.io/hc/article_attachments/10082688018843)

1. When you tap 'Next', you will see the confirmation screen. Here you will see the details of your transaction, including the gas fee you're going to pay.

![Send tokens from your MetaMask wallet mobile](https://support.metamask.io/hc/article_attachments/10082688455451)

You can also edit your gas settings for the transaction by tapping the highlighted quantity of ETH in the 'Estimated gas fee' box.

Tap 'Send' to confirm the transaction and finish the process.

### Notes

* The number of tokens and your transaction fees (gas — paid in ETH or the native token of the network, such as BNB or MATIC) will not be deducted immediately. The status of the transaction is pending, which means the transaction has been submitted to the blockchain network and is pending confirmation.
* When the transaction is successful, you will see the updated amount of the token and ETH balances, as well as the status of the transaction updated to “Confirmed”.
* If you click on the transaction under the **Activity** tab on MetaMask, you can review the transaction information and have the option to view the transaction record on the network's block explorer, such as [Etherscan](https://etherscan.io/), [BscScan](https://bscscan.com/) or [Polygonscan](https://polygonscan.com/).
* Sometimes, your transaction may take longer to confirm. When that happens, you'll have the option to **Speed Up** the transaction by re-submitting the (first pending) transaction with a higher gas price, or **Cancel** the transaction before it gets confirmed. Learn more about [speeding up or cancelling a transaction](https://support.metamask.io/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction#:~:text=In%20this%20case%2C%20you%20can,%2C%20simply%20select%20%22Cancel%22.).
* Please see how to [deposit (receive) tokens to your MetaMask Wallet ](https://support.metamask.io/hc/en-us/articles/360028141672-How-to-deposit-receive-tokens-to-your-MetaMask-Wallet)if you are looking to receive tokens.
* **This process is exactly the same for ETH as it is for other ERC-20 tokens, but always make sure that, when sending ERC-20 tokens, the receiving wallet supports the tokens you are sending.**#How to customize token approvals with a spending cap#
_tl;dr: MetaMask allows you to manually edit the number of tokens dapps can access. [Click here](#h%5F01G3E1JE4CPVP1VH8PFS4FH25P) to jump straight to how._

## What is the point of token allowances?

When you interact with any dapp that involves your ERC-20 token holdings in some way or another, you're likely to have to approve its access to that token's smart contract (the same applies for ERC-20 equivalents on other chains, such as BEP-20 on BNB Chain). Then, when you decide, for example, to add 1,000 of token A and 1,000 of token B to a liquidity pool, the dapp _already_ has your permission to take the necessary quantity of tokens straight out of your wallet, and all you have to do is confirm the transaction. 

Token allowances are specific to one token. That means that if you've granted an allowance for a dapp to access your USDT, for example, it is only USDT that it can access. 

In most cases, token allowances that exceed what you need for any single transaction are very convenient; it would be time-consuming to have to grant permission anew for every transaction you wish to make on the dapp. Pre-approving access to a number of tokens at once is, therefore, something of a quality-of-life feature that makes your web3 activities smoother.

## Customizing token allowances in MetaMask

To preserve your control and agency, as well as giving you the tools to protect yourself from [one of the most common scam attack vectors](https://consensys.net/blog/metamask/the-seal-of-approval-know-what-youre-consenting-to-with-permissions-and-approvals-in-metamask/#:~:text=Token%20approvals%20are,intention%20of%20stealing.) around, MetaMask enables you to customize how many tokens you allow dapps to access. 

How? Well, when you come across a request to grant access to your tokens, a MetaMask approval window will appear. Check out the tabs below to see how this looks on Mobile and Extension:

Extension Mobile 

When you're prompted to sign a token allowance, MetaMask will show you the below screen, asking you to set a spending cap for the token:

![Custom spending cap extension](https://support.metamask.io/hc/article_attachments/13635781517467)

We designed this interface to give you more control and visibility over your token allowances, since you'll be prompted to _always_ input a preferred limit, rather than default to the amount proposed by the dapp (though you can still select this default allowance if you choose).

All you need to do is input an amount you're comfortable with. If you're not sure, see our [main article on token allowances](https://support.metamask.io/hc/en-us/articles/6174898326683) (a.k.a. approvals) for some more context. Click 'Next' to move to the second of two screens in the process, where you review your limit:

![Custom spending cap extension](https://support.metamask.io/hc/article_attachments/13635781542939)

When you're ready, click 'Approve' to complete the process.

Any interaction with a dapp that requires a token approval will call up a screen that reads "Give permission to access your \[token\]?". There's a lot of detail on this screen, but the button of interest to us is the one near the top: 'Edit permission':

![Custom spending cap mobile](https://support.metamask.io/hc/article_attachments/13636146897691)

If you tap 'Edit permission', you'll be able to see:

* Proposed approval limit: This is the number of tokens of that type requested by the dapp. It can often be astronomically high.
* Custom spend limit: This is where you'll input the amount of tokens to which you'll give the dapp access.

![Custom spending cap mobile](https://support.metamask.io/hc/article_attachments/13636173265179)

Simply input your preferred limit in this field and then follow the prompts to complete the allowance process.

## Staying safe

Token allowances are an essential part of web3, and issuing virtually unlimited approvals is also not problematic in itself: most of the time, it makes your life easier and reduces how much gas you're paying (since you need to pay for each separate approval). However, dapps are rarely ever completely secure from exploits and hack attempts, and having an unlimited token allowance in place may put you at risk of theft. If the dapp has a vulnerability in its code, it may be possible that bad actors can exploit it and order the dapp to withdraw your funds without you requesting it.

Equally, it's also possible that the site from which the token approval request originates is malicious. This is the more common form of attack: you visit a site designed to look like another, more trustworthy site or brand, and it's this trust that gets exploited. In these cases, your tokens can be stolen as soon as you send the approval transaction.

To prevent yourself becoming a victim of this, there are **two potential methods** you could adopt:

1. Never grant unlimited (astronomically high) allowances.
2. Grant unlimited allowances to trusted sites from time to time, but frequently [check in and revoke them](https://support.metamask.io/hc/en-us/articles/4446106184731) to keep on top of who and what has access to your tokens.

Both are viable, but **option 1 is the safest**. 

Additionally, you should **always do your [due diligence](https://consensys.net/blog/metamask/the-seal-of-approval-know-what-youre-consenting-to-with-permissions-and-approvals-in-metamask/#:~:text=You%E2%80%99ll%20often%20see,short%20time%20periods.)** on any site to which you grant token allowances. Sometimes, if the dapp itself was deployed by a bad actor out to steal your funds, it doesn't even have to be exploited for you to become a victim: as soon as you click 'approve' on the token, they can drain your wallet of that token. See our [Twitter thread](https://twitter.com/MetaMask/status/1499848729615949824) on this subject for additional context.

For more information on token approvals, here are some more resources:

* [Our deep dive blog post](https://consensys.net/blog/metamask/the-seal-of-approval-know-what-youre-consenting-to-with-permissions-and-approvals-in-metamask/)
* [How to revoke smart contract allowances/token approvals](https://support.metamask.io/hc/en-us/articles/4446106184731)
* [What is a token approval?](https://support.metamask.io/hc/en-us/articles/6174898326683)#Custom networks missing after reinstalling or restoring from Secret Recovery Phrase#
When you reinstall MetaMask, custom networks need to be re-added. This is because MetaMask essentially considers your wallet to be a completely new instance of the app, and will not retain any of the data that was previously stored locally — custom networks being one example.

You can easily re-add the networks that are missing using the instructions in the below articles:

* [Add a network using Chainlist](https://support.metamask.io/hc/en-us/articles/360058992772)
* [How to add a custom network RPC](https://support.metamask.io/hc/en-us/articles/360043227612).#How do I send, receive, or cash out an NFT?#
### Sending and receiving NFTs is easy in **MetaMask Mobile**; the feature is still on its way in MetaMask Extension.

#### Did you recently acquire an NFT, and you don't see it in the relevant account?

Follow the steps [here](https://support.metamask.io/hc/en-us/articles/360057536611) to look up the account on the block explorer. On the bottom half of the page, click on the tab titled "NFT Transfers"; there you should see a list of all the tokens you have in your wallet, ordered by when they entered it. If it's on Etherscan, it's in the account. **For more information on making NFTs appear in MetaMask, see [here](https://support.metamask.io/hc/en-us/articles/360058238591).**

#### Did you recently sell an NFT, and you don't see a transaction in your account? 

Often, the process of selling an NFT is performed through a smart contract (a blockchain program), and as a result, the funds you receive are delivered to you through an **_internal transaction_, which do not show up in your MetaMask activity**. To check internal transactions, [locate your account address on Etherscan](https://support.metamask.io/hc/en-us/articles/360057536611) and about halfway down the page, click on the 'Internal Transactions' tab. The transaction should be there.

Another way to verify that you received funds in exchange for your NFT is by [verifying that your balance is correct](https://support.metamask.io/hc/en-us/articles/4407623354139).

##   
Receiving an NFT

When you buy an NFT, it's often transferred to you automatically through a marketplace. If that is not the case, please follow and double-check these steps to ensure it is a successful transaction: 

1. Provide the sender with your public address. If you need, learn how to find this [here](https://support.metamask.io/hc/en-us/articles/360015289512)
2. Make sure you have enough of the network's native token (ETH, MATIC, BNB, etc.) to pay for gas
3. Have the sender send the NFT to your public address
4. [View the NFT in MetaMask](https://support.metamask.io/hc/en-us/articles/360058238591). We recommend you do so on Mobile, as NFTs are not currently visible on Extension.

As long as you're looking at the correct account in MetaMask, the NFTs should appear under 'NFTs' in MetaMask Mobile.

There are a number of platforms that exist for buying and selling NFTs and, in general, ERC-721 tokens: [Nifty's](https://niftys.com/), [OpenSea](https://opensea.io/), [Rarible](https://rarible.com/), [YellowHeart](https://yh.io/), etc. 

## Sending an NFT

Sending an NFT (both ERC-721 and [ERC-1155](https://support.metamask.io/hc/en-us/articles/360058488651) tokens) in MetaMask is very similar to sending conventional tokens (usually ERC-20 tokens, often just referred to as coins or crypto). **Currently, this functionality should only be attempted in MetaMask Mobile**.

1. Make sure you have enough of the network's native token to pay for the transaction
2. Tap on the 'NFTs' tab
3. Tap on the icon of the NFT you wish to send
4. Tap on the 'send' button at the bottom of the screen:

![MetaMask Mobile Send NFT](https://support.metamask.io/hc/article_attachments/12539451275163)

1. Enter the address you wish to send it to, hit 'Next', and follow the standard transaction prompts

For more on gas, and transactions, see [here](https://support.metamask.io/hc/en-us/articles/4404600179227-User-Guide-Gas); to learn more about token types, see our [guide](https://support.metamask.io/hc/en-us/articles/4405497827355-User-guide-Tokens).#Cannot load tokens due to error message about token being already added#
If you get an error about a token having already been added when trying to add a token, you can solve it through the following process:

1. Right-click on the MetaMask Extension
2. Select 'This Can Read and Change Site Data'
3. Select 'On All Sites' instead of 'When You Click the Extension'

![mceclip0.png](https://support.metamask.io/hc/article_attachments/360046657191/mceclip0.png)

You may also need to close and re-open your browser, or try a different internet connection entirely.

Note that this only applies to Chromium-based browsers (Chrome, Edge, Brave), and not Firefox. MetaMask Extension on Firefox is configured to request this permission as a requirement of use.

If you continue to experience issues, [please contact MetaMask Support](https://support.metamask.io/hc/en-us/articles/360058969391). #Withdrawing or cashing out tokens to fiat currency#
If you have ETH or other tokens that you want to exchange for fiat currency, you will have to do so on an exchange, as **MetaMask does not provide this service**. This means sending the tokens manually to the exchange platform of your choice. 

When you do so, please bear in mind:

* **You will need some of network's native tokens in order to pay gas fees for the transaction of sending the tokens**. This could be ETH for Ethereum mainnet, for example, or BNB or MATIC for BNB Smart Chain or Polygon respectively.
* **You need to ensure the exchange supports the network and tokens you're using**. For example, if you're sending MATIC, make sure the exchange supports the type of MATIC you're using (ERC-20 or native). You should not send native MATIC (on Polygon itself) to an exchange that only supports the ERC-20 MATIC, as you'll most likely lose the tokens forever. Be sure to check the exchange's support documentation to verify which network you should send on.

For details on how to send tokens from MetaMask, please check our article on [sending tokens out of MetaMask.](https://support.metamask.io/hc/en-us/articles/360015488931-How-to-send-ETH-and-ERC-20-tokens-from-your-MetaMask-Wallet)#How do I log out of (lock) my wallet?#
Remember: MetaMask isn't like a traditional website, where you're _logging in_ to a remote server. Rather, MetaMask stores your Secret Recovery Phrase, private keys, and a certain amount of information about how you use MetaMask (the 'state logs') on your local device, so that whenever you want to carry out an operation on a blockchain, your SRP and private keys are ready to be used.

In this sense, you don't _log out_ of MetaMask, but you can _lock_ the application, so that you'll have to re-enter your password or biometrics to log back in.

Extension Mobile 

Click **Lock** in the dropdown when clicking on the identicon icon: 

![How to lock MetaMask wallet extension](https://support.metamask.io/hc/article_attachments/8971045232667/How_to_lock_MetaMask_wallet.gif)

  
You can also set an auto-lock, which you can find in **Settings > Advanced:** 

![Adjust MetaMask auto-lock](https://support.metamask.io/hc/article_attachments/8971146470555/Adjust_MetaMask_auto-lock.gif)

  
Here you can set a timer in minutes after which the wallet will be locked.

You can also add an extra layer of security by adding a hardware wallet. Refer to **[this article](https://support.metamask.io/hc/en-us/articles/4408552261275)** on hardware wallet integration. 

You will see Lock at the bottom of the sidebar. Tapping it will prompt a confirmation message to lock the wallet: 

![How to lock MetaMask wallet mobile](https://support.metamask.io/hc/article_attachments/8971289416475/How_to_lock_MetaMask_wallet_mobile.gif)

You can also add an extra layer of security by adding a hardware wallet. Refer to **[this article](https://support.metamask.io/hc/en-us/articles/4408552261275)** on hardware wallet integration. #Uniswap support and troubleshooting tips#
### Please note that [MetaMask is a self-custodial wallet](https://support.metamask.io/hc/en-us/articles/360059952212-MetaMask-is-a-non-custodial-wallet). That means that we do not have any control over your funds, and we do not keep your personal information or account access. That also means that, while we enable interactions with third parties like Uniswap, we are not responsible for what happens on Uniswap.

Answers to the most common Uniswap issues can be found on their [FAQ site](https://uniswap.org/faq).

Some additional tips:

* Make sure you have enough ETH for the gas fee in order to complete the swap.
* Make sure you both APPROVE and then SWAP (two transactions). If you only approved, it will not be completed.
* After the swap completes, **if you do not see the tokens you swapped for**, you may need to simply [add the token(s) to your MetaMask in order to see them. ](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-View-See-Your-Tokens-in-Metamask)
* If you are getting failed transactions, make sure the gwei is set high enough, and the gas limit is above 250,000.
* If your MetaMask activity feed is inaccurate or stuck, meaning you are unable to speed up, cancel or send new transactions, try [these instructions](https://support.metamask.io/hc/en-us/articles/360015489251-How-to-speed-up-or-cancel-a-pending-transaction).
* Never give your Secret Recovery Phrase to anyone or any site. If Uniswap asks you for this information, then you are not on Uniswap, you are on a scam site or app.

**If you are still having trouble with Uniswap, we highly encourage you to reach out to them via their [support channels](https://support.uniswap.org/hc/en-us).**#Why did I pay gas fees for a failed transaction?#
**Gas paid is not a fee that MetaMask receives so we cannot refund it.** This fee is paid to validators for finalizing transactions, validating them into blocks, and securing the blockchain.

The Ethereum network [requires gas](https://support.metamask.io/hc/en-us/articles/4404600179227) to execute transactions. When you send tokens, interact with a contract, or do anything else on the blockchain, you must pay for that computation. That payment is calculated in gas, and gas is always paid in ETH.

You are paying for the computation, regardless of whether your transaction succeeds or fails. Even if it fails, validators must verify and execute your transaction, which takes computational power. You must pay for that computation, just like you would pay for a successful transaction.

There are a few other error examples that you could encounter during the transaction failure: 

* A **Dropped and Replaced** transaction, which means the transaction was dropped and replaced by a new one. Please see more information about a dropped and replaced transaction here: <https://info.etherscan.com/transaction-dropped-replaced/>
* **Out of gas** is an error that occurs when the gas limit was set too low. Please read the below article for a better understanding of the gas limit: <https://ethgasstation.info/blog/gas-limit/>. You can retry the transaction, but this time please use [advanced gas controls](https://support.metamask.io/hc/en-us/articles/360022895972) to set the gas limit to a higher value. You can also refer to [this article](https://support.metamask.io/hc/en-us/articles/360038849792-Why-did-my-transaction-fail-with-an-Out-of-Gas-error-How-can-I-fix-it-) to learn more about this error and how to fix it.#Does MetaMask have a bug bounty program for vulnerabilities?#
Yes! 

Security is one of the core focus areas of the development team. To build on the work we already do with security experts and independent researchers, we want to leverage the expertise of the community through our **HackerOne bounty scheme**.

You can access it at [hackerone.com/metamask](https://hackerone.com/metamask). 

The scheme only applies to security vulnerabilities. If you have a non-security-related bug, please report it on [GitHub](https://github.com/MetaMask/). 

If you believe you've found a vulnerability, please **do not discuss it publicly**, especially on social media platforms. Instead, head directly to the MetaMask HackerOne page to report the issue. 

For more information, please see [metamask.io/security](https://metamask.io/security/). #Error: Exception is thrown in contract code/in contract execution#
Generally speaking, "Exception is thrown in contract code" means exactly what it says — something in the contract didn't work correctly. Since this means there's a problem or some dysfunction in the smart contract — an area over which we have no control — we're unable to assist you.

In these cases, please contact the owners of the contract for resolution or advice. The developers should post in our forum and/or on the Ethereum stack exchange to seek help.

![Screen_Shot_2021-04-07_at_10.54.05_PM.png](https://support.metamask.io/hc/article_attachments/360091878831/Screen_Shot_2021-04-07_at_10.54.05_PM.png)#How to interact with NFTs, OpenSea, and Rarible#
MetaMask is capable of holding, sending, and minting NFTs.

There are, however, some minor differences between MetaMask Mobile and Extension when interacting with NFTs: on MetaMask Mobile, you can see your NFTs in-app, while on the extension you cannot see them natively. 

The best way MetaMask offers of viewing your NFTs is currently in the Portfolio Dapp, available at [portfolio.metamask.io](https://portfolio.metamask.io/). All you need to do is connect your wallet, and your NFTs should be viewable. Easy!

Alternatively, third party websites such as Etherscan, OpenSea or Rarible may enable you to view NFTs.

For more information, see our article [NFT tokens in your MetaMask wallet](https://support.metamask.io/hc/en-us/articles/360058238591) and check out the [NFT section](https://support.metamask.io/hc/en-us/sections/4469964087195-NFTs) of this help center. #Where does MetaMask source the token's price?#
MetaMask gets token data from [CoinGecko](https://www.coingecko.com/en). You can visit their site to find exchanges actively trading specific tokens.#How can I reset my password?#
_Please note that when resetting your wallet as described here, **any accounts (addresses) that do NOT ORIGINATE from your phrase will not be recovered afterwards**. These imported accounts, either hardware wallet or imported via private key, are NOT INCLUDED under the Secret Recovery Phrase and will need to be [re-added manually](https://support.metamask.io/hc/en-us/articles/360015489271). Please be sure to verify that you have the private key/seed phrase for any imported accounts before proceeding with the reset process._ 
  
When resetting your password for your MetaMask wallet, you will need your **12-word secret Secret Recovery Phrase**. If you do not already have your Secret Recovery Phrase saved someplace safe, please make sure to read [How to reveal your Secret Recovery Phrase.](https://support.metamask.io/hc/en-us/articles/360015290032)

**Before trying these steps, confirm that you have your Secret Recovery Phrase with you, as you will not be able to reset your password otherwise and will risk being locked out of your wallet.**

Extension Mobile 

1. If your wallet is currently unlocked, please lock it, click on the **account** icon on the top right corner to open the dropdown menu, and select **Lock** in the dropdown of the account.
2. As soon you are on the Unlock view, click **Forgot password:**

![How can I reset my password.gif](https://support.metamask.io/hc/article_attachments/9305089663131/How_can_I_reset_my_password.gif)

1. Enter your 12-word secret Secret Recovery Phrase in the text boxes. **Make sure you insert each word in the correct order, and all in lower case.**
2. Enter your new password.
3. Retype your password to confirm it was written correctly.
4. Click **restore**:

![How to reset wallet password](https://support.metamask.io/hc/article_attachments/9305249766555/How_to_reset_wallet_2.1_password.png)

1. If your wallet is currently unlocked, you'll need to lock the app to access the button for resetting your password. To do this, click on the **sidebar menu** and select **Lock** at the bottom.
2. As soon you are on the unlock view, click **Reset Wallet.**
3. You will see the message: **"Are you sure you want to erase your wallet"** click **"I understand, continue".**
4. Type **delete** my wallet.
5. As soon as you confirm, you will return to the setup screen where you can tap **Import using Secret Recovery Phrase.**

**![How to reset your account mobile](https://support.metamask.io/hc/article_attachments/9305458244379/How_to_reset_your_account_mobile.gif)**

**Can MetaMask Support reset my password for me?**

MetaMask is not a cloud-based solution and never has access to your Secret Recovery Phrase. It resides locally on your device (client-side) and is **only shown to you**.

If you get an error regarding your Secret Recovery Phrase being invalid, check [here](https://support.metamask.io/hc/en-us/articles/360053014611-How-to-fix-Invalid-Seed-Phrase-error).

For more on passwords in MetaMask, see [here](https://support.metamask.io/hc/en-us/articles/4405451730331).#Using a local node#
Ethereum is a network of "nodes" — that is, a network of computers running similar software that connects them to the blockchain, and which, collectively, comprise the network. 

For greater security, privacy, and read speeds, you might want to run your own node, instead of using [Infura](https://support.metamask.io/hc/en-us/articles/4417315392795) as the default provider. Running nodes also increases Ethereum's decentralization, improving the health of the network.

Once you have your own node up and running, you can connect MetaMask to it and use it to send requests to the blockchain and receive information back. 

To run a node, you need Ethereum clients. Since Ethereum transitioned to Proof of Stake, you can no longer run a "full" node using one client. Instead, you need two: one for the execution layer, and one for the consensus layer. 

**Consensus layer** clients include:

* [Prysm](https://prysmaticlabs.com/)
* [Lighthouse](https://lighthouse.sigmaprime.io/)
* [Nimbus](https://nimbus.team/)
* [Teku](https://consensys.net/knowledge-base/ethereum-2/teku/)
* [Lodestar](https://lodestar.chainsafe.io/)

**Execution layer** clients include:

* [Geth](https://geth.ethereum.org/)
* [Besu](https://www.hyperledger.org/use/besu)
* [Erigon](https://github.com/ledgerwatch/erigon#erigon)
* [Nethermind](https://nethermind.io/)

Each client is designed with a slightly different set of priorities or target audience, and they also use different code languages. Make sure to look through to find the one that best suits your needs.

Once you've chosen one, the best place to start is the official Ethereum guide to running a node: <https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/>

Once you have your local clients set up, you can connect to your node with the network menu in the top left corner of MetaMask:

![Using a local node MetaMask](https://support.metamask.io/hc/article_attachments/9942848261787)

### See also:

* <https://clientdiversity.org/>. 'Client diversity' describes the mix of Ethereum clients currently in use. Concentrating Ethereum nodes into a handful of dominant clients creates a centralization risk for the network, and a potentially problematic point of failure. Whilst the diversity of consensus layer clients is relatively healthy, it's recommended you consider steering away from Geth as you execution layer client, if possible.#Fighting back against sweeper bots#
Have assets suddenly moved out of your account, without your permission or knowledge? Have you noticed that every time you transfer something into your account, it gets automatically forwarded somewhere else?

If so, you might be dealing with a _sweeper_. This article will give some explanation as to what sweepers are, how they happen, and further guidance as to how to deal with having one attached to your account.

### If you don’t have a sweeper on your account, but want to know more about how to avoid ending up in this situation, consult our [preventative guide](https://support.metamask.io/hc/en-us/articles/12091923128347). 

#### What is a sweeper?

Also known as a _sweeper bot_, a sweeper is an automated bit of code (also called a _script_) that can be assigned to a blockchain address, to perform actions relating to that account automatically, such as automatically _sweeping_ assets deposited into the account to another address.

Like all computer programs, whether a script is malicious or not depends on who programmed it, what it’s designed to do, and where it is deployed. After all, being able to move assets programmatically from one address to another could be very convenient functionality. However, sweeper bots are often deployed maliciously. 

### Most times, a user gives away their Secret Recovery Phrase; a malicious actor uses that access to deploy a script to this account, automatically sending all the wallet’s valuable resources somewhere else.

#### How does a sweeper work?

In order to understand how sweepers, and other bots that act on public blockchain networks, operate, a little bit of technical understanding as to how these networks work is necessary. At a high level, then: A public blockchain network is composed of any number of _nodes_, each of which is communicating with the rest of the network’s nodes, continually maintaining _consensus_ regarding the state of a common _ledger_. That ledger keeps track of any number of different assets, depending on how the blockchain was designed.

Users on the network send _transactions_ from their addresses to other addresses. These transactions are _broadcast_ to the closest node(s), which then forward the proposed transaction on to the rest of the network. The user’s transaction remains pending for a time, with other recent transactions, in what’s known as the _transaction pool_ (txpool) or _memory pool_ (mempool). Meanwhile, the nodes do the work of checking that the address requesting the transfer, in fact, has the funds available for transfer, and reach consensus with the rest of the network that the transaction is thus valid. At this point, a group of validated transactions is grouped together and encrypted, and proposed to the network as a _block_ of transactions; when it is accepted, it is included in the _chain_.

### If blockchain terminology or concepts trip you up, don’t worry. Check out [ConsenSys’ Blockchain Glossary](https://consensys.net/knowledge-base/a-blockchain-glossary-for-beginners/) and our [Learn the Basics article](https://support.metamask.io/hc/en-us/articles/360015489611). 

Sweeper bots, most often, are scanning that pool of transactions for transfers of tokens to the compromised address; as soon as a bot sees an incoming transfer of value or tokens that would be of interest, it initiates a second transaction, transferring those assets to another, third-party address.

Because this is all automated via code and actions are taken almost simultaneously with the funds being transferred to the account, it might happen faster than the time it takes to refresh the block explorer. You certainly won’t be able to manually transfer assets out of your account faster than a bot.

Consider some of these details observed about sweeper behavior:

* A sweeper might favor the asset that is highest in USD value, even if that means spending more in transaction fees to sweep it.
* The sweeper may use all available ETH to maximize the value swept out of the account, while also having a high likelihood of being the “winning” transaction, in cases where there is a battle between two parties to remove assets from an account
* Even if there is no ETH in the account, an attacker may fund an account temporarily in order to cover the gas fees to extract other desirable assets from the account (NFTs, Liquidity Pool tokens, etc.)
* If the USD value of assets in the account is below a certain level, the bot may not sweep out the assets, meaning **you may not realize that you have a sweeper on your account**.

#### Bringing a bot to a bot fight

In this context–fighting against an automated opponent who takes your ETH from you before you can use it–things can look pretty hopeless. Enter [Flashbots](https://docs.flashbots.net/), who have developed a project called [Flashbots/searcher-sponsored-tx](https://github.com/flashbots/searcher-sponsored-tx). This allows you, essentially, to pay for the transaction on the compromised address from another account. Or, as they put it: _“This is accomplished by submitting a Flashbots transaction bundle, with the first "sponsor" transaction paying the "executor" wallet in ETH, followed by a series of executor transactions that spend this newly received ETH on gas fees.”_ 

This strategy requires two accounts — the compromised account (the _executor_) and another to pay for the transaction (the _sponsor_). **Success using Flashbots will require significant technical know-how and research. The following instructions are provided as a general guide only.**

* Make sure the compromised account has no ETH in it; we highly recommend you use a [burner bot](https://twitter.com/smpalladino/status/1373049027365904389?s=20&t=PE8rsffOnw8PxiKzpl7OdQ) first.
   * We generally advise running this burner bot on more than once machine, using a different endpoint on each. For example, run a burner locally using [Infura](https://infura.io/), and a burner on a remote server with another provider such as [Quiknode](https://www.quicknode.com/). This is so that you have a redundancy plan in case we have high network latency or node issues (rate limits, syncing issues).
* The code in [Flashbots/searcher-sponsored-tx](https://github.com/flashbots/searcher-sponsored-tx) will need to be altered for your specific needs, but the engine is there for you to rescue your tokens from a compromised address. The Flashbots engine is flexible enough to support a single [transfer()](https://eips.ethereum.org/EIPS/eip-20) call, or [unstake()](https://eips.ethereum.org/EIPS/eip-900#unstake) and [transfer()](https://eips.ethereum.org/EIPS/eip-20)_._

#### Using a self-destructing smart contract

Another method of getting ETH into the account without it being publicly broadcast in the transaction pool is by sending it through an [internal transaction](https://support.metamask.io/hc/en-us/articles/360058568312-Internal-transactions), using a smart contract deployed by a new, clean, safe address.

pragma solidity >=0.7.0 <0.9.0;  
  
contract MoveETH {  
    constructor(address sendToAddress) payable {  
        address payable addr = payable(address(sendToAddress));  
        selfdestruct(addr);  
    }  
}

By deploying this contract, we can send ETH and the compromised address string in the constructor argument. This contract works by creating the contract and self-destructing in the same transaction. The use of selfdestruct() means we clear the blockchain state (since it's a one time use contract) and forward the ETH to the compromised address in 1 transaction.

Example: <https://goerli.etherscan.io/tx/0x82ccb222eae55aaea73dd0efee1ea6ed7320f880889f280d4a343b8823f86692>

While effective, this method uses a notably higher amount of gas (about 70,000), as it is much more complex than a simple transfer from one account to another (normally 22,000).

From here, we would broadcast pre-signed transactions ensuring we are using all the ETH in the account so that a sweeper cannot frontrun us - or at least make it unlikely to be frontrun, as a sweeper would need to send more ETH to the account to pay a higher gas price.

### Remember, the best way to beat a sweeper is… to not have to in the first place! Follow our recommendations[ here](https://support.metamask.io/hc/en-us/articles/12091923128347), and stay safe out there. 

This is an updated version of [an article](https://blog.mycrypto.com/how-to-beat-an-ethereum-based-sweeper-and-recover-your-assets) originally published on MyCrypto's blog.#Error: undefined is not an object#
The following error message can occur in MetaMask:

![mceclip0.png](https://support.metamask.io/hc/article_attachments/360091259852/mceclip0.png)

If you've encountered this error, please reset your account by following the instructions [here](https://support.metamask.io/hc/en-us/articles/360015488891). One thing to keep in mind after resetting your account is that your transaction activity history may default to none. Of course, all transaction history is on the block chain, and can be [consulted on a block explorer.](https://support.metamask.io/hc/en-us/articles/360057536611) 

BE SURE TO SECURELY SAVE YOUR PASSWORD, Secret Recovery Phrase and PRIVATE KEYS (for imported accounts) BEFORE RESETTING.  
  
**To better communicate the importance of never sharing your seed phrase, we've changed the name of the phrase to "secret recovery phrase". Learn more [here](https://support.metamask.io/hc/en-us/articles/360060826432)** #How to reset an account#
An account reset is to be used only when strictly necessary, most often to resolve stuck and pending transactions. We do not recommend you reset your account unless one of our Support agents suggests you do so.

Account resets are intended primarily for developers, who may find it useful to reset a test network while continuing to use the same account. When you reset, MetaMask considers the network ID to be a clean network in a fresh state, essentially resetting the transaction history.

Note that resetting your account **only affects the current network**. 

**Before resetting, we recommend you [download your state logs](https://support.metamask.io/hc/en-us/articles/360015290092). This will allow our Support agents to troubleshoot the root cause if necessary. The reset process is irreversible, and not a common feature for most users.**

#### _**You will not lose value in your accounts.**_

### To reset the account:

1. On Extension, click the account icon on the top-right corner. On Mobile, tap the hamburger icon in the top left to open the main menu.
2. Select **Settings**
3. Select **Advanced**
4. Scroll down and click **Reset Account**

**![How to reset an account](https://support.metamask.io/hc/article_attachments/9186048730139/How_to_reset_an_account.gif)**#User Guide: How to use a Hardware Wallet#
#### Have you recently acquired a hardware wallet? Are you considering it?

MetaMask recommends the usage of hardware wallets for long-term crypto-asset storage. For an explanation as to what a hardware wallet is, and a directory of the product lines that MetaMask officially supports, see our [Hardware Wallet Hub](https://support.metamask.io/hc/en-us/articles/4408552261275-Hardware-Wallet-Hub).

_Once you've got your hands on a hardware wallet, follow the instructions below to get the most security and functionality out of your device._

## How to configure your hardware wallet

#### Regardless of whether you're HODLing, NFT swapping, DAO building or DeFi degen-ing, MetaMask recommends you follow this configuration pattern for maximum security:

1. **Create a _new Secret Recovery Phrase / Seed Phrase_ on your Hardware Wallet.** A lot of hardware wallets offer you the option to "import a seed phrase", from MetaMask, for example. While that might sound like what you want to do, _it's not_.  
    
#### _The whole point of having a Hardware Wallet is having a device whose Secret Recovery Phrase is never connected to the internet, even if it's encrypted like it is in MetaMask._  
To get that truly "[airgapped](https://www.techopedia.com/definition/17037/air-gap)" security, you need to create a _new_ SRP through your hardware wallet. A few things to remember:  
   * Often, **hardware wallets generate 24-word SRPs**, rather than the 12 you get with MetaMask. Each one of those words, and the order they're in, is crucial!  
   * Just like with your SRP from MetaMask, **never share it with anyone**  
   * Again, just like with MetaMask, **back it up in a secure location, or several, always offline and never in anyone's cloud.**
2. **Import the accounts from the hardware wallet that you want to use into MetaMask**. Just like with an SRP that you create through MetaMask, your new SRP on your hardware wallet can create a very large number of accounts. Once you've got your SRP all set up on your hardware wallet, import the accounts you want to use in MetaMask following the manufacturer's instructions — check out our [Hardware Wallet Hub](https://support.metamask.io/hc/en-us/articles/4408552261275-Hardware-Wallet-Hub) for links.
3. **Transfer the assets you wish to secure with your hardware wallet** from your existing MetaMask account(s) to the hardware wallet account(s). This is fairly straightforward—you're sending things from one account to another—but here are some tips:  
   * You might not be able to transfer _all_ of your ETH out of your original account, because you'll have to pay the gas fee to send the assets; the same goes for BNB, MATIC, etc., depending on the gas token of the chain you're on.  
   * Additionally, you may want to leave some assets in your original wallet, depending on how often you transact, and whether you plan on carrying your hardware wallet with you.  
   * **Be thoughtful with how you handle NFTs**. A lot of NFTs aren't just cool links to a .jpeg on someone's server — they might issue tokens to you every day, or allow you to play a video game, or allow you access to funds, or control your domain name. As long as your hardware wallet supports NFTs, you'll be fine in the sense that _you'll still have them_, but make sure you have them on the address, and in the wallet, where you'll be _able to use them_ the way you want to.  
   * If you have a lot of assets that all have to go to the same place, save some gas and check out our [Account Migration Guide.](https://support.metamask.io/hc/en-us/articles/4867408571803-Account-Migration-Guide)
4. Now that you have your assets secured offline, **get comfortable with your HWW's signing procedure**. This is, essentially, how transactions will work:  
Transaction (signature, transfer, etc.) initiated by you on dapp/online platform-->  
\-->Transaction sent by MetaMask to Hardware Wallet-->  
\-->Transaction signed on Hardware Wallet-->  
\-->Signed transaction transferred back to MetaMask-->  
\-->MetaMask sends signed transaction to the blockchain network-->  
\-->Transaction is registered back at the dapp/platform

However, each hardware wallet, depending on how it is designed, will implement these steps in their own particular way. So before you find yourself in an NFT minting war, trying to authorize funds, make sure you know what to expect!#ETH on Sepolia and Goerli networks (testnets)#
Sepolia and Goerli are test networks. They are primarily used for development on the blockchain (testing out applications and smart contracts, etc). 

**ETH on these testnets is a dummy balance and cannot be withdrawn or sent to mainnet**. This also means that anyone attempting to sell you testnet ETH is trying to scam you: ETH on testnets has no value and is mainly for developers to test out new dapps and features. 

See our article on [testnet ETH scams](https://support.metamask.io/hc/en-us/articles/11836891903003) for more information.

#### Changes to available testnets

Ethereum used to have four testnets: Ropsten, Rinkeby, Goerli, and Kovan (Kiln was also added for specific purposes relating to the Merge in 2022). However, after the Merge occurred on September 15th 2022, most of the existing testnets began being deprecated (taken out of service). They may still work, but could be unreliable. Sepolia and Goerli are now the only two available. See [here](https://blog.ethereum.org/2022/06/21/testnet-deprecation) for more information.#Error: Invalid or missing bridge url parameter value#
Sometimes, MetaMask will present an error message, "**Error: Invalid or missing bridge url parameter value**" as shown below:

![mceclip0.png](https://support.metamask.io/hc/article_attachments/360091215331/mceclip0.png)

If you've encountered this error, please reset your account by following the instructions [here](https://support.metamask.io/hc/en-us/articles/360015488891). One thing to keep in mind after resetting your account is that your transaction activity history may default to none. Of course, all transaction history is on the blockchain, and can be [consulted on a block explorer.](https://support.metamask.io/hc/en-us/articles/360057536611) 

BE SURE TO SECURELY SAVE YOUR PASSWORD, Secret Recovery Phrase and PRIVATE KEYS (for imported accounts) BEFORE RESETTING.#How to import an account#
_This article covers the process of adding accounts to your wallet which are not associated with your MetaMask wallet's Secret Recovery Phrase. If you're starting from a fresh install and want to access an existing MetaMask account, you should head to our article on [restoring your wallet using your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360015289612). Please note that you can't import a second MetaMask Secret Recovery Phrase into your existing MetaMask wallet. It will overwrite the original and all associated data._

## **Quick links:**

* [Import using a private key ](#h%5F01G01W07NV7Q94M7P1EBD5BYM4)
* [Import using a JSON](#h%5F01G01W0D3TGE72A7ZBV0FMSZX1)

#### Note:

**Imported accounts ARE NOT BACKED UP by your Secret Recovery Phrase**. Even though they will appear in your MetaMask wallet, you need to save the private keys used to import them the same way you save your Secret Recovery Phrase. **If you delete your wallet from your device, your imported accounts will be removed with it.** When/if you then [restore your wallet using your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360015289612), you will need to re-add imported accounts with their private keys. 

Read more about imported accounts [here](https://support.metamask.io/hc/en-us/articles/360015289932).

For this process, you'll need the private key string or JSON file of the account you're looking to import. Refer to the documentation of that wallet provider to learn how to find it. 

## **Importing using a private key**

Extension Mobile 

1. Click the circle icon at the top right corner of your MetaMask pop-up next to the network indicator.
2. Select “**Import Account**” on the dropdown menu:
3. You will be directed to the Import page. Paste your private key and click “**Import”**.

![How to import an account from private key](https://support.metamask.io/hc/article_attachments/9313845990683/How_to_import_an_account_from_private_key.gif)

You should be able to see the newly added account in the dropdown menu with an "Imported" tag next to the account.

![MetaMask extension imported wallet tag](https://support.metamask.io/hc/article_attachments/9313890833819/MetaMask_extension_iported_wallet_tag.png)

1. From your homepage, tap on the hamburger icon in the top left.
2. From here, tap on your account's name to bring up the account selector.
3. Hit 'Import an Account'.
4. On this screen, paste in the private key of the account you want to import, or scan a QR code if supported by the other wallet. Tap 'Import' to complete the process.

![How_to_import_an_account_from_private_key_mobile.gif](https://support.metamask.io/hc/article_attachments/9335360787995/How_to_import_an_account_from_private_key_mobile.gif)

## **Importing using a JSON file**

JSON (JavaScript Object Notation) is a file format commonly used to store and share data. For our purposes, it's used to encrypt the private key. 

You can use a JSON to import a wallet into MetaMask, but **only on Extension**. To do so, get the JSON file from your external wallet and follow the steps for Extension above until you get to the import page in step 3\. From there:

1. On the Import page, expand the dropdown from “**Select Type**”.
2. Select “**JSON File**”.
3. Click “**Choose File**” and locate the file from your computer.
4. Enter the password that protects your JSON file (**not** your MetaMask password).
5. Click “**Import**".

![How to import an account from json file](https://support.metamask.io/hc/article_attachments/9313931325467/How_to_import_an_account_from_json_file.gif)#What is a token contract address?#
If you've tried adding a new token to your wallet, one thing you will have noticed is the field asking for a **Token Contract Address**. This refers to the address location of the actual token contract that manages the logic for the tokens. **It does not refer to the address that holds your own personal tokens!**

The contract address is necessary for MetaMask to know exactly which token you're referring to. The address itself is the location of a smart contract which manages the balances of all token holders, amongst other things, such as the total supply and its basic features (name, decimals, etc.). For more information on token standards, see our [tokens user guide](https://support.metamask.io/hc/en-us/articles/4405497827355-User-Guide-Tokens#:~:text=Fungible%20token%20standards-,ERC%2D20%20Tokens,-As%20blockchain%20networks).

**To learn how to find a token's contract address, see our article [here](https://support.metamask.io/hc/en-us/articles/360059683451-How-to-find-a-token-contract-address).** 

See also: [How to display tokens in MetaMask](https://support.metamask.io/hc/en-us/articles/360015489031)#How to report a scam#
**If you believe you've fallen victim to a scam, the first thing you should do is follow the steps detailed in our [I've been hacked/scammed](https://support.metamask.io/hc/en-us/articles/360052511372) article.** 

In short, you need to **remove any remaining funds from your compromised wallet** (to a new or existing wallet that is secure) and make sure the scammer can't access any other sensitive personal or financial information on your device, whether related to MetaMask or not.

Once you've prevented any further loss of funds, you should:

1. [Get in touch with MetaMask Support](https://support.metamask.io/hc/en-us/articles/360058969391-How-to-contact-MetaMask-Support#:~:text=If%20you%20can%27t%20find%20an%20answer%20in%20these%20resources%2C%20click%20on%20the%20%27Start%20a%20Conversation%27%20button%20on%20https%3A//metamask.zendesk.com/hc/en%2Dus) to notify us of details such as:  
   * The suspected scammer's public address  
   * The website, email or other medium through which the scam reached you.  
#### Getting your email headers  
When you contact MetaMask Support about a fraudulent email, we'll ask you to provide the email headers.  
To find out how to do this, check out the video by clicking below. If you're not using Google Mail, please check your email client's customer support to establish the correct method, or see [here](https://mxtoolbox.com/public/content/emailheaders/) for instructions for many different clients.  
How to find email headers  
![Find_Email_Headers_Chrome.gif](https://support.metamask.io/hc/article_attachments/9502312721947)  
Alternatively, you can also report the fraudulent email directly to PhishFort. Just email phishing@phishfort.com with the email headers and any relevant details about the scam.
2. Report the scammer's public address on the block explorer, if possible. On Etherscan, for example, you can do this [here](https://info.etherscan.com/report-address/). If the block explorer concludes, after investigation, that the address shows signs of fraudulent activity, it will be flagged. This will help other network users to exercise caution in future.
3. Alert the local cybercrime authority. Although we can't maintain an exhaustive list, we've detailed a few below which will cover much of our user base:  
   * United States: the FBI's [IC3](https://www.ic3.gov/) service  
   * European Union: [Europol portal](https://www.europol.europa.eu/report-a-crime/report-cybercrime-online) (redirects to your chosen country)  
   * United Kingdom: [Action Fraud](https://www.actionfraud.police.uk/)  
   * Philippines: [CICC form](https://cicc.gov.ph/filing-a-complaint/submit-a-cyber-complaint/)  
   * Brazil: This varies depending on state. You will likely have to contact your [state's specialized cyber crime unit](https://new.safernet.org.br/content/delegacias-cibercrimes), potentially in person.  
   * Indonesia: [Directorate of Cyber Crime (Patroli Siber)](https://patrolisiber.id/)

Remember: as transactions on the blockchain are irreversible, **MetaMask cannot retrieve your funds for you**. Even if this were not the case, we wouldn't be able to anyway: as a [self-custodial wallet](https://support.metamask.io/hc/en-us/articles/360059952212), we do not have access to or control over your Secret Recovery Phrase — only you do. This means you're the only one who can manage the funds in your wallet. #Error "unable to load balance"#
This error message can be prompted because:

* You are using the wrong token address. Check [here](https://support.metamask.io/hc/en-us/articles/360059683451) for guidance on how to find it.
* MetaMask needs to be [updated to the latest version.](https://support.metamask.io/hc/en-us/articles/360060268452)

If these steps do not solve this issue, try reinstalling the app. Make sure you have everything backed up before proceeding: your Secret Recovery Phrase, private keys (for any imported accounts), and passwords.

**_Do not_** uninstall the app if you don't have your Secret Recovery Phrase backed up and safely recorded somewhere, otherwise you will permanently lose access to your wallet. Since MetaMask is a [self-custodial](https://support.metamask.io/hc/en-us/articles/360059952212) (non-custodial) wallet, we won't be able to help you regain access in such cases. After reinstalling, you'll need to [restore your wallet](https://support.metamask.io/hc/en-us/articles/360015289612) using your Secret Recovery Phrase.

For each old account that you had in your original installation, you must re-add it; see [here](https://support.metamask.io/hc/en-us/articles/360015489271) for details.

If the token you are looking for is not found using the Search method, then you will need to [add it as a Custom Token](https://support.metamask.io/hc/en-us/articles/360015489031).  #What are imported accounts? #
**Imported Accounts** are accounts you import using a private key string or a private key JSON file, and were not created with the same Secret Recovery Phrase as your wallet.

For this reason, these accounts will not appear automatically when you restore your MetaMask account with your Secret Recovery Phrase. The data associated with your MetaMask Secret Recovery Phrase cannot be added or extended to the imported account, and importing an account previously does not associate it in any way with the Secret Recovery Phrase associated with your wallet.

Therefore, it is important that you keep the information you use to access imported accounts separately and safe to ensure the recovery of these accounts in the future (similar to how you should keep your Secret Recovery Phrase backed up offline).

**Imported Accounts are shown on the MetaMask interface. You may see this tag by:**

Clicking on the icon at the upper right corner next to the network indicator tag to open the dropdown menu.

![What_are_imported_accounts.gif](https://support.metamask.io/hc/article_attachments/9335601602331/What_are_imported_accounts.gif)

For information on how to import accounts, see [here](https://support.metamask.io/hc/en-us/articles/360015489331).#Account Migration Guide#
This guide details the process of transferring the contents of all the accounts in your wallet to new accounts derived from a different Secret Recovery Phrase. You may be looking for instructions on how to perform "key migration", or you may have been told _your SRP has been compromised_. Maybe you have seen some unauthorized transactions in your accounts, or suspect someone has access to your wallet.

### Whatever the reason, this guide is for those who want to move all their crypto assets to new, safe, accounts.

If you're in a hurry, and need to get started now, follow the steps below.

There is a lot of background information that can help you understand what's going on. If you get confused during the process, or would rather understand before proceeding, read the in-depth information further down in this article. Hopefully our explanations clear things up.

## How to Migrate Your Cryptoassets to New Accounts

### Step 1

#### Ensure a Safe Environment

**In order to keep your new SRP safe, _you_ need to be in a safe situation.** 

This means:

* **You are not being physically observed**
* **Your system is free from malware or spyware**
* **You have a secure medium on which to record your new SRP**
* **You are not being directed to do this by a person you don't trust**
* **You are not doing this under duress**
* **Traffic on your Internet connection is not being monitored**  
   * **Hint: a VPN connection under such circumstances can be very helpful!**

### 

### Step 2

#### Generate a new Secret Recovery Phrase

This is easily done, in a matter of minutes, using MetaMask: you don't even need to change browsers.

1. Follow [the instructions here](https://support.metamask.io/hc/en-us/articles/12174759849371) to create a new browser profile
2. Navigate to <https://metamask.io/download/> (type in the address: don't click on a web search result)  
   1. Alternatively, find MetaMask in the Android (<https://play.google.com/store/apps/details?id=io.metamask>) or iOS (<https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202>) stores
3. Install the extension or application, and step through the process to create a new Secret Recovery Phrase
4. **Make note of that new Secret Recovery Phrase, and keep it somewhere safe**

### 

### Step 3

#### Get a safe address to send your tokens to

1. Follow [the instructions here to copy the public address](https://support.metamask.io/hc/en-us/articles/360015289512) of the default account generated by your new SRP.
2. Have that address at hand on the device that has the "source" SRP; it might help to open it in Etherscan, or you could hold it in a synced note, **because it's a public address--you should never, ever, ever put an SRP in a cloud-synced note app.**

**Note: You can generate as many accounts as you want in your new SRP, and divide up your tokens however you wish among them. Also, if you have [a hardware wallet](https://support.metamask.io/hc/en-us/articles/4408552261275-Hardware-Wallet-Hub) on hand, now would be a convenient time to transfer assets to an address generated by [an SRP that is only present on your hardware wallet](https://support.metamask.io/hc/en-us/articles/5450173968283).**

### Step 4

#### Transfer Your Stuff

This part of the process will vary depending on your specific situation. You may need to do some reading below.

The process is currently manual: you will be sending all of your assets to the new address(es), one transaction at a time. If you're unfamiliar with sending assets, [see here](https://support.metamask.io/hc/en-us/articles/360015488931).

**Note: We are currently in the process of getting up-to-date tooling to help automate this process. The tools listed in the section further down may or may not work for you, and are not endorsed or affiliated with MetaMask. When we have a better process in place, we will update this article.**

Your network gas tokens (ETH, MATIC, etc.) should be the LAST THING YOU TRANSFER. Otherwise, **you'll have no way to pay for the transfer fees** of your other assets.

1. Start with NFTs  
   1. NFTS are likely to be the most expensive to transfer, so start with these. Currently, you can [use MetaMask Mobile to transfer them](https://support.metamask.io/hc/en-us/articles/360058961911); also, you can use OpenSea's transfer function.  
         1. Keep in mind: **if your account has been compromised**, then adding more of the network's gas token to your account in order to transfer assets out of it may result in the new gas token balance being "swept out" before you can take any actions. If this is the case, [see here](https://blog.mycrypto.com/how-to-beat-an-ethereum-based-sweeper-and-recover-your-assets).
2. Move on to other ERC-20 tokens
3. Gas Tokens: First in, Last out. Depending on the contents of your accounts and the network you're on, you may use a significant amount of the network gas token--so don't send it away while you still need it!  
   1. Remember, **ETH isn't technically an ERC-20 token**, so automated ERC-20 sweeping tools may not automatically include balances of ETH.

**Note: If you transferred an ENS name to your new address**, and you use that ENS name to receive cryptoassets, **make sure you update the routing information in the ENS app** so that assets routed to that ETH name go to the new address, and not the old one!

### Step 5

#### Switch Networks and Repeat

Yup, you guessed it: we live in a multi-chain era, which means that if you've got assets on multiple chains, they have to be transferred on those chains.

1. Use the network switcher to change networks
2. Follow steps 1-3

### Help! I don't even know what stuff I have, and where it's at!

We totally understand. It's easy to end up with stakes in lots of protocols, all over the decentralized web.

Take a look at the section below, titled "What assets do I have?"; it will give you a good start.

### Step 6

#### Did You Remember Your Private Keys?

Many MetaMask users have [imported certain accounts](https://support.metamask.io/hc/en-us/articles/360015289932) from other SRPs into MetaMask. These accounts ARE NOT "backed up" by the SRP. They WILL NOT be restored by importing your SRP into another instance of MetaMask. You MUST ENSURE you have access to the SRP or other mechanism that produced them.

That said--if it was your SRP that was compromised, and not your system environment itself, then imported private keys _may_ be safe.

#### **If your SRP or wallet has been compromised, it is possible that you have had a _sweeper bot_ placed on your account. If this is the case, then as soon as you transfer tokens in, they may be transferred to the attacker's address. This can be a complex situation to remedy; for much more detailed information, [see here](https://blog.mycrypto.com/how-to-beat-an-ethereum-based-sweeper-and-recover-your-assets). See also the section below on Flashbots Whitehats.**

**If you do have a sweeper bot on your account, or think you may, keep an eye on the suspicious address using Blocknative's [mempool explorer](https://explorer.blocknative.com/?v=1.30.7&0=ethereum&1=main).**

## Background Information on SRPs and Account Migration

### Try to keep this mental model in mind:

#### **Wallet** \= the MetaMask software

#### **Secret Recovery Phrase** \= 12 or 24 words that, when imported into a wallet, produce the same accounts every time, as well as the private keys that control access to those accounts

#### **Account** \= Derived from an SRP; holds cryptoassets on a blockchain network

#### **Address** \= The public address (a long string of characters, generally beginning with 0x) of an account to which assets can be sent

To transfer assets from one account to another, you will need to pay some [gas fees](https://support.metamask.io/hc/en-us/articles/4404600179227-User-Guide-Gas), as these transactions are occurring on-chain. Depending on the amount you own in assets and the contracts storing or managing those assets, this can become costly. 

You can use [previous gas data](https://dune.xyz/409h/gas-information) to try to determine when is generally the best time to do these transactions so you are not overpaying, and you can broadcast the signed transactions with a lower gas price to see if they get included in a block sometime soon.

An important step you should take before you begin is to **write down your assets in priority order** so you are aware of what you are moving and can account for all variables (ie: token lockups, contract-backed taxes on transferring assets).

**Some of the assets you may need to transfer ownership of are:**

* ERC-20 tokens
* NFTs (ERC-721, ERC-1155)
* Liquidity provider positions
* Ownerships on smart contracts (i.e.: gnosis-safe)

As most assets on-chain make use of a standard interface for each type of asset (for the most part), it doesn’t need to be too complicated to move assets.

## What assets do I have?

Over time you can come into ownership of various assets under your address and you might lose track of which assets you have. Below are some tools you can use to get a list of assets you own.

### MetaMask

You can make use of the MetaMask interface to see which assets you have, especially if you’ve [imported custom tokens](https://support.metamask.io/hc/en-us/articles/360059683451-How-to-view-or-add-custom-token-contract-address).

You can see an expanded view of your account by clicking the three dots ("⋮") in the top right and choosing the “Expand view” option.

  
![MetaMask_Extension_expand_view.png](https://support.metamask.io/hc/article_attachments/13306685830939)  
  
From the new tab that will appear, you can select the “Assets” tab and see your assets in a larger view. From here, you can make a list of your priority assets to move.

### MetaMask Portfolio Dapp

If you want a more complete overview, the MetaMask-affiliated [Portfolio Dapp](https://portfolio.metamask.io/) will automatically detect and display most common assets. Check out its NFT tab, which shows a very complete listing of NFT-type tokens held by your accounts.

![NFT_tokens_in_your_MetaMask_wallet_1.gif](https://support.metamask.io/hc/article_attachments/13306723061147)

### Marketplaces

Various marketplaces such as [OpenSea](https://opensea.io) and [LooksRare](https://looksrare.org) index your NFT assets on your profile page. You can see your assets on these marketplaces and evaluate which NFTs are a priority. Also, if for some reason you can't transfer an NFT from within MetaMask, you can use the tools on these platforms.

### Indexers

You can make use of a blockchain indexer/block explorer to see your address and related transactions. 

* [Etherscan](https://etherscan.io/)
* [Ethplorer](https://ethplorer.io)

Keep in mind that in today's multi-chain world, you'll want to look at your address on multiple chains. Blockscan has a handy tool for this; paste the public address in question into t[he search bar here,](https://blockscan.com/) and you'll be provided with links to block explorers on all chains on which the account has been active.  
  
### Aggregators

There are many different aggregators that index the blockchain to build a database of what assets an address holds - including assets in lockup and liquidity positions. The MetaMask Portfolio Dapp, mentioned above, fulfils exactly this function (and more!). Some alternatives include:

* [MyCrypto](https://app.mycrypto.com)
* [Zapper.fi](https://zapper.fi/)
* [Zerion](https://zerion.io)

You'll notice, if you've gotten involved broadly in DeFi, that no one aggregator has _everything_. In order to be sure that you've "exited all your positions", it may help to visit several tools and see if there's anything you've missed.

### Contract Tools

Some tools are available to help you semi-automate the finding of what contracts you have created which could have the Ownable pattern (or another similar pattern) for you to transfer ownership, as well as tools to help to search known contract function signatures.

* [@msilb7/Get-Contracts-by-Creator-Address-Ethereum-Optimism](https://dune.xyz/msilb7/Get-Contracts-by-Creator-Address-Ethereum-Optimism)
* [Harry Denley’s MyContracts](https://harrydenley.com/tools/mycontracts) (Find contracts directly created by an address)
* [4byte.directory](https://www.4byte.directory/) (Contract function signature database)

## What tools can I use to move assets?

**Please note: These tools may not currently be functional. We are in the process of sourcing a tool that is up-to-date and functional. Additionally, we are providing you links to these tools as a point of reference, and this is in no way endorsement from MetaMask or ConsenSys**. Before using any of these tools, please familiarize yourself with their README files.

### 409H/eoa-migrator (<https://github.com/409H/eoa-migrator>) 

This tool offers an interface to help you step through the process of migrating funds and discovering different asset types on your address. It is strict in that for you to access the tool, you will need to [confirm ownership of the keys](https://github.com/409H/eoa-migrator#safe-address) you are transferring the assets to.

| **Criteria**                            | **Support**        |
| --------------------------------------- | ------------------ |
| Supports multiple EVM chains            | Y                  |
| Supports secret recovery phrase         | Y (if signer does) |
| Supports dry-runs/local environment     | N                  |
| Supports ERC20 tokens                   | Y                  |
| Supports ERC721 tokens                  | N                  |
| Supports ERC1115 tokens                 | N                  |
| Supports EIP1559 transactions           | Y (if signer does) |
| Supports resending dropped transactions | Y (if signer does) |
| Full stable release                     | N                  |
| Test suite on code                      | Y                  |

![409H_eoa-migrator_tool.png](https://support.metamask.io/hc/article_attachments/13306805419675)  
  
### svanas/migratooor (<https://github.com/svanas/migratooor>)

Written in Pascal, this tool offers a user interface to migrate funds from one address to another. It does provide compile instructions and offers you an executable to download in the releases.

| **Criteria**                            | **Support** |
| --------------------------------------- | ----------- |
| Supports multiple EVM chains            | Y           |
| Supports secret recovery phrase         | N           |
| Supports dry-runs/local environment     | N           |
| Supports ERC20 tokens                   | Y           |
| Supports ERC721 tokens                  | Y           |
| Supports ERC1115 tokens                 | Y           |
| Supports EIP1559 transactions           | N           |
| Supports resending dropped transactions | N           |
| Full stable release                     | N           |
| Test suite on code                      | N           |

![migratooor_tool.png](https://support.metamask.io/hc/article_attachments/13306805502363)

### Eth-sweep (<https://github.com/James-Sangalli/eth-sweep>) 

Written in JavaScript, eth-sweep allows you to sweep your tokens by transfer to a safe address, swap them for ETH, or migrate tokens to L2.

| **Criteria**                            | **Support**        |
| --------------------------------------- | ------------------ |
| Supports multiple EVM chains            | Y (if signer does) |
| Supports secret recovery phrase         | Y (if signer does) |
| Supports dry-runs/local environment     | N                  |
| Supports ERC20 tokens                   | Y                  |
| Supports ERC721 tokens                  | Y                  |
| Supports ERC1115 tokens                 | N                  |
| Supports EIP1559 transactions           | Y (if signer does) |
| Supports resending dropped transactions | Y (if signer does) |
| Full stable release                     | N                  |
| Test suite on code                      | Y                  |

![Eth-sweep_tool.png](https://support.metamask.io/hc/article_attachments/13306826575259)  
  
## Flashbots Whitehat (<http://whitehat.flashbots.net>) 

If you believe your address is compromised and bad actors are watching the txpool to frontrun any transactions you may make with these tools, you can [open a case with the Flashbots Whitehat team](http://whitehat.flashbots.net) to help you create transaction bundles to skip the txpool.

## Technical notes

We know that sweeping all of the assets from an account can be expensive, but Ethereum currently requires that all contract calls from an Externally Owned Account are individual transactions. To reduce these costs long term, we look forward to protocol changes like [EIP-3074](https://eips.ethereum.org/EIPS/eip-3074), which could allow batched transactions or even changing a controlling key with a single transaction. This could greatly reduce the cost of migrating to a new secret recovery phrase. You can get a sense of how much ether could be saved just by batching approvals on <https://www.approvals.wtf/> 

## Need help with any of this?

If you're looking to migrate your assets to a new account and need advice or assistance, we’re here to help. If you need help using one of the specific tools we’ve listed above, it is recommended that you reach out to the maintainers of that tool first, but you are still welcome to [contact ](https://support.metamask.io/hc/en-us/articles/360058969391)[MetaMask Support](https://support.metamask.io/hc/en-us/articles/360058969391).

As always, please keep your Secret Recovery Phrase safe. It is for your eyes and your eyes alone, and when you ask for help in various places there may be bad actors waiting to reach out to you and attempt to steal your funds.#Error "No chain ID defined"#
If you are using the Ethereum Mainnet, try toggling networks: switch from Ethereum mainnet to another network, and then back again.

Please make sure you are also on the latest version of MetaMask.

If you manually added the network to MetaMask, head to Settings > Networks and make sure the chain ID associated with the network is the correct one. To find a chain ID, you could head to [Chainlist](https://support.metamask.io/hc/en-us/articles/360058992772), which maintains a catalogue of EVM-compatible networks and their details, or search for the relevant documentation of the network itself. #How to remove a token#
Extension Mobile 

To remove a token, click on the token under the 'Assets' tab on your homepage. You will then see a 3 vertical dots icon in the top right. Tap on it, and it will bring up a dropdown with a 'Hide' option:

![Hide_token_extension.gif](https://support.metamask.io/hc/article_attachments/10108068667291)

To remove tokens from your asset list in MetaMask Mobile, simply hold your finger on the asset you want to remove and it will bring up the option to remove or cancel:

![Hide_token_mobile.png](https://support.metamask.io/hc/article_attachments/10108067828763)

**Please note that this action does not affect the balance of tokens held.** It is simply removing the listing from displaying in your wallet; so if you did have a balance of DAI, for example, and removed the listing on the MetaMask interface, it would not remove the tokens from your address on the blockchain.

Also, **hiding the token will not affect token allowances** — i.e. permissions you've granted dapps to move tokens to/from your wallet. See [here](https://support.metamask.io/hc/en-us/articles/4446106184731-How-to-revoke-smart-contract-allowances-token-approvals) for how to do this.#How to add a custom network RPC#
#### Contents:

* [Adding via Chainlist](#h%5F01G63FNEWV5JGZ6XR0B3P0EAT2)
* [Adding popular networks quickly](#h%5F01G63GGCJH5GCYDYPH5RNWNZQ8)
* [Adding networks manually](#h%5F01G63GGJ83DGDRCS2ZWXM37CV5)

MetaMask can access many more networks than just Ethereum mainnet: you can add any EVM-compatible network. The initialism RPC stands for remote procedure call, a set of protocols that allow a client (such as MetaMask) to interact with a blockchain. Without introducing a significant technical tangent, adding network details using the process below allows MetaMask to use an RPC that enables you to interact with that network.

#### Adding via Chainlist

For an easy way of adding networks to MetaMask, go to [chainlist.wtf](https://chainlist.wtf/), where you can connect MetaMask and add networks with only a few clicks. See our [guide](https://support.metamask.io/hc/en-us/articles/360058992772) for more information. 

Also, please note that **adding a network on one device does not mean it will appear on another device** when accessing the same account. If you add it on Extension, it will not automatically be added to your MetaMask Mobile app, and vice versa.

Custom networks will also need to re-added if you uninstall the browser extension or mobile app (after which you'd need to [restore your wallet](https://support.metamask.io/hc/en-us/articles/360015289612) using your Secret Recovery Phrase).

#### Why am I seeing a question mark icon next to the network name after I add it?

When you add a custom network to MetaMask — i.e. any network other than Ethereum mainnet — you'll see a question mark icon next to it in the network selector. It looks like this:

![question_mark.png](https://support.metamask.io/hc/article_attachments/11332018723099)

Don't be concerned! This doesn't mean it's not legitimate or not safe to use. It is intended behaviour and is how any network you add will appear in MetaMask.

## Adding popular networks

On both Mobile and Extension, you can easily add several prominent networks with just a tap. These include:

* [BNB Chain/BSC](https://support.metamask.io/hc/en-us/articles/4415758120219)
* [Polygon](https://support.metamask.io/hc/en-us/articles/4415758346267)
* [Avalanche](https://support.metamask.io/hc/en-us/articles/4415758179355)
* [Arbitrum](https://support.metamask.io/hc/en-us/articles/4415758358299)
* [Optimism](https://support.metamask.io/hc/en-us/articles/4415758352667)
* [Palm](https://support.metamask.io/hc/en-us/articles/4415771874971)
* [Fantom](https://support.metamask.io/hc/en-us/articles/4415758161435)
* [Harmony](https://support.metamask.io/hc/en-us/articles/4415758143387)
* [Aurora](https://support.metamask.io/hc/en-us/articles/6945467429019)
* [Celo](https://celo.org/).

You can find this menu using the following steps:

Extension Mobile 

From the homepage of your wallet, click on the network selector at the top of the screen, and then on 'Add network':

![add_network.png](https://support.metamask.io/hc/article_attachments/10080831633947)

From here, you should see a list of popular networks ready to add (unless you've added the network already). Tap 'Add' to start the process, and follow the prompts.

![popular_networkis.png](https://support.metamask.io/hc/article_attachments/10080831641115)

1. Tap the hamburger icon in the top-left of the screen.
2. Go to 'Settings', and then to 'Networks'.
3. Here you'll see a list of networks that you've already added. Tap the 'Add Network' button at the bottom of the screen.  
![settings___network.PNG](https://support.metamask.io/hc/article_attachments/7259190047387/settings___network.PNG)
4. You should now see a list of networks you can add under the 'Popular' tab, as shown below.  
![select_a_network.jpg](https://support.metamask.io/hc/article_attachments/7259225807771/select_a_network.jpg)
5. When you choose to add one of them, you'll be prompted to confirm:  
![add_network_.PNG](https://support.metamask.io/hc/article_attachments/7259201715227/add_network_.PNG)  
And then you'll get the option to switch immediately to that network. All done!  
![switch_to_network.jpg](https://support.metamask.io/hc/article_attachments/7259203865627/switch_to_network.jpg)

## Adding a network manually

The following are instructions for establishing these connections manually:

Extension Mobile 

1. Click on the **network selector button**. This will display a list of networks to which you're already connected**:**  
![networks_button.png](https://support.metamask.io/hc/article_attachments/6944067839387/networks_button.png)
2. Click 'Add network':  
![add_network.png](https://support.metamask.io/hc/article_attachments/6944123860635/add_network.png)
3. A new browser tab will open, displaying various fields to fill out**:**  
![Screenshot_2022-02-10_at_10.08.31.png](https://support.metamask.io/hc/article_attachments/4418639495451/Screenshot_2022-02-10_at_10.08.31.png)  
Complete the fields and click save to add the network.  
The details for the above fields can be found in our [network profiles](https://support.metamask.io/hc/en-us/articles/4415750833691) or, alternatively, docs (i.e. developer documentation) or how-to guides for each network. For example:  
   * [Binance Smart Chain (BSC)](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain#:~:text=Mainnet%20%28This%20is,https%3A//bscscan.com)  
   * [Polygon](https://wiki.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/)  
   * [Avalanche](https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche).  
After performing the above steps, you will be able to see the custom network the next time you access the network selector.

1. Tap on the hamburger icon in the top-left:  
![IMG_C8C734D64DE3-1.jpeg](https://support.metamask.io/hc/article_attachments/360083350571/IMG_C8C734D64DE3-1.jpeg)
2. Select **Settings:**  
![IMG_129413D61F95-1.jpeg](https://support.metamask.io/hc/article_attachments/360083350591/IMG_129413D61F95-1.jpeg)
3. Select **Networks:**  
![IMG_62D0A5FE63AE-1.jpeg](https://support.metamask.io/hc/article_attachments/360083317312/IMG_62D0A5FE63AE-1.jpeg)
4. Tap on '**Add Network**':  
![IMG_65A194E3EC35-1.jpeg](https://support.metamask.io/hc/article_attachments/360083350611/IMG_65A194E3EC35-1.jpeg)
5. Fill in the **Custom RPC Network** details:  
![IMG_E8F132CD40A6-1.jpeg](https://support.metamask.io/hc/article_attachments/360083317412/IMG_E8F132CD40A6-1.jpeg)  
The details for the above fields can be found in our [network profiles](https://support.metamask.io/hc/en-us/articles/4415750833691) or, alternatively, docs (i.e. developer documentation) or how-to guides for each network. For example:  
   * [Binance Smart Chain (BSC)](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain#:~:text=Mainnet%20%28This%20is,https%3A//bscscan.com)  
   * [Polygon](https://docs.polygon.technology/docs/develop/network-details/network/)  
   * [Avalanche](https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche).  
After performing the above steps, you will be able to see the custom network in the networks selector.#Why am I being warned about sending tokens to a contract?#
MetaMask tries to make sending and receiving ERC-20 tokens simple & safe.

When sending tokens, you should always double-check that you're sending to the proper address, controlled by either another user, an account you own, or a dapp with which you're interacting. 

**MetaMask will warn you when sending tokens to the address of a token contract.** Many users accidentally "burn" (**lose forever**) their tokens by sending to the address of the token contract, so if you're sending to a token contract, we want to make sure you're doing it intentionally. 

If you're seeing a warning that looks like this on your send screen, we've detected that the recipient address you've entered is the address of a token contract: 

![Known_contact_address_warning_MetaMask.png](https://support.metamask.io/hc/article_attachments/10057363978395)

ERC-20 tokens are controlled by a smart contract that tracks the balance of the token. For example, the GNO token is tracked by a contract at address _0x6810e776880c02933d47db1b9fc05908e5386b96_. If you visit that address on [Etherscan](https://etherscan.io/address/0x6810e776880c02933d47db1b9fc05908e5386b96), you'll see plenty of calls to the contract.

Most of them are function calls that originate from a token holder (like you!), and supply a destination address and token amount. This tells the GNO contract to transfer a certain amount of tokens from the sender's balance to the recipient's balance. 

Unlike your ETH balance, which is tracked in actual blocks on the Ethereum blockchain, token balances are tracked on a contract that runs on the blockchain — basically a mini-ledger of which address owns how many tokens. 

When you send tokens through MetaMask, we already know which token contract should receive the transaction. The 'to' field is specifically for the address of the **recipient** — who you want to receive the tokens. When you click "Send," you're submitting a transaction to the appropriate token contract, telling it to transfer the specified number of tokens from your balance to the recipient's balance. **If the recipient is the token contract itself, those tokens may be lost forever!**#How to download state logs#
## Getting MetaMask Logs

To help us deliver better support, we might ask you to provide your MetaMask state logs to further analyze the issues you face. These logs tell us:

* Your account addresses
* Your sent transaction history
* Your internal UI State

They don’t reveal:

* Your Private Keys
* Your Secret Recovery Phrase

Despite this, **DO NOT POST YOUR LOGS PUBLICLY.**

There are four types of logs that we might ask you to provide:

State logs Chrome popup logs Chrome background logs Chrome crash logs 

**Extension**

If you've had an issue sending transactions or found a visual glitch in the rendering of MetaMask, we might ask you for a state log. To get them:

1. Open MetaMask and ensure it's unlocked
2. Click on your Account icon on the top right corner
3. Click on **Settings** and then select **Advanced**
4. Click on **Download State Logs**
5. Attach the file in your response on a support ticket

![How to download state logs](https://support.metamask.io/hc/article_attachments/9025714505115/How_to_download_state_logs.gif)

**Mobile**

1. In the MetaMask app, tap the Menu icon on the top left of the app
2. Tap on **Settings** (gear icon)
3. Select **Advanced**
4. Scroll down and tap on "**Download State Logs**"
5. Attach the file in your response on a support ticket

![How to download state logs mobile](https://support.metamask.io/hc/article_attachments/9025721591067/How_to_download_state_logs_mobile.gif)

To get logs from the popup:

1. Click the MetaMask fox in the top right of your browser.
2. Wait for the popup to open (or partially open if that's part of the bug).

![Chrome popup logs MetaMask](https://support.metamask.io/hc/article_attachments/9501232783387)

1. Right-click in the newly opened popup, and select **Inspect**.
2. Click **Console** at the top of the Inspector window.

![Chrome popup logs MetaMask](https://support.metamask.io/hc/article_attachments/9501232776603)

1. Look for any strange logs, especially red errors!
2. Share a screenshot with us.

To get logs from MetaMask's background process in Chrome:

1. Right-click the MetaMask fox in the top right of your browser.
2. Select **Manage Extensions**.

![Chrome background logs](https://support.metamask.io/hc/article_attachments/9501535348123)

1. Ensure "Developer Mode" is selected in the top right.
2. Scroll down to MetaMask, and click the "**Inspect views: background page**" link.

![Chrome background logs MetaMask](https://support.metamask.io/hc/article_attachments/9501580906779)

1. Click Console at the top of the Inspector window.
2. Look for any strange logs, especially red errors!

![Chrome background logs MetaMask](https://support.metamask.io/hc/article_attachments/9501232776603)

If you are using Windows OS, usually you could see the state logs in your **Downloads** folder.

![Chrome_background_logs3.1.png](https://support.metamask.io/hc/article_attachments/9502222681627)

If your bug involves crashing the whole browser, then having a browser console won't be much good! (It will be crashed).

In these cases, you'll need to start your browser in a way that it writes its logs to the disk, so you can open that log file after the browser crashes.

[This process is described here](https://www.chromium.org/for-testers/enable-logging), and we hope to write more specific steps on this in the future. If you have to go through this process, please do record the steps, so we can have more detailed instructions here for different platforms.#Is MetaMask owned by JP Morgan?#
The crypto community is growing all over the world. We believe that if we want to accelerate global adoption and if this technology is to become mainstream, we need to also engage with traditional financial actors and educate them on how this would revolutionize everything we know — without compromising on the fundamentals of our beliefs such as decentralization and a more inclusive world.

In line with this philosophy, did we raise funds from JP Morgan in 2021? Yes. Do they influence our decision making? Absolutely not. Nor did JP Morgan participate in our most recent Series D round. Moreover, their shares have been diluted and they own less than 10% of ConsenSys. Any of our competitors claiming that JP Morgan “owns us” are absolutely wrong, and we invite them to fact-check before confusing the community with inaccurate information.

Our latest fundraising round includes ParaFi Capital, Temasek, SoftBank Vision Fund 2, Microsoft, Anthos Capital, Sound Ventures, C Ventures, Series C investors, Third Point, Marshall Wace, True Capital Management, UTA VC, and United Talent Agency’s venture fund.

ConsenSys employees are also key drivers of our growth. Any employee at ConsenSys receives equity and is part of this project.#How to add a token logo#
**This article is intended for token developers; if you simply want to see tokens in your wallet that you think you own but aren't appearing, consult [this article](https://support.metamask.io/hc/en-us/articles/360015489031).**

The token search box and the auto-detect functions are a part of a centralized solution. We encourage developers to use the EIP-747 method, which you can find in MetaMask's technical documentation:[ https://docs.metamask.io/guide/registering-your-token.html#registering-tokens-with-users ](https://docs.metamask.io/guide/registering-your-token.html#registering-tokens-with-users)

In the above link, you can find instructions on how to integrate the _wallet\_watchAsset_ API as defined in EIP-747 without having to create code, and also a more advanced code example that includes the option to set a logo or icon for your token. This will let your users add your token to their MetaMask wallet, and see it, easily.#Add a network using Chainlist#
If you want to add networks to MetaMask, accessing Chainlist is one of the easiest ways to do it.

Extension Mobile 

1. Head to the Chainlist site at [chainlist.wtf](https://chainlist.wtf/).
2. Firstly, you'll need to connect your wallet to the site. Select 'Connect wallet' in the top right to do so.  
![Connect to chainlist](https://support.metamask.io/hc/article_attachments/13282472358683)  
When successful, the address of our selected account will replace the 'Connect wallet' button:  
![Connect to chainlist](https://support.metamask.io/hc/article_attachments/13282471834779)
3. Now use the search bar to find the network you want to connect to. Once you've found it, click the button 'Add Chain'.  
![Connect to chainlist.png](https://support.metamask.io/hc/article_attachments/13282429575451)
4. MetaMask itself will now spring into action, and will present you with an approval menu. Click 'Approve' to proceed.  
![Connect to chainlist.png](https://support.metamask.io/hc/article_attachments/13282471751451)
5. This will be followed by a menu asking you whether you want to switch to the new network immediately. Confirm or reject this depending on your needs; either way, the new network will be added.

1. Head to the [Chainlist site](https://chainlist.wtf/) using the [MetaMask in-app browser](https://support.metamask.io/hc/en-us/articles/6356387482523).  
![MetaMask open mobile browser](https://support.metamask.io/hc/article_attachments/13282653218075)  
When you're in the browser, you can either tap the address in the menu bar at the top and navigate to <https://chainlist.wtf/> or hit the magnifying glass in the toolbar at the bottom and search from there.
2. On Chainlist, you now need to connect your wallet. Your currently selected account will be the one that's automatically connected, though you can easily swap by tapping the account icon in the top right and then selecting 'Connect wallet' again.  
![Connect to chainlist](https://support.metamask.io/hc/article_attachments/13283060389275)  
When your wallet is connected, the selected account address will be displayed where the 'Connect wallet' button was.
3. Next, find the network you want to connect to by searching. When you find the network, hit 'Add Chain':  
![Connect to chainlist](https://support.metamask.io/hc/article_attachments/13282429575451)
4. Now you'll just need to approve the addition of the network.  
There will then be a subsequent option to confirm that you want to immediately switch to the new network. This step is optional, and you can easily change networks at any time regardless.

![Connect_to_chainlist_mobile_2.png](https://support.metamask.io/hc/article_attachments/13283299094555)

For details on how to add custom networks by inputting their details manually, see our [article](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC) on the topic. 

**Please note we do not maintain the network information on Chainlist. M** **ake sure the network details are accurate before adding them.**#Unlock error: "invalid password"#
Depending on your browser performance, there might be a little lag when writing the MetaMask password characters and you might get the error: "invalid password".

Before contacting MetaMask Support, please try the following:

1. Type your password slowly, one character at a time, making sure that the key you press is reflected in the password characters. Then pause for a second when complete, and try submitting.
2. If that doesn't work, try to write your password into a .txt file, and then copy and paste it into the MetaMask login prompt.#Why did my transaction fail with an "Out of Gas" error? How can I fix it?#
If you are curious to learn more about gas and what it signifies in Ethereum, we recommend reading[ our guide on gas](https://support.metamask.io/hc/en-us/articles/4404600179227) or the [ethereum.org guide](https://ethereum.org/en/developers/docs/gas/) if a little more comfortable already.

A common problem that you may see or have seen is transactions failing with an **"out of gas"** error like in the screenshot below.

![out of gas error](https://support.metamask.io/hc/article_attachments/12804824256539)

This means that all the gas units up to the limit you set were used up before the transaction could be fully processed. 

To avoid another "out of gas" error, you will need to increase the gas limit of your next transaction. This can be done just before sending your next transaction, once you have [enabled Advanced Gas Controls](https://support.metamask.io/hc/en-us/articles/360022895972). 

### Advice from the MetaMask team

The vast majority of the time, the gas limit that MetaMask automatically sets for your transaction will be sufficient.

Selecting a gas limit is mostly a personal preference, but it may be helpful to review recent successful transactions of the executing smart contract to understand what is a sufficient gas limit for your transaction.

Recommended steps:

1. While reviewing your transaction with the "out of gas" error on Etherscan, click the link to the Contract address in the "To:" section directly above the out of gas error
2. Scroll down to the list of Transactions andclick on the Txn Hash of any completed transaction (non-pending)
3. Ensure that the transaction shows Status as **Success**. If not, go back and choose another transaction.
4. Click on **Click to show more**
5. Make a note of the **Gas Limit** that was chosen for the transaction
6. _Optional:_ repeat steps 1-4 to better estimate a gas limit that will be sufficient for your transaction
7. Once you have a good idea of a value for your gas limit, make sure to [adjust the gas limit](https://support.metamask.io/hc/en-us/articles/360022895972) when sending out your next transaction.

### Example

In the example below, notice that the transaction with "Status: Fail" used up 100% of the gas:

![out of gas error](https://support.metamask.io/hc/article_attachments/12804797795739)

After reviewing a different transaction for the same smart contract, we discovered that the gas limit of this transaction was set to 32,484 which was enough to complete the transaction. Notice that even though a higher gas limit was used, only around 67% of it was used to complete the transaction:

![out of gas error](https://support.metamask.io/hc/article_attachments/12804798007963)

While you are not required to use the same gas limit as the first successful transaction that you find, you can explore more transactions to generate an idea of what is a sufficient gas limit to ensure that your next transaction is successful. 

## Cause

The "out of gas" error occurs when all the gas you allotted for the transaction is consumed before the transaction could complete. During the transaction mining process, a portion of the gas is consumed for each operation executed on the Ethereum Virtual Machine (EVM) until the transaction is completed or until the amount of gas consumed reaches the **gas limit.**

The gas limit is the maximum amount of gas you are willing to consume. You can relate the gas limit to putting out a fire with water from a hydrant. If you do not have a large enough water supply, you may run out of water before you can extinguish the fire. As such, you will want to ensure that you include a gas limit high enough to complete your transaction.#Exporting a MetaMask Account#
# This article is out-of-date and is only being retained for documentation purposes. Please consult the current version of this information [here](https://support.metamask.io/hc/en-us/articles/360015289632).

Warning: Exporting your account is a risky process that displays your key in clear text and makes you more susceptible to loss of funds. Many phishing campaigns ask you to send this information to them, thus giving them full access to your accounts. You should never give anyone this information, and MetaMask will never ask you for this during troubleshooting and support.

If you want to manage one of your MetaMask accounts from another Ethereum client, MetaMask tries to make this as easy as possible.

First of all, your 12-word seed phrase is compatible with most other Ethereum wallets, and you should be able to import it into another wallet fairly easily.

Secondly, if you only want to export a single account to another wallet, you can click the "Export Private Key" option on the Account Detail view. Currently, that's the key icon:

![Export key icon](https://hf-files-oregon.s3.amazonaws.com/hdpconsensyssupport_kb_attachments/2017/11-28/a430760c-c7ae-4a29-9a8d-3c4c503eac9f/Screen%20Shot%202017-11-28%20at%201.22.56%20PM.png "Export key icon")

It should also be easy to import a private key into most other wallets. Let us know if you have any issues!#Can I use MetaMask in my country?#
By essence, anyone in any country in the world can use MetaMask.

MetaMask is a self-hosted wallet that interacts with Ethereum and other blockchains through nodes, the most popular of which are run as a service by [Infura](https://support.metamask.io/hc/en-us/articles/4417315392795). As a matter of convenience, MetaMask uses Infura nodes by default to read and transact on the Ethereum blockchain. MetaMask is distributed for free and designed to be customized, so a user can decide to use Ethereum nodes other than those operated by Infura, or nodes relating to entirely different blockchains such as Binance Smart Chain and the Polygon network. It is entirely up to the MetaMask user. 

Infura and all other US-based blockchain service providers are required to implement US sanctions. Infura closely monitors changes to US sanctions programs announced by the Office of Foreign Assets Control and narrowly tailors its internal controls to comply with the law. Currently, those regions are Iran, North Korea, Cuba, Syria, and the Crimea, Donetsk, and Luhansk regions of Ukraine. #How to remove an account from your MetaMask wallet#
### **You can only remove imported accounts** and external accounts that you imported with private keys or JSON (such as a hardware wallet).

Accounts that you've added using the 'Create Account' button in MetaMask cannot be removed. See [below](#h%5F01G04RAQEGEFCA0Z74S4PANNDV) for more information and a potential workaround.

Extension Mobile 

Navigate to **My Accounts** by clicking on the top-right account identicon. Here you will see any accounts you've imported; they usually have a label next to the name.

![MetaMask_extension_iported_wallet_tag.png](https://support.metamask.io/hc/article_attachments/9336162513435/MetaMask_extension_iported_wallet_tag.png)

Click or tap on the imported account, and the account view will open. Tap or click on the 3 vertical dots menu on the right. This will bring out the dropdown, including the option to **Remove account**: 

![how_to_remove_an_account_from_your_metamask_wallet.gif](https://support.metamask.io/hc/article_attachments/9336581400603/how_to_remove_an_account_from_your_metamask_wallet.gif)

1. Tap on your account name to bring up the account selector screen. It doesn't matter which account you currently have selected.  
On this screen, scroll until you find the imported account you want to remove. They should be easily identifiable through the 'Imported' label next to them.
2. Long press on the account to bring up the option to remove it. It'll immediately disappear from your MetaMask when you confirm.  
![how_to_remove_an_account_from_your_metamask_wallet_mobile.gif](https://support.metamask.io/hc/article_attachments/9345455292059)

#### How do I remove created accounts?

It is currently impossible to remove [**created**](https://support.metamask.io/hc/en-us/articles/360015289452) accounts — the ones that appear as 'Account 2' etc. when you click 'Create Account'. If you really want to remove them, you will need to remove MetaMask from your device (Extension or Mobile), reinstall, and then [restore using your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360015289612). However, **DO NOT do this if you don't have your Secret Recovery Phrase**. Without it, you won't be able to get access to your wallet when you reinstall. If you do this, bear in mind:

* This will not _delete_ the account, but just stop it being visible in MetaMask: once created, your address is permanently on the blockchain and [cannot be removed](https://support.metamask.io/hc/en-us/articles/360042515731-How-can-I-delete-my-MetaMask-wallet-#:~:text=Due%20to%20the%20nature%20of%20the%20blockchain%2C%20users%20cannot%20permanently%20delete%20an%20account%20on%20the%20Ethereum%20network.%20If%20you%20no%20longer%20want%20to%20use%20MetaMask%2C%20simply%20uninstall.%C2%A0).
* When you restore using your Secret Recovery Phrase, MetaMask will automatically re-add previously created accounts if they hold ETH. See [here](https://support.metamask.io/hc/en-us/articles/360015289612-How-to-restore-your-MetaMask-wallet-from-Secret-Recovery-Phrase#:~:text=What%20about%20restoring,this%20guide.) for more information.
* Any imported accounts and/or hardware wallets will be removed at the same time. Make sure you have their private key/seed phrases (or Secret Recovery Phrase if another MetaMask account) backed up, or you won't be able to access them again.#Verifying custom network information#
When a website requests that you add a custom network to MetaMask, you are presented with the information MetaMask will use to interact with the network. MetaMask performs some basic validation of this information, and will warn you if anything seems wrong or unusual. MetaMask will also prevent the same network from being added more than once. However, **MetaMask does not verify custom networks**, and even if MetaMask’s validation checks out, the network could be malicious or misrepresented by the website that requested it.

**For more information and an introduction to custom networks, see our User Guide [here](https://support.metamask.io/hc/en-us/articles/4404424659995).**

Just like it’s your responsibility to verify the Ethereum addresses you transact with, it is also your responsibility to verify any custom networks you add to MetaMask. In this article, we will share some advice about how to do that.

When a website makes a request to add a custom network, MetaMask displays the following confirmation:

![custom-network.png](https://support.metamask.io/hc/article_attachments/360087917091/custom-network.png)

This confirmation shows **the network information that the website provided**. _There is no guarantee that this information is correct_. Therefore, you should trust the information to the same degree that you trust the website.

If you click “View all details” in the confirmation, you can see all of the network information provided by the website, which includes:

* **Network Name**: The name that MetaMask will associate with the network.
* **Network URL:** The URL that MetaMask will use to access the network.
* **Chain ID:** The chain ID that MetaMask will use to sign transactions for the network.
* **Currency Symbol:** The currency symbol that MetaMask will use for the network’s native currency.  
   * For example, for the Ethereum Mainnet, the currency symbol is ETH, and for the Gnosis Chain, the symbol is xDAI (retained following their merger).
* **Block Explorer URL (optional):** The URL that MetaMask will direct you to in order to inspect your accounts, transactions etc. The equivalent of [etherscan.io](https://etherscan.io), but for the network in question.

If you are for any reason unsure about the correctness of the network information, we recommend that you take the following steps to verify it:

* Visit [Chainlist ](https://chainlist.wtf/)and search for the provided chain ID and/or name of the network. If MetaMask is saying that some information isn’t matching, you should be able to identify the problem on Chainlist. If the custom network is not listed at all on Chainlist, it is either extremely new, or possibly of questionable quality.
* Google the name of the network, and try to answer the following questions. The more you can answer with “yes”, the more reason you have to believe that the network is legitimate. Be advised that there are many scams and fake social media channels, especially on Telegram.
   * Does the network have a website? If so, does it seem legitimate? Does it list the network details?
   * Does the network have an official Twitter or other social media account? Do they have a lot of followers? Do they seem reputable? What are people saying about the network?
   * Can you identify any of the people who maintain the network? Are they visible on social media? Do they have a lot of followers?
   * Are there any news articles about the network?

For most networks, it should be pretty obvious whether they are legitimate or not, and whether the website is providing accurate information or not. If you’re still unsure after completing these steps, you should reject the request to add the network, do more research, and perhaps try again later.#How to revoke smart contract allowances/token approvals#
_Note: smart contract allowances are different from simply connecting your wallet to a dapp. For information on disconnecting your wallet from dapps, see [here](https://support.metamask.io/hc/en-us/articles/360059535551)._ 

Smart contract/token allowances, also referred to as approvals, involve you **allowing dapps to access and move tokens in your wallet on your behalf**. When you use a DEX (decentralized exchange), for example, you'll need to sign an approval that allows its smart contract to take tokens to complete your requested trades. Whilst this sounds inherently risky, bear in mind that giving dapps at least _some_ allowance is always necessary. If you want to use Web3, you won't be able to avoid them. 

#### Revoking approvals vs. disconnecting apps: what's the difference?

It's easy to confuse these two processes, but they are fundamentally different:

* **Disconnecting your wallet** from a dapp involves cancelling permission for it to see your public address and your token balances, and, depending on what you originally consented to, stopping it from initiating transactions (although _not_ executing them) and viewing past activity. See our [article](https://support.metamask.io/hc/en-us/articles/360059535551) for more info.
* **Revoking an approval/allowance** means a dapp can no longer access the contents of your wallet and move them around.

See also: our [Twitter thread](https://twitter.com/MetaMask/status/1499848000549515265) covering the distinction between these two actions, and our [article on token approvals](https://support.metamask.io/hc/en-us/articles/6174898326683). 

## **How do I revoke approvals?**

The good news is there are several ways to keep track of your existing approvals and easily revoke them:

* **Head to the 'approval checker' section of the block explorer** for the network you're using. For example, [Etherscan](https://etherscan.io/tokenapprovalchecker), [BscScan](https://bscscan.com/tokenapprovalchecker) and [Polygonscan](https://polygonscan.com/tokenapprovalchecker) all have a token approval checker function.
* Use a platform such as:  
   * [Revoke](https://revoke.cash/) (Ethereum mainnet)  
   * [Unrekt](https://app.unrekt.net/) (multiple networks)  
   * [approved.zone](https://approved.zone/) (Ethereum mainnet)  
   * [Cointool](https://cointool.app/approve/eth) (multiple networks)  
   * [beefy.finance](https://allowance.beefy.finance/) (BSC/BNB Smart Chain)  
   * [EverRevoke](https://everrise.com/everrevoke/) (multiple networks).

#### Gas fees

Since token approvals are conducted on-chain, revoking the approval must also be on-chain. This means you need to pay gas fees for each revocation. 

Look, we know how it is: there's always a new dapp to try. The only problem is that this can quickly rack up a long list of token allowances, potentially making you vulnerable to hackers or scams. This is why it's a good idea to **develop a habit of regularly checking your token approvals**—e.g. monthly—and weeding out any you're unhappy with.

Unfortunately, token approvals are a common attack vector for both hackers and scammers: the former can sometimes locate and exploit vulnerabilities in a smart contract's code ([this happened to Wormhole](https://rekt.news/wormhole-rekt/), an Ethereum <-> Solana bridge, for example) and the latter can occur through rugpulls.

This is because token approvals often request **unlimited access** to your tokens. If a hacker or fraudulent smart contract owner is able to leverage this, they can theoretically drain your wallet of the tokens you've allowed access to. To this end, [MetaMask allows you to customize token permissions](https://support.metamask.io/hc/en-us/articles/6055177143579). 

For a more in-depth look at token approvals and dapp permissions, check out [our blog post](https://consensys.net/blog/metamask/the-seal-of-approval-know-what-youre-consenting-to-with-permissions-and-approvals-in-metamask/), or [this article](https://kalis.me/unlimited-erc20-allowances/) from the creator of the Revoke app mentioned above.#How to fix "insufficient funds" error or greyed-out confirm button#
## Why I am getting an "insufficient funds" error?

This means you do not have enough of the network's native token to cover gas fees. Generally, across [EVM-compatible networks](https://support.metamask.io/hc/en-us/articles/4415750833691-Network-profiles-hub#:~:text=EVM%2Dcompatible%20blockchains,and%20NFT%20platforms.%C2%A0), each transaction (including token and contract transactions) requires gas, the price of which is changeable. You can think of this as a transaction fee. For more on gas, see [here](https://support.metamask.io/hc/en-us/articles/4404600179227).

Examples of native tokens include:

* Ether (Ethereum mainnet and testnets, plus layer 2 networks such as Arbitrum or Optimism)
* BNB (for BNB Chain, formerly BSC)
* MATIC (Polygon)
* AVAX (Avalanche).

If you have questions relating to a specific network, please read our best practices article on sidechains and custom networks [here](https://support.metamask.io/hc/en-us/articles/4404424659995), or check our [Network Profiles page](https://support.metamask.io/hc/en-us/articles/4415750833691) for the network in question to see if we've discussed the issue there.

## How can I fix it?

You can remedy this by sending some of the necessary native token to that account in order to be able to make the transaction.

If you need to buy some tokens to get a sufficient amount, you can either purchase crypto directly (using what's known as an on-ramp), buy from an exchange, or trade other tokens on a decentralized exchange (DEX).

You can buy native tokens and stablecoins on several networks directly within MetaMask — check [here](https://support.metamask.io/hc/en-us/articles/360058239311) to see how. 

## Why is my "Confirm" button greyed out?

On the confirmation screen, you might see the confirm button is greyed out. This will be because you have an insufficient amount of the native token necessary to pay for the transaction. See above.#How can I delete my MetaMask wallet?#
Due to the nature of the blockchain, **users cannot permanently delete an account on the Ethereum network.** If you no longer want to use MetaMask, simply uninstall. 

As we don't store any user data whatsoever, there is no account to delete; your ETH addresses are permanent on the blockchain and can simply be forgotten or abandoned if you like.

Extension Mobile 

If you'd like to remove MetaMask from your browser, just right-click the browser extension icon and click "Remove from Chrome" (this process will be similar for all web browsers).

![How can I delete my MetaMask Wallet](https://support.metamask.io/hc/article_attachments/9219289104283/How_can_I_delete_my_MetaMask_Wallet.gif)

On mobile, simply remove the app as you would any other, and according to how you normally would on your device.#Why am I being asked to connect to a dapp?#
**For an intro to all things dapps, see our user guide [here](https://support.metamask.io/hc/en-us/articles/4405506066331).**

For sites to see your wallet address, they must ask you for access. All they're gaining in these situations is the ability to see your address, and, by extension (since everything is viewable on the blockchain), the funds you hold. **This does not mean they can access and move your tokens around** — for that, you'll need to sign a [token approval](https://support.metamask.io/hc/en-us/articles/6174898326683).

You will only be required to connect to a dapp once. After that, you'll be able to see it in your 'Connected sites'. For more detail on viewing connected sites and for how to disconnect from them, see [here](https://support.metamask.io/hc/en-us/articles/360059535551). 

Some legacy sites may not request access properly. If you go to a dapp and it does not see your wallet, you'll need to **add it manually**. See our [article](https://support.metamask.io/hc/en-us/articles/360045901112) for how to do this. 

For more information on dapps, see [here.](https://ethereum.org/en/developers/docs/dapps/)#How to enable full disk encryption for improved security#
To keep your computer and its contents as safe as possible from someone with physical access to your machine, we recommend you enable full disk encryption on your computer.

* On a Mac this is the [FileVault](https://support.apple.com/en-us/HT204837) feature.
* On Windows, you should enable [BitLocker](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838).
* On Linux, you can use [LUKS](https://www.redhat.com/sysadmin/disk-encryption-luks) for this safety.

With full disk encryption, an attacker with physical access to your computer should not be able to extract any of its contents, including any private keys you have stored throughout your disk, but also site passwords, banking details, and other sensitive information.#Error: [ethjs-query] while formatting outputs from RPC (transaction underpriced error)#
**The information in this article is applicable to Ethereum mainnet _and_ other networks, such as BSC and Polygon.** 

If the gas price has been set too low when attempting to carry out a transaction, this sort of error can occur:

"Transaction <_your transaction # here_\> failed! Error: \[ethjs-query\] while formatting outputs from RPC '{"value": {"code":-32000,"message":"transaction underpriced"}}'"

This can happen when attempting to make a swap via a DEX (decentralized exchange) or simply when sending tokens to an address.

In order to successfully complete the transaction, you should issue a new transaction whilst **raising the amount of gas you pay.** However, before you do so, check on the relevant block explorer (e.g. [Etherscan](https://etherscan.io/), [BscScan](https://bscscan.com/), [Polygonscan](https://polygonscan.com/) etc.) to make sure you are not generating an increasingly longer queue of pending transactions. 

To do this:

Extension Mobile 

1. Make sure you have '**Advanced gas controls**' turned on. This can be found in Settings > Advanced.  
![Screenshot_2022-02-08_at_08.26.53.png](https://support.metamask.io/hc/article_attachments/4418165732379/Screenshot_2022-02-08_at_08.26.53.png)
2. Start a new transaction, using the same recipient details and token amount as the original (assuming you want them to remain the same).  
When sending a transaction, hit 'Edit':  
![Screenshot_2022-02-11_at_16.27.21.png](https://support.metamask.io/hc/article_attachments/4419352862235/Screenshot_2022-02-11_at_16.27.21.png)
3. You'll now be presented with a set of fields you can adjust, resembling the below:  
![Screenshot_2022-02-11_at_16.27.54.png](https://support.metamask.io/hc/article_attachments/4419362710043/Screenshot_2022-02-11_at_16.27.54.png)  
Here you should:  
   * **Input a comparable or slightly higher gas limit** than you did for the transaction that failed  
   * Raise the **max priority fee** at least **10% higher (in gwei) than the gas fee of the failed transaction**  
   * Set your **max fee** at least **30% higher** than that of the failed transaction.

If you are trying to cancel that pending transaction altogether, you need to send 0 ETH (or equivalent currency) to your own address with the same nonce as the pending transaction. See our [article on cancelling transactions](https://support.metamask.io/hc/en-us/articles/360015489251-How-to-speed-up-or-cancel-a-pending-transaction) for more guidance.

1. Initiate the new transaction by hitting 'Send' from the homepage of the relevant account.
2. Input the details of your transaction, such as the recipient address and the quantity of tokens you want to send. These details should be the same as the original (failed) transaction, assuming you still want to send the same amount to the same address. Tap 'Next'. You should now see the screen below. Tap on the highlighted gas fee number:  
![transaction_screen.PNG](https://support.metamask.io/hc/article_attachments/5488079525019/transaction_screen.PNG)
3. This will bring up an additional menu where you'll be presented with the options to set your gas fee low, medium, or high. Ignore these and tap 'Advanced options' instead.  
![standard_settings.PNG](https://support.metamask.io/hc/article_attachments/5488052652827/standard_settings.PNG)
4. You can now customize your gas settings with more precision to ensure your new transaction goes through.  
![advanced_settings.PNG](https://support.metamask.io/hc/article_attachments/5488068228635/advanced_settings.PNG)  
Here you should:  
   * **Input a comparable or slightly higher gas limit** than you did for the transaction that failed  
   * Raise the **max priority fee** at least **10% higher (in gwei) than the gas fee of the failed transaction**  
   * Set your **max fee** at least **30% higher** than that of the failed transaction.

If you are trying to cancel that pending transaction altogether, you need to send 0 ETH (or equivalent currency) to your own address with the same nonce as the pending transaction. See our [article on cancelling transactions](https://support.metamask.io/hc/en-us/articles/360015489251) for more guidance.

For more information on gas, see our [user guide](https://support.metamask.io/hc/en-us/articles/4404600179227-User-Guide-Gas).#How to display tokens in MetaMask#
**Quick links:**

* [Automatic token detection](#h%5F01FWH48EA3JNK6V5JXCR6XVWZD)
* [Adding a token using the search bar](#h%5F01FWH48R495MR9DQEDHJ89QNDA)
* [Adding a custom token](#h%5F01FWH492CHY60HWPC28RW0872H)
* [Removing/hiding tokens](#h%5F01FWH499MRDT5QC4R3KNPQNRWB)
* [Finding the token contract address](#h%5F01FWKCA7MJG5HT2MSZZ8DJ0QCF)
* [Adding a token using the block explorer](#h%5F01FWH752DWRBMH57M6DZRFSPQD)
* [Adding a token using a coin listing site](#h%5F01G13EJA2ZSJD1A743FVNCASNS)
* [Using the Portfolio Dapp](#h%5F01GF6GCVM0QAY6CS56XNS2RNET)

Normally, MetaMask displays ERC-20 standard tokens (or [standard tokens](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)) you own on your account page. However, with the proliferation of tokens on Ethereum and other networks, MetaMask doesn't keep an authoritative list — but it does allow you to add any ERC-20-compliant token you hold.

There are two different ways to add unlisted tokens to your MetaMask wallet:

First of all, you can enable an advanced feature that [automatically detects tokens](#h%5F01FWH48EA3JNK6V5JXCR6XVWZD) held by your address, and adds them to your wallet. This will use lists of tokens aggregated from various community token lists; **MetaMask doesn't keep a proprietary list of 'accepted' or 'valid' tokens**. If you choose this option, keep in mind that you should always exercise caution surrounding unfamiliar tokens:

1. Don’t interact with or connect your wallet to any website that you’re not familiar with, you haven’t researched and have no reason to believe to be trustworthy.
2. Always second-guess an airdropped or unfamiliar token and do your due diligence before interacting with it. See more on best practices for token safety [here](https://support.metamask.io/hc/en-us/articles/4403988839451).
3. If you attempt to transact using the token and your transaction fails, with the block explorer displays an error written by the scammer directing you to a website, this is likely a phishing site, so DO NOT click this link.
4. Keep informed about ways that scammers are trying to steal your funds. Realise there aren’t always adequate safeguards in place for the information you’re seeing around the web to be worth trusting.

## Enhanced token detection

#### Only available on certain networks!

Enhanced token detection is only available on:

* Ethereum mainnet
* Avalanche
* BNB Smart Chain
* Polygon

Extension Mobile 

Click on the identicon in the upper right-hand corner, navigate to 'Settings', and then 'Security & Privacy', and make sure the toggle is on.

![Enhanced automatic token detection MetaMask](https://support.metamask.io/hc/article_attachments/12675680659867)

You can always turn this off later if needed.

Hit the hamburger icon in the top left of the homepage, and then find 'Settings'. From here, go to 'Advanced', and scroll until you find the token detection toggle.

![Enhanced automatic token detection MetaMask Mobile](https://support.metamask.io/hc/article_attachments/12675759226523)

**Once you've enabled token detection, go back to your asset list, and refresh if necessary — hopefully, any tokens you weren't seeing before are there now.**

_Note that token detection takes place on Ethereum mainnet regardless of whether this setting is on or off; enhanced token detection just expands this function to cover the additional networks listed above._ 

## Manually adding a token with search 

Extension Mobile 

To see your tokens, click on the **Assets** tab. Your tokens should be listed under this tab. If they're not, and automatic token detection isn't picking them up, then click on 'Import token' at the bottom.

Clicking here will bring you to a search bar:

1. Type in words contained in the token you would like to search. For example, if I would like to look for Chainlink (Symbol: LINK), I just type in "LI” in the bar, and the search bar will return all the suggestions.
2. Select token of interest, and click **Next** to proceed. (As soon as you select a token, the button's border will be highlighted in blue)
3. Click **Add token** to proceed. You will be then redirected to your account page. The token you have just added will be listed.

![Import token MetaMask Extension](https://support.metamask.io/hc/article_attachments/10083563135259)

1. On your wallet page, find the 'Import tokens' link at the bottom of the screen.
2. This will bring up the search bar. Type in the name of the token you want to add.
3. When you find the token, tap on it to select it and then scroll down so you see the 'Import' button.

![Import token MetaMask Mobile](https://support.metamask.io/hc/article_attachments/10084919030939)

The token will now be listed under your account's assets.

## How to hide tokens

Once added, you can remove the token from your asset list.

Extension Mobile 

On your wallet page, find the 'Assets' tab and click on the token you want to remove.

From here, click the three dots in the top right corner, and then 'Hide'.

![Hide token extension](https://support.metamask.io/hc/article_attachments/10085954910491)

For both iOS and Android, long press on the token. This will bring up the option to remove it:

![Hide token mobile](https://support.metamask.io/hc/article_attachments/10085341425307)

**If the token you search for is not among the most popular tokens, the search bar may not return the token you queried.** In this case, you could [add a custom token](#h%5F01FWH492CHY60HWPC28RW0872H) (manually).

## How to add a custom token

Extension Mobile 

1. Click on 'Import tokens', located at the bottom of the 'Assets' tab on your wallet homepage.
2. Switch to the 'Custom token' tab at the top, and then enter the token address in the first field. See [below](#h%5F01FWKCA7MJG5HT2MSZZ8DJ0QCF) if you don't know where to find this.
3. In most cases, the token symbol and token decimal will autofill.  
If they don't, head to the network's block explorer and find the token. Its symbol and decimals will most likely be displayed.

![Find custom token details](https://support.metamask.io/hc/article_attachments/10106350735131)

If you still can't find the token details, try locating the token's documentation through a web search.

1. Click 'Add Custom Token' to proceed.
2. You will now see a page asking you to confirm that you want to add the token.  
When you click 'Import Tokens', the token type will be added to your wallet.

![Import custom token MetaMask Extension](https://support.metamask.io/hc/article_attachments/10106386660251)

1. Find the 'Import tokens' link from your wallet homepage. Tap it to bring up the menu for adding tokens.
2. Switch over to the 'Custom token' tab. Now you'll see three fields asking for the token's contract address, its symbol, and 'Token of Precision' (i.e. how many decimal places it can go down to).
3. [Find the token address](#h%5F01FWKCA7MJG5HT2MSZZ8DJ0QCF) and paste it into the first field. The symbol and decimals should autofill. If they don't, head to the network's block explorer and search for the token. On its page, you can easily find its symbol and decimals.

![Find custom token details mobile](https://support.metamask.io/hc/article_attachments/10107023572891)

1. Tap 'Import' to add it to your wallet. You'll be redirected back to your wallet homepage and be able to see it under the 'tokens' tab.

![Import_custom_token_MetaMask_mobile.gif](https://support.metamask.io/hc/article_attachments/10107024797979)

## What if I don’t know the token address?

Take a look at [this article](https://support.metamask.io/hc/en-us/articles/360059683451) to see a couple of different ways to find it. 

You could also ask the person who sends you the tokens for the token's contract address.

**Please be aware that if someone told you they have sent you tokens, but they are unable to provide you the token address, or the transaction hash (a unique transaction ID), it’s possible that they haven't in fact done so.**

## How to add a token using a block explorer

> Note: In addition to Etherscan, this will work with most major block explorers, including [BscScan](https://bscscan.com/), [Polygonscan](https://polygonscan.com/), [Snowtrace](https://snowtrace.io/), etc., as they generally share a similar design.

1. Go to the block explorer.
2. Search for your token. You can also go via the 'Tokens' link in the menu bar.
3. Click the 'More' button in the top right of the token's profile summary.
4. Click 'Add token to MetaMask (Web3)'

![add token using block explorer](https://support.metamask.io/hc/article_attachments/10107351855643)

1. MetaMask will pop up for you to confirm that you want to add the token.

![add token MetaMask notification](https://support.metamask.io/hc/article_attachments/10107367917339)

## How to add a token using a coin listing site

Sites such as Coingecko or CoinMarketCap offer MetaMask integration that allows you to add a token to MetaMask directly from its entry on their site. 

To access this, simply head to one of these sites and find the token you want to add by using the search bar. Then find the contract address and click the MetaMask fox. A prompt will appear to confirm that you want to add the token to your wallet.

![Add_token_to_MetaMask_from_coin_listing_site2.gif](https://support.metamask.io/hc/article_attachments/10108047973147)

#### Note

**On MetaMask Mobile, make sure you access the site using the in-app browser**, rather than your device's standard browser. This is the only way to access web links that integrate with MetaMask as you can do on your desktop browser using Extension.

This method also allows you to add the token on different networks, depending on whether a corresponding smart contract has been deployed on that network by the token owners. Click the three dots next to the contract address to select a different network, and then click the fox to add the token on that network. 

## Using the Portfolio Dapp

The [Portfolio Dapp](https://portfolio.metamask.io/) is a new, MetaMask-associated platform that aggregates and displays your token balances. Usefully, in our context, once you connect your wallet it **automatically detects** and displays the majority of tokens.

All you need to do is follow the link and connect your wallet. See [our articles](https://support.metamask.io/hc/en-us/sections/8324102004763-Portfolio) on how to use the dapp if you need more guidance. #How to report an address on Etherscan#
#### Note

As most block explorers share similar architecture, you can also do this on other networks, such as on BSCScan, PolygonScan, Snowtrace, etc.

Using a block explorer such as Etherscan (see our [guide](https://support.metamask.io/hc/en-us/articles/360057536611-How-to-check-my-wallet-activity-on-the-blockchain-explorer)) enables you to take advantage of the public nature of the blockchain, and is a useful first port of call if you want to check any aspect of your transaction — whether it's complete, which wallets were involved, what time it was sent, etc. 

If you suspect you've identified a wallet or contract address that is being used for scams—such as phishing attacks—you can flag it to Etherscan. The Etherscan team will then investigate the address, and, if in agreement, will mark the address as fraudulent wherever it appears on the block explorer. 

This will help other users to easily identify it, such as if they are doing their due diligence on a dapp's smart contract before connecting their wallet. 

## Reporting an address

1. Access the address on Etherscan. Check the URL to confirm you're in the right place: for both contract and wallet addresses, it will read _etherscan.io/address/xyz,_ where _xyz_ is the address itself.
2. Locate the 'More Info' section on the right, near the top of the page.
3. Click the dropdown menu marked 'More' and select 'Report/Flag Address':

![Report address Etherscan](https://support.metamask.io/hc/article_attachments/13306210590491)

1. Complete the Etherscan form.#Sending assets to Binance (BNB Smart Chain)#
If you're looking to move tokens from the Ethereum network, or any other EVM-compatible network, back to BSC, then you're in luck:

Binance has written a [support article specifically to help you out with this](https://academy.binance.com/en/articles/how-to-recover-crypto-transferred-to-the-wrong-network-on-binance). Its suggests it's specifically about recovering funds sent on the wrong network, but it also covers some important general points about moving funds to BNB Smart Chain. 

**Keep in mind that MetaMask simply allows you to access the Binance network, and has nothing to do with how tokens work, or get transferred onto or off of BSC.** For this reason, we encourage you to consult directly with Binance's support resources for all Binance-related issues.

Make sure to **ask Binance for any special requirements** before making a transaction.

If you have **any further questions** regarding Binance, please **contact the** **[Binance Support ](https://www.binance.com/en/support)**team directly.#MetaMask states "Balance may be outdated", displays in orange, or ETH not added to balance#
#### **This article applies to MetaMask Extension.**

If you see your balance in orange, it might be outdated due to a permission or network connectivity issue:

![mceclip0.png](https://support.metamask.io/hc/article_attachments/360046654611/mceclip0.png)

To fix this issue, try the following:

Chromium-based browsers: Chrome, Brave, Edge Firefox 

1. Right-click on the MetaMask Extension icon
2. Select **'This Can Read and Change Site Data'**
3. Select **'On All Sites'**

![mceclip0.png](https://support.metamask.io/hc/article_attachments/360046657191/mceclip0.png)

These instructions will look similar across Chromium-based browsers: i.e. Chrome, Edge, and Brave.

The permission to access data on all sites is enabled by default on Firefox, since it's a permission which MetaMask automatically requests for core functionality. 

You may also need close and re-open your browser, or try a different internet connection entirely.

If you continue to experience this issue, please [contact MetaMask Support](https://support.metamask.io/hc/en-us/articles/360058969391).#When two-factor authentication?#
> By [Dan Finlay](https://twitter.com/danfinlay?s=20) 

Sometimes, users will ask us, “when two factor?”. Two factor authentication is a great feature to expect from any website using traditional authentication, but is a little more complicated for a [self-custodial (or _non-_custodial) crypto wallet](https://consensys.net/blog/metamask/whats-in-a-self-custody-non-custodial-wallet-anyway/) like MetaMask. In some ways, it already has better security than what you’re used to from 2FA, but in other ways users may find themselves wielding more responsibility for their funds than they’re comfortable with, and for those users, there are still many ways we plan to improve our security.

MetaMask supports a number of hardware wallets today, and these provide an additional factor of security. You can choose between the Grid+ [Lattice1](https://gridplus.io/products/grid-lattice1), [Keystone](https://keyst.one/), [Ledger](https://www.ledger.com/), and [Trezor](https://trezor.io/). Each of these add an extra layer of security that allows you to keep your sensitive secret keys off your computer so that even if it’s hacked (as long as you review each transaction on the hardware wallet’s screen) you’ll be safe. In a way, a hardware wallet is a second factor of authentication that we enable you to choose today.

Longer term, the blockchain can enable users to publish “contract accounts” that can require signatures from multiple keys when signing transactions. We are actively developing a plugin system that will allow our users to choose any account pattern that works for them, without becoming locked into a proprietary contract account format.

Lastly, usually when people say “two factor authentication”, they are referring to a centralized server type account like they are used to from web2\. This is the pattern where you have an authenticator app and have to enter a few extra characters when logging in. That type of two factor authentication simply does not apply to the type of wallet that MetaMask is today. MetaMask is a “user custodial wallet”. This means that no one controls your accounts except for you (or anyone else who gets ahold of your Secret Recovery Phrase or private keys). Since we do not hold your private keys on a server that we maintain, or for that matter, at all, we are unable to put restrictions on when you can transact. This also means we cannot censor you or prevent you from using your own funds, but it can be more responsibility than you’re used to compared to traditional login systems.

MetaMask has been working with some custodial key providers to bring that more traditional experience to users who need it, which we currently are calling [MetaMask Institutional](https://metamask.io/institutions). Eventually we hope to bring even traditional login options from some of these partners into the main version of MetaMask.

If you want to improve your security today, we recommend getting a hardware wallet. If you need to ensure no single key can steal your funds, you can look into contract accounts (like [Gnosis Safe](https://gnosis-safe.io/) or [Argent](https://www.argent.xyz/)) or [DAOs](https://wiki.metagame.wtf/docs/great-houses/house-of-daos) that can hold your funds. Contract accounts are a bit more expensive to use, but if you aren’t comfortable keeping your keys safe, it is one extra layer between you and the bad guys.#How to connect to the Gnosis Chain network (formerly xDai)#
**For an automatic process**, go to [Chainlist](https://chainlist.wtf/), search for Gnosis, and connect your wallet.

**For a manual process**:

Follow the steps found [here](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-Network-RPC-and-or-Block-Explorer) to add a custom RPC network.

Then follow the steps found [here](https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup) for the custom network settings; specifically:

* Network Name: **Gnosis Chain**
* New RPC URL: [https://rpc.gnosischain.com ](https://rpc.gnosischain.com/)
* Chain ID: **0x64** (the hexadecimal equivalent of 100; if you encounter issues, input 100 instead and retry)
* Symbol: **xDai**
* Block Explorer URL: <https://blockscout.com/xdai/mainnet/>#How to Sync Mobile with MetaMask Extension#
## The Mobile Sync feature is currently unavailable. This information will be updated when applicable.

At times, it may be helpful to sync your Mobile app with MetaMask Extension; the process essentially overrides the current state of your MetaMask Mobile app and syncs it with what is shown in MetaMask Extension. If you are encountering any of the following issues, follow the process below to sync.

* There is a discrepancy in the value of your tokens between Mobile and Extension
* You have a stuck or pending transaction on Mobile that does not show on Extension or on a blockchain explorer
* You are experiencing technical issues surrounding transaction nonces
* You have been guided to this process by a Support engineer :-)

Note: if you have recently synced MetaMask Mobile with the Extension and are having trouble logging in, try using the password you use on MetaMask Extension.

### **Steps to Sync Mobile with Extension:**

First of all, in your browser:

1. Open the extension
2. Go to **Settings > Advanced**
3. Click on **Sync with Mobile**. A QR code should appear. Leave it there and pick up your phone:

On Mobile you need to log out (tap on the three horizontal lines in the upper left hand corner; navigate to the bottom of the menu, and tap "Log Out"). Once logged out, you will see the **Reset Wallet** link at the bottom of the screen: 

1. Tap on Reset Wallet
2. You will see the message: **"Are you sure you want to erase your wallet?"** tap **"I understand, continue"**
3. Type **delete** my wallet
4. As soon as you confirm you will see **Sync with MetaMask extension**. Follow the prompts and scan the QR code in the browser Extension in order to import your wallet and sync with Extension.
5. Alternatively, you can tap **Import using Secret Recovery Phrase**

**NOTE:** Only accounts tied to the Secret Recovery Phrase and accounts imported via private key or JSON will sync. If you have a hardware wallet connected to MetaMask, that will not sync at this time.

And please remember **DO NOT SHARE** your **Secret Recovery Phrase** with anyone! These secret words can be used to steal all your tokens and accounts. Read our User Guide [here](https://support.metamask.io/hc/en-us/articles/4404722782107). 

**To better communicate the importance of never sharing your seed phrase, we've changed the name of the phrase to "secret recovery phrase". [Learn more here.](https://support.metamask.io/hc/en-us/articles/360060826432)**#Error "Internal JSON-RPC error" when trying to interact with other networks#
### If you are interacting with sidechains or custom networks, we highly recommend you read our user guide [here](https://support.metamask.io/hc/en-us/articles/4404424659995-User-Guide-Custom-networks-and-sidechains).

If you get the error "Internal JSON-RPC error" while trying to interact with other networks, try the following:

* Ensure the network has been added correctly. See our [article on adding networks](https://support.metamask.io/hc/en-us/articles/360043227612) to find out how to do this.
* Ensure you have enough native tokens from that network to pay for gas.
* Ensure you are using the latest version of the app or the extension.#How to change language settings in MetaMask#
Extension Mobile 

Click the account icon on the top right of the screen, and navigate to 'Settings' and then 'General'. Scroll down until you see the drop-down menu that allows you to select your preferred language:

![How to change the language settings in MetaMask extension](https://support.metamask.io/hc/article_attachments/8971413793307/How_to_Change_the_Language_Settings_in_Metamask_Extension.gif)

1. Click the hamburger icon on the top left to call up the menu.
2. Select 'Settings'.
3. Select 'General'.
4. Scroll down to Current Language and choose your preferred languagefrom the drop-down list.

![How to change the language settings in MetaMask mobile](https://support.metamask.io/hc/article_attachments/8971452603163/How_to_Change_the_Language_Settings_in_Metamask_Mobile.gif)#Hardware Wallet Hub#
### MetaMask currently supports five lines of hardware wallet: AirGap Vault, Keystone, Lattice, Ledger and Trezor. These wallets are supported on Extension, and will be able to be added to Mobile in future updates.

#### Am I in the right place?

If you're looking for an explanation about what a hardware wallet is and why you should have one, keep reading.

If you're looking for support regarding your particular hardware wallet, scroll down to the corresponding section.

If you're setting up a hardware wallet for the first time, **take a look at our [User Guide](https://support.metamask.io/hc/en-us/articles/5450173968283) for our recommended configuration.** 

#### 

## What is a hardware wallet? And why should I have one?

Understanding hardware wallets means getting 'under the hood' of Ethereum a little bit. Let's first take a look at what we mean when we talk about a 'wallet'. At first glance, it's an intuitive concept: it's a digital container to hold digital money and other things. Just like, in a real wallet, you may have some currency and some pictures of your cat or your family; well, in your MetaMask wallet you have some currency and some CryptoKitties and an animated GIF of a zombie. Pretty similar so far.

Well, it turns out that calling it a 'wallet' is a bit of a metaphor. It's a good one in terms of how we experience it, but it doesn't accurately represent what's happening, technologically. The contents of your 'wallet' actually consists of _the assets assigned to your address on the blockchain_. When we send ETH 'to' someone, it doesn't _go_ anywhere; it's simply deducted from the balance of ETH assigned to your address, and reassigned to the balance of the address you're sending it to. Remember, a public blockchain is also called _distributed ledger technology_, and all of our wallets are lines in that ledger; our balances, our holdings, are the columns, and the Ethereum Virtual Machine is our automated bookkeeper.

In this sense, MetaMask is 'simply' a web application that sends requests to the Ethereum blockchain: for information about what assets are assigned to your address; to 'send' tokens from one address to another, and so on. It does this by using your Secret Recovery Phrase.

Your public Ethereum address is one half of a pair: a _cryptographic key pair_, to be precise. The public half, your address, can be given to anyone without fear of them being able to hack in and steal your funds. The private half, the Secret Recovery Phrase (also known as a 'seed phrase'), authenticates whoever holds it as having full and complete access over the address and all accounts associated with it. **Remember: "not your keys, not your coins".**

Now, MetaMask is extremely secure, and as long as no one has access to your Secret Recovery Phrase ([you wrote it down in a safe offline location, right?](https://support.metamask.io/hc/en-us/articles/4404722782107)), your account should be secure. There are many other factors that are outside of the control of MetaMask and its security engineers: how safe your browser is, whether someone gets physical control over your computer, or takes over your computer using a virus, for example.

For this reason, we recommend that if you are storing any significant amount of value in your MetaMask wallet—or simply assets that are important to you—that you use a hardware wallet as a second line of defense. 

With all that background out of the way:

##   
TL;DR

### **A hardware wallet is a physical device outside of your computer that secures your wallet's keys, and acts as a firewall between attackers and the contents of your wallet.** 

In order to transact with funds secured by a hardware wallet, you will have to interact with the hardware wallet in order to approve the transaction. This way, even if someone somehow gains access to your MetaMask wallet, they will be stopped from moving things out of it.

## AirGap Vault 

* [Connect AirGap Vault to MetaMask](https://support.airgap.it/guides/metamask/)
* [ AirGap Vault - Android Play Store ](https://play.google.com/store/apps/details?id=it.airgap.vault&hl=en%5FUS&gl=US)
* [ AirGap Vault - iOS App Store ](https://apps.apple.com/us/app/airgap-vault-secure-secrets/id1417126841)

## Keystone 

* [Binding your Keystone to your MetaMask Wallet](https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/bind-metamask-with-keystone)
* [How to connect Keystone to MetaMask Mobile and send ETH](https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/metamask-mobile)
* [How to use Keystone with MetaMask Mobile for dApps through Wallet Connect](https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/metamask-mobile/defi-with-metamask-mobile)
* [How to configure EVM chains on MetaMask Mobile](https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/metamask-mobile/configuring-evm-chains-on-metamask-mobile)
* [How To Benefit From Hardware Wallet Security Using Transparent QR Codes](https://consensys.net/blog/news/metamask-x-keystone-how-to-benefit-from-hardware-wallet-security-using-transparent-qr-code/)
* For an understanding of Keystone's security value-added proposition, [see here](https://blog.keyst.one/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6).
* For advanced topics regarding Keystone's security features, including introducing custom entropy, [read here](https://support.keyst.one/general-navigation-guide#advanced-users).

## Lattice 

* For first-time Lattice users, make sure you’re properly set up: <https://gridplus.io/setup>
* See GridPlus' documentation on getting started using MetaMask and a Lattice [here](https://docs.gridplus.io/setup/metamask).

## Ledger 

 Ledger has broad documentation for users of MetaMask. Here are some that will help get you started:  

* [Set up and use MetaMask to access your Ledger Ethereum (ETH) account](https://support.ledger.com/hc/en-us/articles/4404366864657-Set-up-and-use-MetaMask-to-access-your-Ledger-Ethereum-ETH-account?docs=true)
* [I don't see my BEP-20 tokens in my Ledger Binance Smart Chain (BSC) account, what can I do?](https://support.ledger.com/hc/en-us/articles/4406111561617-I-don-t-see-my-BEP-20-tokens-in-my-Ledger-Binance-Smart-Chain-BSC-account-what-can-I-do-?support=true)
* [How to access your Ledger Polygon account via MetaMask](https://support.ledger.com/hc/en-us/articles/4418394184209-How-to-access-your-Ledger-Polygon-MATIC-account-via-Metamask?docs=true)

## Trezor 

* See Trezor's documentation regarding operability with MetaMask [here](https://wiki.trezor.io/Apps:MetaMask).#How to connect a Trezor or Ledger Hardware Wallet#
#### Hardware Wallet Hub

This article is being retained for reference purposes -- please refer primarily to our [Hardware Wallet Hub](https://support.metamask.io/hc/en-us/articles/4408552261275) for guidance.

#### Warning

As of Chrome version 91, the API that enabled our Ledger support (U2F) no longer supports hardware wallets. MetaMask has implemented a new Ledger Live support that allows you to continue to connect to your Ledger device via the Ledger Live desktop app.

MetaMask allows you to connect a Trezor or Ledger wallet. This allows you to:

* Check your account balance (ETH or Tokens).
* Sign transactions — e.g. send ETH and ERC20 tokens and collectibles (NFTs), deploy contracts, etc.
* Sign messages

**Why connect your hardware wallet to MetMask?** Some sites may have integration with MetaMask but not with Trezor or Ledger wallets yet. Connecting your wallet with MetaMask, allows you to interact with those sites now! In addition, this helps developers, as it gives their users more options with less development work on their end.

_**For Chrome v91:**_

Make sure you have Ledger Live app installed with your Ledger accounts visible.

Then, to enable Ledger Live support w/MetaMask, go to **Settings > Advanced > Use Ledger Live**

_**NOTE:** If the integration with Ledger Live does not work, you can install MetaMask on Firefox to connect via U2F. Continue with the instructions below for those steps._

  
**_For Firefox and Chrome v90 or older:_**

**How do I connect my Trezor or Ledger Hardware Wallet?**

_\*\*Before you start, make sure you have\*\*_

* _the most up-to-date firmware on your Ledger or Trezor device_
* _up-to-date browser_
* _up-to-date Ethereum App on the Ledger (from Ledger Live > Manager)_
* _"blind signing" enabled on the device (if needed for what you are doing)_
* _Ledger Live app closed_
* _the device plugged in via USB, NOT Bluetooth_
* _the device unlocked and in the Ethereum app_
* _Your Ledger's connection to MetaMask can be broken due to your browser cache -- try clearing it if any problems arise_
* _Windows 10 security popup? [Try this fix](https://support.ledger.com/hc/en-us/articles/360020669680-Solutions-for-the-Windows-10-security-pop-up)_
* **_Still having trouble connecting?_**  
   * **_[Ledger Support](https://support.ledger.com/hc/en-us/articles/115005165269)_**  
   * [**_Trezor Support_**](https://trezor.io/support/technical/)

1\. Unlock your MetaMask

![Screen_Shot_2018-12-06_at_2.23.47_PM.png](https://support.metamask.io/hc/article_attachments/360016681712/Screen_Shot_2018-12-06_at_2.23.47_PM.png)

2\. Select the icon on the top-right corner

3\. Select Connect Hardware Wallet

![Screen_Shot_2018-12-06_at_2.24.02_PM.png](https://support.metamask.io/hc/article_attachments/360016681992/Screen_Shot_2018-12-06_at_2.24.02_PM.png)

4\. Choose **Ledger** or **Trezor**

5\. Click **connect**

6\. Select an account you want to interact with (note: MetaMask can only have one account connected and accessible at any given time)

![Screen_Shot_2018-12-07_at_1.12.32_PM.png](https://support.metamask.io/hc/article_attachments/360016733471/Screen_Shot_2018-12-07_at_1.12.32_PM.png)

Once you successfully connect your account, it will behave just like any other MetaMask account, with the difference that you need to have your wallet plugged in for signing transactions or messages.  
  
If later you want to remove the connected account, simply click the X next to it on the account list menu (MetaMask will remember your account name and transaction history if you reimport that account in the future).  
  
**What if I cannot find the account that I'm looking for?**

If you previously used an account and would like to connect it to MetaMask, make sure you view multiple pages of accounts on BOTH derivation paths (Ledger Live and Legacy).

![mceclip0.png](https://support.metamask.io/hc/article_attachments/360063323431/mceclip0.png)

**Why is my MetaMask address/account not listed when I connect my Trezor?**  
When you connect your Trezor wallet and the list of addresses/accounts displays, these are addresses/accounts associated with only your Trezor, not your MetaMask wallet.

To use the benefits and features of a hardware wallet, you will need to use one of your Trezor addresses/accounts, not your MetaMask address/account.#Infura connectivity issues#
MetaMask makes dapp adoption quick and easy because we host a blockchain connection by default, and our trusty friends at Infura do an amazing job making this experience feel totally seamless, [almost all of the time](https://status.infura.io/)!

Sometimes, some dapp usage has grown much faster than we've been able to anticipate, and so MetaMask's default provider connection can become intermittent. Sometimes we have to limit abusive sites.

At times like that, there are three options:

1. Wait and be patient.
2. Connect to another blockchain provider in place of Infura (like [your own local node](https://support.metamask.io/hc/en-us/articles/360015290012-Using-a-Local-Node))
3. Use another client.

## Connecting to another blockchain provider

To connect, you'll need to run a local RPC server, and then connect to it in MetaMask as if you were selecting a network. On both Extension and Mobile, the network selector is at the top of the screen, in the middle.

When you have successfully [spun up your own node](https://support.metamask.io/hc/en-us/articles/360015290012), it will run on 'Localhost 8545', which you'll find in your networks list by default (you may need to go to Settings > Advanced > Show test networks to make sure this is displayed):

![Screenshot_2022-07-08_at_13.20.31.png](https://support.metamask.io/hc/article_attachments/7171773660315/Screenshot_2022-07-08_at_13.20.31.png)

Select it to start using your node to send requests to the blockchain. #Scammers and Phishers: Rugpulls and airdrop scams#
#### The decentralized web is exploding with economic activity and has the potential for incredible growth. While this attracts a lot of well-deserved attention, there's another thing it attracts: scammers and thieves.

##   
**Rugpulls: Don't let your FOMO get the better of you** 

A _rugpull_ is the term that has been popularized to describe the Web3 / DeFi equivalent of what we would call, in traditional financial systems, a Ponzi scheme; a related concept is that of "pumping and dumping". Let's dig into this a bit.

There isn't just one token or cryptocurrency per blockchain. In fact, the Ethereum blockchain has on it an incredible number of cryptocurrencies, and creating a new one is a fairly straightforward procedure. Not only are they easy to create, but **you can name them whatever you want,** which can make identifying legitimate tokens particularly difficult.

Those who speculate in cryptocurrencies will often engage in 'pumping and dumping', i.e. buying lots of a particular token in order to drive the price up, then selling them for a profit. This simple mechanism is taken to a whole other level when an individual or group of individuals creates a token simply for the purpose of extracting value. 

### How it works

* A token is created
* The token is promoted, through airdrops, spamming through social media channels
* The price of the token is inflated, often in a coordinated manner between a number of parties
* Unwary investors 'dogpile' onto the token, buying due to the perception that the value is skyrocketing and they want to get in when the token is still relatively cheap
* When the value of the token reaches the target that the creators were aiming for, or whenever they decide to, the scammers liquidate their shares or swap for another cryptocurrency, perhaps dropping the value of the token to below what it had been when the unwary investors had bought
* The unwary investor has lost value, and is left with tokens worth next to nothing.

### How to avoid it

Do your research. How long has the token been around? Take a look at a block explorer, and see if you can figure out what the distribution of the token is like. Are there a handful of accounts holding a majority of the tokens? Is it being hawked aggressively on chat platforms? Does the token have any true utility — or example, is it used in a video game? Or is it just a meme-inspired token?

_Just because there's a graph with an incredible spike, doesn't mean that spike will continue._

**At the end of the day, this is the decentralized web, and [you're the custodian](https://support.metamask.io/hc/en-us/articles/360059952212) of your tokens. Only you can decide which projects are worth your participation.**

## **Free money doesn't (always) fall from the sky: Airdrop scams**

An airdrop consists of a token creator sending some quantity of tokens to Ethereum addresses — maybe at random, maybe from a list of users of a particular dapp or sidechain, for example. There was a time when it was a fairly common practice to use an airdrop as part of a launch campaign for a new token.

Airdrops have a rich and storied history on Web3, and are a great tool for creators of a new project to get their token into the hands of users, and a great opportunity for Web3 participants to benefit from being present in the ecosystem.

### How the scam works 

Unfortunately, airdrop scams are an attack vector that are actively being developed, and novel exploits of smart contract code could cause new types of scams to appear. That said, here is a common pattern:

* A wallet holder, examining their wallet on a blockchain explorer, notices they've got some new tokens—maybe even _millions_ of a new token—that they didn't pay for. Congrats, wallet holder, you're the recipient of an airdrop!
* "Well," says the wallet holder to themselves, "I didn't pay anything for these and I don't particularly care about them. I wonder if I can get anything for them. I'll go to a token swap site."
* The wallet holder attempts a swap of the tokens—maybe for some ETH—and nothing seems to happen. Confused, the wallet holder goes to the block explorer, and sees a message like [this one](https://bscscan.com/tx/0x88e89231b292d4eaae45f84f2f1118841b64a0fc6e71fc5d7a8d55fc8eb0940d), which somewhat cryptically tells the would-be token millionaire that in order to claim their tokens, they need to go to a third-party site.
* Once on the third-party site, a few things might happen.  
   * The user might be tricked (phished) into putting their Secret Recovery Phrase into the website, **at which point the scammers have control over their entire wallet**.  
   * The attack can be more subtle, however. Paraphrasing one user's story: "You go to claim your tokens, and MetaMask pops up with a confirmation message. You confirm the MetaMask transaction, but what you don't realize is that you're giving the page permission to take your tokens, rather than give you tokens." (N.b. this is a token approval scam. [Read more here.](https://support.metamask.io/hc/en-us/articles/6174898326683-What-is-a-token-approval-#h%5F01G6X0J818RMX8E35CCPE0KQEH:~:text=for%20more%20detail.-,Unlimited%20token%20approvals,-%3A%20how%20to%20stay))

### How to avoid it

MetaMask is aware of these scams, and is actively working on improvements to help prevent them, but **in the decentralized web, the most important member of the security team is you.** If you're not sure about a product, look around a bit. Ask on (respectable) forums. Don't give into the fear that if you don't sell the tokens now, they won't be worth anything — after all, **the fractions of an ETH that you may earn from selling them aren't worth your wallet getting liquidated.**

**Never, ever, ever give your Secret Recovery Phrase to a website or to someone online.** 

**Ever.**

While you should make a habit out of checking the contents of your wallet address on a block explorer, take a deep breath before acting on anything you learn there. Remember: tokens can be faked. Check the issuing smart contract address against the address of the legitimate token. **Do your due diligence; you are the custodian of your tokens.**#Passwords and MetaMask#
MetaMask uses passwords in a way that you may not be used to. This mainly has to do with the fact that [MetaMask is a self-custodial wallet](https://support.metamask.io/hc/en-us/articles/360059952212) (also called non-custodial, though we're phasing out this term); it's **not** a conventional cloud-based app where we keep track of your username and password.

**You** keep track of your [Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/4404722782107), and each time you [restore your wallet using your Secret Recovery Phrase](https://support.metamask.io/hc/en-us/articles/360015289612), _**you set the password for that specific instance of MetaMask.**_  
**This means that if you use different passwords for each instance** (Mobile, Extension, Extension on different computers or browser profiles), **you need to remember which password you used for each instance.**

## See also:

[How do I reset my password?](https://support.metamask.io/hc/en-us/articles/360039616872)

[User guide: Secret Recovery Phrase, password, and private keys](https://support.metamask.io/hc/en-us/articles/4404722782107)

[How to use multiple MetaMask wallets](https://support.metamask.io/hc/en-us/articles/12174759849371)

[Using the same MetaMask wallet on multiple devices](https://support.metamask.io/hc/en-us/articles/360015289772)#What is a ‘Secret Recovery Phrase’ and how to keep your crypto wallet secure#
#### New to crypto and web3?

Head to [MetaMask Learn](https://learn.metamask.io/) for a straightforward learning experience designed specifically for newcomers to web3\. It's completely free, available in multiple languages, and includes useful tools such as simulations to help you find your feet with MetaMask.

Your Secret Recovery Phrase (SRP) is a unique 12-word phrase that is generated when you first set up MetaMask. Your funds are connected to that phrase. If you ever lose your password, your SRP allows you to recover your wallet and your funds. Write it down on paper and hide it somewhere, put it in a safety deposit box, or use a secure password manager. Some users even engrave their phrases into metal plates! (Storing your SRP in a physical, offline format eliminates the risk of hacking.) 

## **With MetaMask, control over your wallet belongs to the holder of a master key (that’s YOU!).**

Not even the team at MetaMask can help you recover your wallet and its accounts if you lose your Secret Recovery Phrase. As long as you keep this phrase safe and sound, no one can sign unauthorized transactions from your wallet's account(s). 

There are a lot of benefits to using a self-custody wallet. For example:

* **No institution can manipulate your access to your funds**. Ever heard the phrase "not your keys, not your crypto"? Well, this is what it refers to. If you use a custodial wallet (where an organization or third party essentially controls the wallet, and acts according to your instructions), there's very little other than trust preventing the custodian from making off with your funds.
* No merchant you transact with via MetaMask can access more of your personal data than you reveal.
* Your MetaMask wallet can be used almost like a passport, enabling **digital proof of identity**. The [Ethereum Name Service](https://ens.domains/) (ENS) is perhaps the most prominent example that self-custodial wallet ownership is increasingly following this route.

**The trade-off?** Because a MetaMask wallet is self-managed, the responsibility for keeping that wallet safe is entirely yours. 

**Never ever share your Secret Recovery Phrase with anyone**. Sharing your SRP with someone would be like handing over the PIN code to your bank card, or the keys to your house. It would give that person the ability to access and transfer all of your funds. The MetaMask team will never ask you for it. **If** **anyone** **or** **any website** **asks you to share it, they’re trying to scam you.** 

If you’re more of a visual learner, [this quick video](https://youtu.be/-b1tQnOI-no) should help.

## **Here are a few basic security tips to help you keep your wallet secure** 

**What’s the difference between a Secret Recovery Phrase and a password? Why do I need both?**

MetaMask locally encrypts your secret recovery phrase with your password. That means that when you lock your wallet, no one can use your funds until you enter your password again. If you forget your password, you can regain access to your account with the SRP, as it’s the key to access your wallet that only you hold. It’s important to know that neither MetaMask or anyone else can change or recover your seed phrase if it’s lost. Please guard it well! For more information on this, [see here](https://support.metamask.io/hc/en-us/articles/4404722782107-User-Guide-Secret-Recovery-Phrase-password-and-private-keys).

**How to reveal (and recover) your Secret Recovery Phrase**

You’ll be prompted to set your SRP and password when you first install MetaMask. If you lose it, you should be able to recover it if you remember your password _and_ you have a copy of your vault data (files automatically created on the device you use to access MetaMask — so you need the device _and_ your password). However, there are only certain circumstances where this is possible. [See our guide here](https://support.metamask.io/hc/en-us/articles/13112366068251) to establish whether this is an option for you.

#### Warning!

If you lose your Secret Recovery Phrase _and_ forget your password, there is no way to recover the phrase and access your account.

**Don’t share your SRP and private keys**

This has been mentioned already, but it doesn’t hurt to be thorough: anyone who has your SRP or private keys can remove tokens from your accounts. Never share your SRP or private keys with anyone — not even the MetaMask team, even though we will **never** ask you for this information. If anyone claims to be a MetaMask team member and asks you for this information, please report them immediately using our [official support channels](https://support.metamask.io/hc/en-us/articles/360058969391).

**If you have a large number of tokens in your accounts, consider getting a hardware wallet.**

[Hardware wallets](https://support.metamask.io/hc/en-us/articles/4408552261275), like Trezor and Ledger, are commonly thought to be a safer way to store your tokens. They store the private keys offline, meaning you need to be in physical possession of the wallet to sign transactions — a considerable barrier to online scammers.

These are basic tips, but are by no means an exhaustive list of security options. Keep on top of token security trends and updates by learning from the Ethereum community, reading helpful material (like this post) and joining discussion channels[ like this](https://community.metamask.io/).

If you see members of the community struggling with security, feel free to share this post. Remember, if you need any help, or would like to report accounts that are imitating MetaMask, [get in touch](https://support.metamask.io/hc/en-us/articles/360058969391).

Got any more questions? Check out our [FAQs](https://metamask.io/faqs.html), other articles on this page, or get in touch with MetaMask Support through the 'Start a Conversation' button on our [support homepage](https://support.metamask.io/hc/en-us). #What kind of data is MetaMask collecting?#
Please see this documentation: <https://consensys.net/privacy-policy/>#How to reveal your Secret Recovery Phrase#
When dealing with cryptocurrencies or crypto-assets such as Ether and ERC-20 tokens, it is crucial to always be aware of and have your private keys, mnemonic phrases, and passwords backed up in case the unexpected occurs. For more on seed phrases and your MetaMask Secret Recovery Phrase, see [here.](https://support.metamask.io/hc/en-us/articles/4404722782107)

**DO NOT share this phrase with anyone! These words can be used to steal all your accounts. You can't edit or change your Secret Recovery Phrase.**

## Backing Up When You Install MetaMask

When you create a new MetaMask account, you are prompted to accept two screens concerning privacy and terms of usage followed by a page where you enter a password. This password is what allows you to unlock your local MetaMask account once installed. However, if your computer crashes or if you are somehow unable to access your MetaMask, this password will not help you gain access to your funds from another machine or after a crash.

The following page, where you are given **your 12-word Secret Recovery Phrase, is the most important bit of information for you to record and keep safe in managing your MetaMask account**.

You can write your Secret Recovery Phrase down on a piece of paper (or, you know, [titanium](https://www.toughgadget.com/bitcoin-crypto-metal-recovery-seed-wallets/)) or a flash drive; optionally, we allow you to download a file containing the phrase.

## Backing Up After You Install MetaMask

If for some reason you forgot to record your 12-word Secret Recovery Phrase or you lost the original copy, as long as your MetaMask account is still unlocked, you can reveal your Secret Recovery Phrase so you can back it up again. 

Extension Mobile 

1. Navigate down to **Settings >** **Security & Privacy**.
2. Scroll down, and click on the button that reads "Reveal Secret Recovery Phrase".
3. Enter your password to reveal your Seed Phrase / Secret Recovery Phrase.

![How to reveal your secret recovery phrase extension](https://support.metamask.io/hc/article_attachments/9541233181083)

1. Tap on the three horizontal lines in the top left. Select **Settings**:
2. In Settings, choose **Security & Privacy.**
3. In this menu, tap on **Reveal Secret Recovery Phrase** . Then enter your password to display it:

![How to reveal your secret recovery phrase Mobile](https://support.metamask.io/hc/article_attachments/9542309263515)#My Secret Recovery Phrase/private key restored the wrong account(s)#
#### Note:

* An important message from the MetaMask team regarding this issue can be found [here](https://community.metamask.io/t/restored-metamask-no-coins-are-showing/878/107?u=jacob.cantele).
* For basic information on your Secret Recovery Phrase in MetaMask, see our user guide [here](https://support.metamask.io/hc/en-us/articles/4404722782107).

Assuming you are using the correct Secret Recovery Phrase (which can restore multiple accounts) or private key (which can restore only one account when [imported](https://support.metamask.io/hc/en-us/articles/360015489331)), it is impossible to restore the wrong account(s). Check to see if any of the following apply to you:

If you are encountering this problem, the most common reasons are: 

1. **The Secret Recovery Phrase (SRP) you currently have is not the one that restores the account you are looking for.** In other words: you have the wrong SRP.
2. **The account you are missing was a secondary account created under the SRP you currently have.**  
To check if that is the case, use <https://danfinlay.github.io/mnemonic-account-generator/> to generate 10 to 100 accounts and check if the missing accounts are in that list. (Bear in mind that the generator will produce account addresses _without_ the 0x at the start, so copying an address from elsewhere that _does_ have the 0x prefix will produce no matches.)  
If the account you're looking for is a secondary account, you can recreate it in MetaMask by following the instructions [here](https://support.metamask.io/hc/en-us/articles/360015489271).
3. **The SRP you have was originally generated by a different wallet provider.**  
If you think this could be the case, try restoring your account using that wallet to check if you get access to the missing account.
4. **The missing account was imported using a private key.**  
This is what is known as an [imported account](https://support.metamask.io/hc/en-us/articles/360015289932-What-are-imported-accounts-). In this case, the only way to access the account is to reimport it using the private key.
5. **The SRP was written down wrong or is being entered incorrectly when restoring.**  
One frequent problem is poor handwriting when writing down the SRP; another is writing the words in the _wrong order._ The words must be in the order in which they were originally presented.
6. **The SRP is actually restoring the account, but what is missing is the custom tokens that need to be re-added.**  
You can follow the steps [here](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-View-See-Your-Tokens-and-Custom-Tokens-in-Metamask) to re-add them.#How to install MetaMask manually#
While MetaMask is published on multiple browser extension stores, and these stores benefit from auto-updates, there are reasons you might want to install a copy of MetaMask manually. For example, you may be using an old, unsupported dapp that no longer works with the latest version of MetaMask. Or maybe you're just nostalgic? That's cool too.

In cases like this, the easiest thing to do is to download a pre-build release of MetaMask. You can [retrieve official builds of MetaMask here](https://github.com/MetaMask/metamask-extension/releases). If you're a Brave developer, you can also [build from source](https://github.com/MetaMask/metamask-extension#building-locally).

**Note:** MetaMask updates can include security improvements, so using MetaMask on a browser with an auto-updating store ensures the latest updates and fixes. Sometimes, updates are marked as recommended for security reasons. You can read more about this feature (automatic security checks) and how to control updates [here](https://support.metamask.io/hc/en-us/articles/11199141001243). 

**Also note**: **Installing extensions manually can be dangerous!** When you don't install from a store with lots of good reviews, it is harder to tell you are installing the software you intend to. Only install manually as a last resort. This kind of installation is much more prone to phishing, so make sure you are getting your MetaMask release from a trustworthy (official) source!

See below for instructions for different browsers:

Chrome Firefox Opera 

1. On the [releases](https://github.com/MetaMask/metamask-extension/releases) page, pick a version you’ll like to install.
2. Download the zip file.
3. Unzip the file in a folder.  
![](https://s3.amazonaws.com/helpscout.net/docs/assets/5a4683b50428631938007b15/images/5ad55f7f2c7d3a0e93676302/file-cZj4fAcU0K.jpg)
4. Open Chrome, and type “chrome://extensions” in the browser URL bar.
5. Click "Load Unpacked"
6. On the window pop up, open the the folder unzipped earlier  
![](https://s3.amazonaws.com/helpscout.net/docs/assets/5a4683b50428631938007b15/images/5ad55fb12c7d3a0e93676303/file-tTOoYvTwtu.jpg)
7. MetaMask should now be installed.  
![](https://s3.amazonaws.com/helpscout.net/docs/assets/5a4683b50428631938007b15/images/5ad55fe12c7d3a0e93676304/file-wq1F8l59nd.jpg)

**NOTE: this method requires [Firefox Developer edition.](https://www.mozilla.org/en-US/firefox/developer/)**

1. Visit: <https://addons.mozilla.org/en-US/android/addon/ether-metamask/versions/>
2. Select a version you’d like to download. Click “Download Now”, and then click “Ok” on the pop up that appears.  
![](https://s3.amazonaws.com/helpscout.net/docs/assets/5a4683b50428631938007b15/images/5ad55f310428630750927ba9/file-dr27hNMWgD.jpg)
3. Type “about:addons” into browser URL bar
4. Click the Settings button > Click “Install Add-on from file”
5. Browse for the zip or directory with MetaMask you downloaded.
6. Click "Open"
7. Click "Add" on the pop-up  
![](https://s3.amazonaws.com/helpscout.net/docs/assets/5a4683b50428631938007b15/images/5ad55e9e2c7d3a0e93676300/file-ZyQV3cqrCa.jpg)

Your installation should be complete!

1. Repeat step 1 to 3 of the Chrome instructions above
2. Open Opera extension page > Click “Load unpacked extension”
3. Browse to the unzipped folder, then click “OK”
4. Installation complete

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5a4683b50428631938007b15/images/5ad55e3b2c7d3a0e936762fd/file-kRZUjC24Wy.jpg)#How to fix "Invalid Seed Phrase" error (Invalid Secret Recovery Phrase)#
**DO NOT share your Secret Recovery Phrase with anyone! These words can be used to steal from all your accounts. You can't edit or change your Secret Recovery Phrase.**

1. It's possible that one or more words you've written down is misspelled, or you mistook it for a similar word. To confirm the spelling, and to make sure the word is on the list of possible options for a Secret Recovery Phrase, you can check against the BIP-39 list: <https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt>  
   * _Tip: Use the browser's search function (Cmd+F on Mac and Ctrl+F on Windows) to look for each word that you have written down, so you can check the spelling in your backup. If you can't find it, try the closest word._
2. Make sure your Secret Recovery Phrase is written in the exact **same order** it was provided, with **one space between each word**, and in **lower case**.#Revert back to earlier version, or add custom build to Chrome#
This is fairly advanced functionality, and isn't something you're likely to need to do unless you're a software developer, or unless a Support agent is directing you to do so. Proceed with caution.

Previous versions of MetaMask can be found [here](https://github.com/MetaMask/metamask-extension/releases).

* Open `Settings` \> `Extensions`.
* Alternatively, use the URL `chrome://extensions/` in your address bar
* Check "Developer mode" in the upper right-hand corner.
* At the top, click `Load Unpacked`.
* Navigate to your custom or previous version `metamask-plugin/dist/chrome` folder.
* Click `Select`.
* Change to your locale via `chrome://settings/languages`
* Restart the browser and test the plugin in your locale

You now have the plugin, and can click 'inspect views: background plugin' to view its dev console.

Instructions for Firefox and Opera can be found [here](https://support.metamask.io/hc/en-us/articles/360015489471-How-to-Install-MetaMask-Manually).#I've been hacked/scammed (unauthorized transactions on my account)#
In this situation, your wallet is most likely compromised (someone has obtained unauthorized access). The steps below outline a method for damage limitation: you may be able to rescue some funds from your account before they are removed. 

### Follow these steps as soon as possible:

1. Install MetaMask on another browser (or [another browser profile](https://consensys.net/blog/metamask/how-to-manage-multiple-wallets-with-metamask/)). For Mobile, you'll need a second device, enabling you to create a new instance of MetaMask (if you remove MetaMask from your mobile device and you don't have the [Secret Recovery Phrase backed up](https://support.metamask.io/hc/en-us/articles/360060826432), you won't be able to re-access it).
2. **Create a new MetaMask wallet** on the new browser, browser profile, or mobile device.
3. Write down the Secret Recovery Phrase in the correct order and store it someplace safe. **Never give it to anyone**.
4. Go back to the compromised account and **send any remaining funds to the newly created account**. If you believe there may be a [sweeper script](https://support.metamask.io/hc/en-us/articles/12091923128347) on the compromised account, don't send in any additional ETH or other tokens to pay for gas (if there is a sweeper, try following our guidance [here](https://support.metamask.io/hc/en-us/articles/5716855323675)).
5. Once you've removed all of the funds you can, **discontinue using the old wallet** and any accounts associated with the compromised Secret Recovery Phrase.
6. [Report the scam ](https://support.metamask.io/hc/en-us/articles/5168786362779)to the relevant authorities.

**Unfortunately, transactions cannot be reversed, nor missing funds restored. MetaMask is a [self-custodial wallet](https://support.metamask.io/hc/en-us/articles/360059952212), which means we cannot control access to user accounts, nor intervene and rescue your account or funds for you.**

## **Why did this happen?** 

Due to the sheer scale and scope of web3, there is an enormous abundance of attack vectors that could have been the reason your wallet was compromised. Some common causes are listed below:

* Your computer has been compromised with malicious software and you stored your private information on your computer, allowing it to identify and retrieve your Secret Recovery Phrase, for example.
* You have visited a malicious phishing website that stole your information.
* You gave your private key or Secret Recovery Phrase to someone or a site.
* You gave a dapp or site's smart contract unlimited access to your funds (find out how to revoke access [here](https://support.metamask.io/hc/en-us/articles/4446106184731)).
* You installed a fake MetaMask extension that stole your funds.

Try to analyze your browser history and scan your computer to eliminate any further breach of information. If you discover any suspicious phishing websites please follow the steps in our [How to report a scam](https://support.metamask.io/hc/en-us/articles/5168786362779) article so we can prevent this from happening to other users in the future. If you have any further information after your own investigation, please let us know.#How to disable or enable MetaMask Extension auto-updates#
If it's how you've set up your browser, MetaMask Extension is automatically updated when a new version is released.

While most browsers encourage users to get updates automatically (as do we), users can enable or disable auto-updates on some browsers.

Here’s how:

### Chrome-based browsers (Chrome, Brave)

Google Chrome and similar browsers, such as Brave, don’t (explicitly) support users to disable [extension auto-updates](https://developer.chrome.com/apps/autoupdate). Some users explore [workarounds here](https://productforums.google.com/forum/#!topic/chrome/l3zOZeO-5-M), but they're complex and we would not encourage our users to explore this route.

### FireFox

1. In the search bar, type: 'about:addons'
2. Click on the MetaMask extension tile
3. Scroll down to the 'Allow automatic updates' field and adjust according to your preference.#Why can a site get blocklisted?#
MetaMask makes it easy for new users to get started with Ethereum partly because it doesn't require users to download the full blockchain to start using Ethereum-enabled sites.

We do this by hosting blockchain servers for free, via a great service called [Infura](https://infura.io/).

Sometimes, a site can load a lot of data over our servers, and if enough users use that site, it can affect our service for users of other sites. At times like this, we are forced to rate limit, or even blocklist sites from MetaMask compatibility.

Our first incident of this sort was the EOS Token Distribution site. Their site loaded a lot of information off the blockchain, and it made MetaMask unreliable for users around the world.

If you find a site has been rate-limited or blocklisted from MetaMask, you can get around this limitation by running a local node of Ethereum.#What are MetaMask's official support channels?#
When trying to [get support for MetaMask](https://support.metamask.io/hc/en-us/articles/360058969391), **always** be wary of who you're communicating with. A reliable rule of thumb is that **if anyone asks for your Secret Recovery Phrase, they are trying to scam you**. 

**If you aren't sure whether or not something or someone is legitimate, ignore it**. To check whether something is genuine, get in touch with us via the 'Start a Conversation' button on our [Support homepage](https://support.metamask.io/hc/en-us) and we will advise.

### MetaMask representatives will only ever contact you via:

* **Email**, concerning [open tickets](https://support.metamask.io/hc/en-us/articles/4453556284571), from the domains _@metamask.io_ or _@metamask.zendesk.com_. If you haven't already given us your email to create a support ticket, we do not have it — remember [MetaMask does not ask for your email to create a wallet](https://support.metamask.io/hc/en-us/articles/360059952212-MetaMask-is-a-non-custodial-wallet#:~:text=MetaMask%20doesn%27t%20store%20any%20data%20about%20the%20wallet.%20Everything%20you%20see%20is%20in%20your%20browser%20or%20your%20mobile%20app%20at%20a%20local%20level.%20There%20are%20no%20email%20addresses%20associated%20with%20accounts.%20There%20is%20only%20a%20Secret%20Recovery%20Phrase%20%28seed%20phrase%29%20that%20is%20given%20once%20and%20cannot%20be%20changed%20or%20reset.). If your email does not come from one of these addresses, ignore it; scammers have been known to target people with open tickets asking for Secret Recovery Phrases. We will never do this. Other common scam emails may involve asking you to follow a link to[ 'verify' or 'confirm' your account](https://support.metamask.io/hc/en-us/articles/6286050620955), often with a sense of urgency. See here for more information: [I received an email claiming to be from MetaMask. Is it legit?](https://support.metamask.io/hc/en-us/articles/12683145255835)
* Through our [**Community** platform](https://community.metamask.io/). As the rules at the top of our Community page detail, **we will never DM you offering support**. The [MetaMask subreddit](https://www.reddit.com/r/Metamask/) is an extension of our Community and is also moderated by team members. However, as on any other platform, **we will never DM you on Reddit**.
* Through the **chat** accessed through the 'Start a Conversation' button on our [Support landing page](https://support.metamask.io/hc/en-us). This is our main channel for support communication.

#### 'Start a Conversation' button not loading?

It may be because of ad blockers or other browser features. See our article for more information: [I can't access the 'Start a Conversation' button on the Support page](https://support.metamask.io/hc/en-us/articles/5973459712283)

MetaMask Support also has a [verified Twitter account](https://twitter.com/metamasksupport?lang=en), which is primarily to share important information to help out you and fellow users. **MetaMask will never contact you about your Support case on Twitter**.

### Here is a non-exhaustive list of ways MetaMask will _not_ contact you: 

* Discord
* WhatsApp
* Facebook
* Telegram
* Twitter
* Text/SMS
* Instagram

Any group that you find on Telegram, WhatsApp, or Instagram that claims to be an official MetaMask group should be considered at best a fan club, and at worst an attempt at social engineering with the goal of stealing peoples' crypto-assets.