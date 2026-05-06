#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

template<typename T>
class SplayTree {
private:
    struct Node {
        T element;
        int freq;   
        Node *left, *right;

        Node(T val, Node* l=nullptr, Node* r=nullptr)
            : element(val), freq(1), left(l), right(r) {}
    };

    Node* root;
    Node* nullNode;

    
    void rotateLeft(Node* &k2){
        Node* k1 = k2->right;
        k2->right = k1->left;
        k1->left = k2;
        k2 = k1;
    }

    void rotateRight(Node* &k1){
        Node* k2 = k1->left;
        k1->left = k2->right;
        k2->right = k1;
        k1 = k2;
    }

    
    void splay(const T &x, Node* &t){
        static Node header(0);
        Node *LeftTreeMax, *RightTreeMin;

        header.left = header.right = nullNode;
        LeftTreeMax = RightTreeMin = &header;

        nullNode->element = x;

        while(true){
            if(x < t->element){
                if(x < t->left->element)
                    rotateRight(t);

                if(t->left == nullNode) break;

                RightTreeMin->left = t;
                RightTreeMin = t;
                t = t->left;
            }
            else if(x > t->element){
                if(x > t->right->element)
                    rotateLeft(t);

                if(t->right == nullNode) break;

                LeftTreeMax->right = t;
                LeftTreeMax = t;
                t = t->right;
            }
            else break;
        }

        LeftTreeMax->right = t->left;
        RightTreeMin->left = t->right;
        t->left = header.right;
        t->right = header.left;
    }

    
    void collect(Node* t, vector<pair<int,T>> &arr){
        if(t == nullNode) return;
        collect(t->left, arr);
        arr.push_back({t->freq, t->element});
        collect(t->right, arr);
    }

public:
    SplayTree(){
        nullNode = new Node(0);
        nullNode->left = nullNode->right = nullNode;
        root = nullNode;
    }

    
    void insert(const T &x){
        static Node* newNode = nullptr;

        if(newNode == nullptr)
            newNode = new Node(x);

        newNode->element = x;

        if(root == nullNode){
            newNode->left = newNode->right = nullNode;
            root = newNode;
        }
        else{
            splay(x, root);

            if(x < root->element){
                newNode->left = root->left;
                newNode->right = root;
                root->left = nullNode;
                root = newNode;
            }
            else if(x > root->element){
                newNode->right = root->right;
                newNode->left = root;
                root->right = nullNode;
                root = newNode;
            }
            else return;
        }
        newNode = nullptr;
    }

    
    bool search(const T &x){
        if(root == nullNode) return false;

        splay(x, root);

        if(root->element == x){
            root->freq++;   
            return true;
        }
        return false;
    }

    
    vector<T> getTopK(int k){
        vector<pair<int,T>> arr;
        collect(root, arr);

        sort(arr.rbegin(), arr.rend());

        vector<T> res;
        for(int i=0; i<k && i<arr.size(); i++){
            res.push_back(arr[i].second);
        }
        return res;
    }
};
SplayTree<int> tree;

extern "C" {


void accessJob(int id){
    if(!tree.search(id)){
        tree.insert(id);
    }
}


void getTopJobs(int* result, int k){
    vector<int> top = tree.getTopK(k);

    for(int i=0;i<k;i++){
        if(i < top.size())
            result[i] = top[i];
        else
            result[i] = -1;
    }
}

}