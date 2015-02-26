class Solution {
    public:
        vector<int> split(const string &s, char delim) {
            vector<int> elems;
            int size = s.size();
            int i = 0;
            int main = 0;
            while(s[i] != delim && size != i) {
                main *= 10;
                main += s[i] - '0';
                i ++;
            }
            elems.push_back(main);
            int sub = 0; 
            for (int j = i + 1; j < size; j ++) {
                sub *= 10;
                sub += s[j] - '0';
            }
            elems.push_back(sub);
            return elems;
        }

        void rightTrimZero(vector<int> &v){
            while (v.back() == 0){
                v.pop_back();
            }
        }

        int compareVersion(string version1, string version2) {

            //split the version by delimer '.'
            vector<int> ver1 = split(version1, '.');
            vector<int> ver2 = split(version2, '.');

            //remove the right Zeros
            rightTrimZero(ver1);
            rightTrimZero(ver2);

            //compare two versions 
            for (int i=0; i<ver1.size() && i < ver2.size(); i++) {
                if (ver1[i] < ver2[i]){
                    return -1;
                }else if(ver1[i] > ver2[i]){
                    return 1;
                }
            }

            //if the above for-loop is not returned, which means they are equal so far
            //then check the length.
            if (ver1.size() > ver2.size()) {
                return 1;
            }else if (ver1.size() < ver2.size()) {
                return -1;
            }

            return 0;

        }

};
