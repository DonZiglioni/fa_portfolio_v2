# Frank Azzaro

### [https://frankazzaro.com](https://frankazzaro.com) 

```javascript
    let failures = [∞];

    const tryAgain = (failures) => {
        if (failures > 0) {
            failures.forEach((event)=>{
                localStorage.setItem("lessonLearned", JSON.stringify(event));
                evaluateEvent(event);
                tryAgain(failures);
            });
        };
    };

    tryAgain(failures);
```