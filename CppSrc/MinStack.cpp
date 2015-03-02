template <typename T>
class Stack {
    private:
        T* _stack;
        int _capacity;
        int _top;
    public:
        Stack():_capacity(1),_top(-1){
            _stack = (T*)malloc(_capacity*sizeof(T));
        }

        ~Stack(){
            free(_stack);
        }

        void push(T x){
            _top++;
            if ( _top >= _capacity ){
                //if capacity is not enough, enlarge it 5 times.
                //Notes: why 5 times? because if you change to other(e.g. 2 times), 
                //       LeetCode system will report Run-time Error! it sucks!
                _capacity*=5;
                _stack = (T*)realloc(_stack, _capacity*sizeof(T));
            }
            _stack[_top] = x;
        }

        T pop() {
            return top(true);
        }

        T& top(bool pop=false) {
            if (_top>=0){
                if (pop){
                    return _stack[_top--];
                }
                return _stack[_top];
            }
            static T null;
            return null;
        }

        bool empty(){
            return (_top<0);
        }
        int size() {
            return _top+1;
        }
        void clear(){
            _top = -1;
        }
};

class MinStack {
    private:
        struct minData{
            int min;
            int cnt;
            minData():min(0), cnt(0) {}
            minData(int m, int c):min(m),cnt(c){}
        };
        Stack<int> stack; //real stack store the data
        Stack<minData> minStack; //minimal number stack store the number 
        int min; //current minial number

    public:

        void push(int x) {
            if(stack.empty()){
                min = x;
                minStack.push(minData(x,1));
            }else{
                if (min >= x ){
                    min = x;
                    //if current minial number already pushed, then just add the reference coount.
                    if (minStack.top().min == x){
                        minStack.top().cnt++;
                    }else{
                        minStack.push(minData(x,1));
                    }
                }
            }
            stack.push(x);

        }

        void pop() {
            if (stack.empty()){
                return;
            }
            int x = stack.pop();
            if (x == minStack.top().min){
                //de-reference the count at first.
                if (minStack.top().cnt > 1){
                    minStack.top().cnt--;
                }else{
                    minStack.pop();
                    min = minStack.top().min;
                }
            }
        }

        int top() {
            return stack.top();
        }

        int getMin() {
            return min;
        }
        void clear() {
            stack.clear();
            minStack.clear();
        }

};
